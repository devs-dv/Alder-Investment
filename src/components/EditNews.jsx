import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/lib/supbaseClient";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  heading: z.string().min(2, {
    message: "Heading must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  section_id: z.string({
    required_error: "Please select a section.",
  }),
  pdfAttachment: z
    .instanceof(File)
    .refine((file) => file.type === "application/pdf", {
      message: "Only PDF files are allowed",
    })
    .optional(),
});

export function EditNews() {
  const [pdfFile, setPdfFile] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      heading: "",
      description: "",
      section_id: "",
    },
  });

  useEffect(() => {
    fetchSections();
    fetchNewsItem();
  }, [id]);

  async function fetchSections() {
    const { data, error } = await supabase.from("sections").select("id, name");

    if (error) {
      console.error("Error fetching sections:", error);
      toast({
        title: "Error",
        description: "Failed to load sections. Please try again.",
        variant: "destructive",
      });
    } else {
      setSections(data);
    }
  }

  async function fetchNewsItem() {
    setLoading(true);
    const { data, error } = await supabase
      .from("news")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching news item:", error);
      toast({
        title: "Error",
        description: "Failed to load news item. Please try again.",
        variant: "destructive",
      });
      navigate("/dashboard/news-list");
    } else {
      form.reset({
        heading: data.heading,
        description: data.description,
        section_id: data.section_id,
      });
      if (data.pdf_attachment) {
        setPdfFile({ name: "Current PDF" });
      }
    }
    setLoading(false);
  }

  async function onSubmit(values) {
    try {
      let pdfUrl = null;
      if (pdfFile instanceof File) {
        const fileExt = pdfFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("news-attachments")
          .upload(fileName, pdfFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) throw error;

        const { data: urlData } = supabase.storage
          .from("news-attachments")
          .getPublicUrl(fileName);

        pdfUrl = urlData.publicUrl;
      }

      const { data, error } = await supabase
        .from("news")
        .update({
          heading: values.heading,
          description: values.description,
          section_id: values.section_id,
          ...(pdfUrl && { pdf_attachment: pdfUrl }),
        })
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "News item updated successfully!",
      });

      navigate("/dashboard/news-list");
    } catch (error) {
      console.error("Error updating news:", error);
      toast({
        title: "Error",
        description:
          error.message || "Failed to update news. Please try again.",
        variant: "destructive",
      });
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-13rem)]">
      <div className="w-full max-w-[500px] border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold border-b px-6 py-4">Edit News</h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex gap-5 flex-col p-6"
          >
            <FormField
              control={form.control}
              name="heading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heading</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="News heading"
                      className="h-11 shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="News description"
                      className="resize-none shadow-none"
                      rows={7}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="section_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Section</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a section" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {sections.map((section) => (
                        <SelectItem key={section.id} value={section.id}>
                          {section.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="pdfAttachment"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PDF Attachment</FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      <Input
                        type="file"
                        accept=".pdf"
                        className="shadow-none"
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            if (file.size <= 10 * 1024 * 1024) {
                              field.onChange(file);
                              setPdfFile(file);
                            } else {
                              toast({
                                title: "Error",
                                description:
                                  "File size must be less than 10MB.",
                                variant: "destructive",
                              });
                              e.target.value = "";
                            }
                          }
                        }}
                      />
                      {pdfFile && (
                        <Badge variant="secondary" className="gap-1">
                          {pdfFile.name}
                          <X
                            className="h-3 w-3 cursor-pointer"
                            onClick={() => {
                              field.onChange(null);
                              setPdfFile(null);
                            }}
                          />
                        </Badge>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/dashboard/news-list")}
              >
                Cancel
              </Button>
              <Button type="submit">Update News</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}

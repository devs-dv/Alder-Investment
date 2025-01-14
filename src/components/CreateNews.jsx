import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supbaseClient";
import { useAuth } from "@/hooks/useAuth";
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

export function CreateNews() {
  const [pdfFile, setPdfFile] = useState(null);
  const [sections, setSections] = useState([]);
  const { user } = useAuth();
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
    async function fetchSections() {
      const { data, error } = await supabase
        .from("sections")
        .select("id, name");

      if (error) {
        console.error("Error fetching sections:", error);
        toast({
          title: "Error",
          description: "Failed to load sections. Please try again.",
          variant: "destructive",
        });
      } else {
        console.log("Fetched sections:", data);
        setSections(data);
      }
    }

    fetchSections();
  }, []);

  async function onSubmit(values) {
    if (!user) {
      toast({
        title: "Error",
        description: "You must be logged in to create news.",
        variant: "destructive",
      });
      return;
    }

    try {
      console.log("Starting news creation process");
      console.log("Form values:", values);

      // Upload PDF file
      let pdfUrl = null;
      if (pdfFile) {
        console.log("Uploading PDF file");
        const fileExt = pdfFile.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("news-attachments")
          .upload(fileName, pdfFile, {
            cacheControl: "3600",
            upsert: false,
          });

        if (error) {
          console.error("Error uploading file:", error);
          throw new Error(`File upload failed: ${error.message}`);
        }

        console.log("File uploaded successfully:", data);

        const { data: urlData } = supabase.storage
          .from("news-attachments")
          .getPublicUrl(fileName);

        pdfUrl = urlData.publicUrl;
        console.log("PDF URL:", pdfUrl);
      }

      // Insert news into the database
      console.log("Inserting news into database");
      const { data, error } = await supabase
        .from("news")
        .insert({
          user_id: user.id,
          heading: values.heading,
          description: values.description,
          section_id: values.section_id,
          pdf_attachment: pdfUrl,
          original_filename: pdfFile ? pdfFile.name : null,
        })
        .select();

      if (error) {
        console.error("Error inserting news:", error);
        throw new Error(`News creation failed: ${error.message}`);
      }

      console.log("News created successfully:", data);

      toast({
        title: "Success",
        description: "News created successfully!",
      });
      navigate("/dashboard/news-list");

      form.reset();
      setPdfFile(null);
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) {
        fileInput.value = "";
      }
    } catch (error) {
      console.error("Error creating news:", error);
      toast({
        title: "Error",
        description:
          error.message || "Failed to create news. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-13rem)]">
      <div className="w-full max-w-[500px] border border-gray-200 rounded-lg">
        <h2 className="text-2xl font-bold border-b px-6 py-4">Create News</h2>
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
                    defaultValue=""
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
                              e.target.value = ""; // Reset the input
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
            <Button type="submit" className="w-full h-11 mt-2">
              Submit News
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

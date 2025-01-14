import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supbaseClient";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function NewsLists() {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("news")
        .select(
          `
          id,
          heading,
          description,
          created_at,
          updated_at,
          sections (
            id,
            name
          )
        `
        )
        .order("created_at", { ascending: false });

      if (error) throw error;

      setNewsItems(data || []);
    } catch (error) {
      setError("Failed to fetch news items");
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleEdit = (id) => {
    navigate(`/dashboard/edit-news/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase.from("news").delete().eq("id", id);

      if (error) throw error;

      setNewsItems(newsItems.filter((item) => item.id !== id));
      toast({
        title: "Success",
        description: "News item deleted successfully",
      });
    } catch (error) {
      console.error("Error deleting news item:", error);
      toast({
        title: "Error",
        description: "Failed to delete news item",
        variant: "destructive",
      });
    }
  };

  const isUpdated = (createdAt, updatedAt) => {
    return new Date(updatedAt).getTime() - new Date(createdAt).getTime() > 1000;
  };

  if (loading) {
    return <div className="text-center">Loading news items...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 container mx-auto gap-3">
      {newsItems.map((item) => (
        <Card key={item.id} className="shadow-none">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-xl font-bold truncate w-72">
                  {item.heading}
                </CardTitle>
              </div>
              <Badge variant="secondary">{item.sections.name}</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-[#545454] line-clamp-2">{item.description}</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="text-sm text-[#545454]">
              {new Date(item.created_at)
                .toLocaleString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
                .replace(",", "")}

              {isUpdated(item.created_at, item.updated_at) && (
                <span className="text-xs text-[#545454] ml-2">(Updated)</span>
              )}
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleEdit(item.id)}
              >
                <Pencil className="h-4 w-4" />
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => handleDelete(item.id)}
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

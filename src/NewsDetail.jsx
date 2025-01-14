import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supbaseClient";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewsDetail() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pdfName, setPdfName] = useState("");
  const [pdfSize, setPdfSize] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNewsDetail() {
      try {
        const { data, error } = await supabase
          .from("news")
          .select(
            `
            *,
            sections (
              name
            ),
            original_filename
          `
          )
          .eq("id", id)
          .single();

        if (error) throw error;
        setNews(data);

        if (data && data.pdf_attachment) {
          setPdfName(data.original_filename || "Unnamed File");

          // Fetch file size
          const { data: fileData, error: fileError } = await supabase.storage
            .from("news-attachments")
            .download(data.pdf_attachment.split("/").pop());

          if (fileData) {
            const fileSizeInBytes = fileData.size;
            const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
            setPdfSize(`${fileSizeInMB} MB`);
          }
        }
      } catch (error) {
        console.error("Error fetching news detail:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsDetail();
  }, [id]);

  const handlePdfClick = () => {
    if (news && news.pdf_attachment) {
      window.open(news.pdf_attachment, "_blank");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e7e6e2] flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!news) {
    return (
      <div className="min-h-screen bg-[#e7e6e2] flex items-center justify-center">
        <div className="text-xl">News not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#e7e6e2]">
      <div className="max-w-4xl mx-auto p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8"
        >
          <Button
            variant="ghost"
            className="mb-6 hover:bg-gray-100"
            onClick={() => navigate("/news")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold mb-4"
          >
            {news.heading}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-between mb-6"
          >
            <span className="bg-black text-white py-1 px-3 rounded-full text-sm">
              {news.sections.name}
            </span>
            <span className="text-gray-600">
              {new Date(news.created_at)
                .toLocaleString("en-CA", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
                .replace(",", "")}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="prose max-w-none mb-8"
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {news.description}
            </p>
          </motion.div>

          {news.pdf_attachment && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={handlePdfClick}
              >
                <FileText className="w-4 h-4" />
                {pdfName} ({pdfSize})
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

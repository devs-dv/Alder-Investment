import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { supabase } from "@/lib/supbaseClient";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import Header from "./components/Header";
import InsightItem from "./components/InsightItem";

export default function AlderNewsBulletin() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const { data, error } = await supabase
          .from("news")
          .select(
            `
            id,
            heading,
            description,
            created_at,
            sections (name)
          `
          )
          .order("created_at", { ascending: false });

        if (error) throw error;

        const formattedNews = data.map((item) => ({
          id: item.id,
          title: item.heading,
          excerpt: item.description,
          category: item.sections.name,
          date: new Date(item.created_at).toISOString().split("T")[0],
        }));

        setNewsItems(formattedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const filteredItems = newsItems.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    scrollToTop();
  };

  return (
    <div className="" style={{ backgroundColor: "#e7e6e2", color: "#545454" }}>
      <NavBar />
      <div className="max-w-6xl mx-auto p-8">
        <Header />
        <main className="mt-12">
          <Input
            type="search"
            placeholder="Search News..."
            className="border border-black/40 ml-auto w-full md:w-[400px]"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <motion.div
            className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            <AnimatePresence>
              {loading ? (
                <div className="col-span-2 text-center">Loading...</div>
              ) : paginatedItems.length > 0 ? (
                paginatedItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <InsightItem {...item} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-2 text-center">No News Yet</div>
              )}
            </AnimatePresence>
          </motion.div>
          {pageCount > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() =>
                      handlePageChange(Math.max(1, currentPage - 1))
                    }
                    className={
                      currentPage === 1
                        ? "cursor-pointer opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
                {[...Array(pageCount)].map((_, index) => (
                  <PaginationItem key={index} className="cursor-pointer">
                    <PaginationLink
                      className="cursor-pointer"
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() =>
                      handlePageChange(Math.min(pageCount, currentPage + 1))
                    }
                    className={
                      currentPage === pageCount
                        ? "cursor-pointer opacity-50"
                        : "cursor-pointer"
                    }
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </main>
      </div>
      <AnimatePresence>
        {showScrollToTop && (
          <motion.button
            className="fixed bottom-20 right-8 bg-black text-white p-3 rounded-full shadow-lg"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

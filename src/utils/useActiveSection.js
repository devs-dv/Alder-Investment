import { useState, useEffect } from "react";

export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Update visible sections
        entries.forEach((entry) => {
          setVisibleSections((prev) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              return [...new Set([...prev, entry.target.id])];
            } else {
              return prev.filter((id) => id !== entry.target.id);
            }
          });
        });
      },
      {
        threshold: [0, 0.2, 1],
        rootMargin: "-46px 0px 0px 0px", // Adjust for header height
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds]);

  // Update active section when visible sections change
  useEffect(() => {
    if (visibleSections.length > 0) {
      // Find the first visible section in the original sectionIds order
      const firstVisibleSection = sectionIds.find((id) =>
        visibleSections.includes(id)
      );
      setActiveSection(firstVisibleSection);
    }
  }, [visibleSections, sectionIds]);

  return activeSection;
}

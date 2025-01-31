import { useState, useRef, useEffect } from "react";

export default function ReadMore({ onClick, text, className }) {
  const [isHovered, setIsHovered] = useState(false);
  const lineRef = useRef(null);
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (lineRef.current) {
      setLineWidth(lineRef.current.offsetWidth);
    }
  }, []);

  return (
    <button
      className={`group inline-flex flex-col items-start gap-2 no-underline ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="flex items-center gap-2">
        <span className="text-xl text-gray-800">{text}</span>
        <div
          ref={lineRef}
          className="relative h-[1px] w-8 bg-gray-800 overflow-hidden"
        >
          <div
            className="absolute inset-0 h-full bg-gray-200 transition-all duration-300 ease-in-out"
            style={{
              width: lineWidth + "px",
              transform: `translateX(${isHovered ? "0%" : "-100%"})`,
            }}
          />
        </div>
      </div>
    </button>
  );
}

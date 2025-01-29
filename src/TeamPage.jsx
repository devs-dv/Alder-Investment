import React, { useRef, useEffect, useState } from "react";
import "./index.css";
import ReadBioButton from "./ReadBioButton";
import ReadBioButton2 from "./ReadBio2Button";

const teamMembers = [
  {
    id: 1,
    name: "Hee-Dong Konstantin Kim",
    nameKr: "희동 콘스탄틴 김",
    title: "CEO",
    titleKr: "CEO",
    image: "1st.jpg",
  },
  {
    id: 2,
    name: "Junho Kim",
    nameKr: "김준호",
    position: "Managing Director",
    title: "Investment management",
    titleKr: "Investment management",
    image: "2nd.jpg",
  },
  {
    id: 3,
    name: "Kihyun Shin",
    nameKr: "신기현",
    position: "Managing Director",
    title: "Compliance",
    titleKr: "Compliance",
    image: "3rd.jpg",
  },
  {
    id: 4,
    name: "Jinhee Kim",
    nameKr: "김진희",
    position: "Vice President",
    title: "Fund operations",
    titleKr: "Fund operations",
    image: "4th.jpg",
  },
  {
    id: 5,
    name: "Jihyun Seo",
    nameKr: "서지현",
    position: "Vice President",
    title: "Operations",
    titleKr: "Operations",
    image: "5th.jpg",
  },
  {
    id: 6,
    name: "Chanwoo Kang",
    nameKr: "강찬우",
    position: "Senior Associate",
    title: "Investment management",
    titleKr: "Investment management",
    image: "6th.jpg",
  },
  {
    id: 7,
    name: "Jinsu Lim",
    nameKr: "임진수",
    position: "Senior Associate",
    title: "Investment management",
    titleKr: "Investment management",
    image: "7th.jpg",
  },
];

export default function TeamPage({ language, setIsSidebarOpen, setPeople }) {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollWidth = container.scrollWidth - container.clientWidth;
      const scrollPosition = container.scrollLeft;
      const progress = (scrollPosition / scrollWidth) * 100;
      setScrollProgress(progress);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const handleReadBio = (name) => {
    setIsSidebarOpen(true);
    setPeople(name);
  };

  return (
    <div id="people" className="team-page">
      <div className="bg-[#E7E6E2] lg:ml-auto hidden md:block ">
        {/* Team Scroller Section */}
        <div className="overflow-x-auto custom-scrollbar" ref={containerRef}>
          <div className="flex w-max">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="flex-none w-1/4"
                style={{ flexShrink: 0 }}
              >
                <div className="flex flex-col items-center py-6">
                  <div
                    className="w-40 h-auto overflow-hidden bg-white cursor-pointer"
                    onClick={() => handleReadBio(member.name)}
                  >
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-left mt-4">
                    {language ? (
                      <div
                        className="cursor-pointer"
                        onClick={() => handleReadBio(member.name)}
                      >
                        <h2 className="text-xl text-gray-900">{member.name}</h2>
                        <p className="text-sm mb-1 text-gray-500">
                          {member.position}
                        </p>
                        <p className="text-sm text-gray-500">{member.title}</p>
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer"
                        onClick={() => handleReadBio(member.name)}
                      >
                        <h2 className="text-xl text-gray-900">
                          {member.nameKr}
                        </h2>
                        <p className="text-sm mb-1 text-gray-500">
                          {member.position}
                        </p>
                        <p className="text-sm text-gray-500">
                          {member.titleKr}
                        </p>
                      </div>
                    )}
                    <ReadBioButton2
                      onClick={() => handleReadBio(member.name)}
                      text={language ? "Read Bio" : "이력 보기"}
                      className={`-ml-4 mt-2 ${
                        member.name === "Hee-Dong Konstantin Kim" ? "mt-7" : ""
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        {/* Commented out as per original code */}
      </div>
      <div className="md:hidden">
        <div className="grid grid-cols-2 gap-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-40 h-40 mb-4 object-contain cursor-pointer"
                onClick={() => handleReadBio(member.name)}
              />
              <div
                className="cursor-pointer"
                onClick={() => handleReadBio(member.name)}
              >
                <h2 className="text-lg font-bold">
                  {language
                    ? member.name === "Hee-Dong Konstantin Kim"
                      ? "Konstantin Kim"
                      : member.name
                    : member.nameKr}
                </h2>
                <p className="text-sm mb-1 text-gray-500">{member.position}</p>
                <p className="text-sm text-gray-500">
                  {language ? member.title : member.titleKr}
                </p>
              </div>
              <ReadBioButton2
                onClick={() => handleReadBio(member.name)}
                text={language ? "Read Bio" : "이력 보기"}
                className={`mt-2 ${
                  member.name === "Hee-Dong Konstantin Kim" ? "mt-7" : ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

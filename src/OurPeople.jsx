import React, { useState } from "react";
import ReadBio from "./ReadBio";
import ReadBioButton from "./ReadBioButton";
import TeamPage from "./TeamPage";

const OurPeople = ({ language, setLanguage }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [people, setPeople] = useState("");
  console.log(people);

  const contentData = {
    englishTitle: "OUR PEOPLE",
    koreanTitle: "OUR PEOPLE",

    teamMembers: [
      {
        name: "Hee-Dong Konstantin Kim",
        position: "CEO",
        koreanName: "희동 콘스탄틴 김",
        koreanPosition: "최고 경영자",
        image: "1st.jpg",
      },
      {
        name: "Junho Kim",
        position: "Investment management",
        koreanName: "김준호",
        koreanPosition: "최고 개발 책임자",
        image: "2nd.jpg",
      },
    ],
  };

  return (
    <section className="bg-[#e7e6e2] py-16 px-5 md:px-10" id="people">
      {/* Title & Descriptions */}
      <h2 className="text-[#4A4A4A] text-3xl font-medium lg:hidden pb-2 lg:pb-10">
        {language ? contentData.englishTitle : contentData.koreanTitle}
      </h2>

      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
        {/* Left Section */}
        <div className="flex-1 ">
          <h2 className="text-[#4A4A4A] mb-4 text-3xl font-medium hidden lg:block">
            {language ? contentData.englishTitle : contentData.koreanTitle}
          </h2>

          {language ? (
            <p className="text-[#545454] md:text-base font-light md:w-[533px]">
              Our team consists of professionals of exceptional caliber, whose
              expertise and insight aligns with our vision and strategy.
            </p>
          ) : (
            <p
              className="text-[#545454] md:text-base font-light md:w-[533px]"
              style={{ wordBreak: "keep-all" }}
            >
              우리는 회사의 비전과 전략에 부합하는 뛰어난 전문성과 깊은 통찰력을
              지닌 <br /> 전문가 들로 구성되어 있습니다
            </p>
          )}
        </div>

        {/* Right Section */}
        <div className="flex-[2] min-w-0 lg:mt-8">
          <TeamPage
            language={language}
            setIsSidebarOpen={setIsSidebarOpen}
            setPeople={setPeople}
          />
        </div>
      </div>

      <ReadBio
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        selectedName={people}
        language={language}
      />
      <div className="mt-20"></div>
      {/* Team Members Section */}
      {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 py-20">
        {contentData.teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index === 0 ? "lg:col-start-2" : ""
            }`}
          >
            <img
              src={member.imageUrl}
              alt={member.name}
              className="w-40 h-auto mb-6"
            />
            <div className="text-left">
              
              {language ? (
                <>
                  <div className="flex">
                    <div className="flex flex-col gap-3">
                      <p
                        className="text-[#545454] font-semibold text-base max-lg:h-10"
                        dangerouslySetInnerHTML={{ __html: member.name }}
                      ></p>
                      <p className="text-[#545454] text-base">
                        {member.position}
                      </p>
                    </div>
                  </div>
                  <ReadBioButton
                    onClick={() => {
                      setIsSidebarOpen(true);
                      setPeople(member.name);
                    }}
                    text="Read Bio"
                    className="-ml-3"
                  />
                </>
              ) : (
                <>
                  <div className="flex gap-5">
                    <div className="flex flex-col gap-3">
                      <p className="text-[#545454] font-semibold text-base">
                        {member.koreanName}
                      </p>
                      <p className="text-[#545454] text-base">
                        {member.koreanPosition}
                      </p>
                    </div>
                  </div>
                  <ReadBioButton
                    onClick={() => {
                      setIsSidebarOpen(true);
                      setPeople(member.name);
                    }}
                    text="이력 보기"
                  />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <ReadBio
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        selectedName={people}
        language={language}
      /> */}
    </section>
  );
};

export default OurPeople;

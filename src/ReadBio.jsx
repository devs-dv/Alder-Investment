import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { li } from "framer-motion/client";

const peopleData = [
  {
    name: "Hee-Dong Konstantin Kim",
    nameK: "희동 콘스탄틴 김",
    image: "1st.jpg",
    role: "CEO",
    roleK: "최고 경영자",
    bio: [
      "After years working alongside family offices and ultra-high-net-worth individuals in Europe, Hee-Dong identified critical opportunities to address unmet needs in Korea's wealth management sector. With the support of one of Korea’s influential families, ALDER INVESTMENTS was founded based on two principles: global standards & access and independent integrity.",
      "Recognising the limited exposure Korean UHNWs had to global markets and investment opportunities, ALDER Investments focuses on providing truly independent, client-focused investment advice and management at the highest level—free from conflicts of interest—while prioritising each family's unique needs and goals.",
      "Prior to ALDER Investments, Hee-Dong worked at Kingsley Capital Partners LLP (London), Invision Private Equity, the Boston Consulting Group and as Head of M&A of Swiss healthcare group AMEOS.",
      "Hee-Dong has a B.Sc. degree in Business Mathematics and Statistics from the London School of Economics and Political Science (LSE) and an MBA from Harvard Business School.",
    ],
    bioK: [
      "유럽에서 패밀리 오피스와 초고액 자산가들과 긴밀히 협력해 온 김희동 대표는 한국 자산관리 시장의 가능성과 성장 잠재력을 확인했습니다. 한국의 영향력 있는 한 가문의 지원을 받아, 글로벌 접근성과 독립적 판단이라는 두 가지 원칙을 기반으로 ALDER INVESTMENTS가 설립되었습니다.",
      "그는 한국의 초고액 자산가들이 글로벌 시장과 투자 기회에 충분히 접근하지 못하고 있다는 점에 주목하며, 독립성과 글로벌 접근성을 ALDER INVESTMENTS의 핵심 원칙으로 정립 했습니다.",
      "ALDER는 각 패밀리의 고유한 요구사항과 목표를 최우선으로 하며, 기관이나 기업의 이해관계에서 독립적으로 고객만을 위한 최고 수준의 투자 자문과 자산관리를 제공합니다.",
      "김 대표는 ALDER INVESTMENTS를 설립하기 전, Kingsley Capital Partners(런던), Invision Private Equity, Boston Consulting Group, 그리고 스위스 헬스케어 그룹 AMEOS에서 M&A 총괄로 근무했습니다. ",
      "그는 런던정경대(LSE)에서 비즈니스 수학 및 통계학 학사 학위를, Harvard Business School에서 MBA를 취득하였습니다",
    ],
    email: "hk.kim@alderpartners.co.kr",
    phone: "tel:+82-10-8918-180",
    linkedin: "https://www.linkedin.com/in/person",
  },
  {
    name: "Junho Kim",
    nameK: "김준호",
    image: "2nd.jpg",
    role: "Partner",
    roleK: "최고 개발 책임자",
    bio: [
      "Junho Kim is a seasoned professional with extensive experience in equity research, due-diligence, and corporate strategy.",
      "His expertise extends beyond financial analysis, encompassing hands-on execution of value enhancement initiatives in collaboration with senior management teams.",
      "As a founding member of ALDER Investments, Junho leverages his deep strategic insights and leadership to shape the firm’s investment philosophy from an independent perspective. He aims to position the firm as a true value-add partner, enhancing the core strengths of each portfolio company and ensuring sustainable growth.",
      "From his start at a leading global investment bank to his leadership role at McKinsey & Company’s Private Equity (PE) practice, he’s worked at the forefront of the finance industry and built a robust global network that’ll be pivotal in shaping ALDER Investments’ strategic vision and long-term success. ",
      "Junho has a B.A. degree in Economics from U.C. Berkeley.",
    ],
    bioK: [
      "ALDER INVESTMENTS의 창립 멤버인 김준호 파트너는 기업 분석, 실사 및 전략 수립 분야에서 폭넓은 경험을 쌓아온 전문가입니다.",
      "김 파트너의 전문성은 재무 분석을 넘어 기업 가치 제고를 위해 경영진과 협력하며 실질적인 실행력을 발휘해왔습니다.",
      "그는 깊이 있는 전략적 통찰력과 리더십을 바탕으로 독립적인 관점에서 투자 철학을 구체화해 나가고 있습니다. 각 포트폴리오 기업의 핵심 역량을 강화하고 지속 가능한 성장을 실현하는 것을 목표로, ALDER INVESTMENTS를 진정한 가치 창출 파트너사로 자리매김하도록 하고 있습니다.",
      "글로벌 선도 투자은행에서 커리어를 시작해 McKinsey & Company의 Private Equity부문에서 리더십을 발휘해 온 김 파트너는 금융 업계의 최전선에서 활약하며 강력한 글로벌 네트워크를 구축했습니다. 이러한 네트워크와 전문성은 ALDER INVESTMENTS전략적 비전과 장기적인 성공을 이끄는 중요한 기반이 되고 있습니다.",
      "김 파트너는 UC 버클리에서 경제학 학사 학위를 취득하였습니다.",
    ],
    email: "junho.kim@alderpartners.co.kr",
    phone: "tel:+82-10-3247-2657",
    linkedin: "https://www.linkedin.com/in/person",
  },

  // new members addition
  {
    name: "Kihyun Shin",
    nameK: "신기현",
    image: "3rd.jpg",
    role: "Chief Compliance Officer",
    roleK: "준법감시인",
    bio: [
      "Mr. Kihyun Shin, Chief Compliance Officer, has over 20 years of extensive experience in compliance and legal affairs,dating back to 2000 when the compliance officer system was first introduced to financial institutions in Korea. He possesses deep expertise and a wealth of experience in this field",
      <p>
        Prior to joining ALDER INVESTMENTS, Mr. Shin began his career at Kookmin
        Investment Trust, one of the top three asset management firms at the
        time. He further advanced his career at Shinhan Asset Management Co.,
        Ltd. and Franklin Templeton Investment Trust Management Co., Ltd.,
        gaining valuable insights into the operations of both domestic and
        global asset management companies. Drawing on this diverse experience,
        he ensures proper risk management and regulatory compliance to protect
        clients and support the stable and ethical realization of ALDER
        INVESTMENTS' core values
      </p>,
      "Mr. Shin holds a bachelor's degree in Law from Korea University",
    ],
    bioK: [
      <p>
        신기현 준법감시인은 2000 년에 금융기관을 대상으로 우리나라에 처음으로
        준법감시인 제도가 도입된 때부터 20 년 이상 준법감시 및 법무업무를 폭
        넓게 수행하여 해당 분야에 대한 전문적인 지식과 풍부한 경험을 보유하고
        있습니다.
      </p>,
      <p>
        ALDER INVESTMENTS 에 근무하기 전, 신 준법감시인은 당시 업계 3 대
        자산운용사 중 한 곳인 국민투자신탁에서 커리어를 시작한 후 신한자산운용과
        프랭클린템플턴투자신탁운용에서 업무를 수행하면서 국내 자산운용사와 해외
        글로벌 자산운용사의 업무방법을 모두 경험하였고, 이를 바탕으로 적절한
        위험관리와 법규적합성을 확보하여 고객을 보호하고 ALDER INVESTMENTS 가
        추구하는 가치를 올바르고 안정적으로 실현할 수 있도록 할 것입니다.
      </p>,
      <p>신 준법감시인은 고려대학교에서 법학과 학사 학위를 취득하였습니다.</p>,
    ],
    email: "KIHYUN.SHIN@ALDER-PARTNERS.COM",
    phone: "tel:+82-10-7196-1359",
    linkedin: "/",
  },
  {
    name: "Jinhee Kim",
    nameK: "김준호",
    image: "4th.jpg",
    role: "Head of Operations",
    roleK: "운용지원 부장",
    bio: [
      <p>
        Ms. Jinhee Kim, Head of the Operations Support Department, graduated
        from Hanyang University with a degree in Advertising and Public
        Relations. She previously worked in the Investment Operations team at
        DWS Asset Management (formerly Deutsche Asset Management). Ms. Kim
        possesses extensive expertise in fund accounting and operations across a
        wide range of sectors, including equities, fixed income, OTC
        derivatives, and real estate.
      </p>,
    ],
    bioK: [
      <p>
        김진희 운영지원 부장은 한양대학교에서 광고홍보학을 전공하고, DWS
        자산운용(구. 도이치자산운용)에서 Investment Operation 팀에서
        근무하였습니다. 주식, 채권, 장외 파생상품, 부동산에 이르기까지 폭 넓은
        섹터의 펀드 회계와 기타 오퍼레이션 관련 전문 역량을 보유하고 있습니다.
      </p>,
    ],
    email: "JINIKIM@ALDER-PARTNERS.COM",
    phone: "tel:+82-10-2714-5318",
    linkedin: "/",
  },
  {
    name: "Jihyun Seo",
    nameK: "서지현",
    image: "5th.jpg",
    role: "Head of Administration",
    roleK: "경영지원 부장",
    bio: [
      <p>
        Ms. Jihyun Seo, Head of the Business Support Department, oversees all
        aspects of business support. She has served as a general manager at
        companies across various industries, including Mediafront.
        <br /> Ms. Seo possesses extensive experience in business operations and
        management, with specialized expertise in human resources and accounting
      </p>,
    ],
    bioK: [
      <p>
        서지현 경영지원 부장은 경영지원 전반을 담당하고 있으며, 미디어프론트를
        비롯한 다양한 업종의 회사에서 총괄 관리자로 근무하였습니다. 경영 전반의
        실무 및 관리 경험과 인사, 회계의 전문 역량을 보유하고 있습니다.
      </p>,
    ],
    email: "INFO@ALDER-PARTNERS.COM",
    phone: "tel:+82-10-6744-4686",
    linkedin: "/",
  },
  {
    name: "Chanwoo Kang",
    nameK: "강찬우",
    image: "6th.jpg",
    role: "Portfolio Manager",
    roleK: "투자운용부 매니저",
    bio: [
      <p>
        Portfolio Manager in the Investment Management Department with a degree
        in Economics from Northeastern University. Has extensive experience as a
        Fund Manager in the private equity sector. Skilled in conducting
        industry-wide and company-specific research while successfully managing
        various funds, including Equity Funds, Event-Driven Strategies, and
        Multi-Strategy Funds.
      </p>,
    ],
    bioK: [
      <p>
        투자운용부 포트폴리오 매니저로 Northeastern Univ.에서 경제학을 전공하고,
        사모펀드에서 다년간 펀드매니저로 근무하였습니다. 산업 전반 및 개별기업에
        대한 리서치업무와 병행하여 주식형, 이벤트-드리븐, 멀티전략 등 다수의
        펀드들을 성공적으로 운용한 경험이 있습니다.
      </p>,
    ],
    email: "CWKANG@ALDER-PARTNERS.COM",
    phone: "tel:+82-10-2775-5061",
    linkedin: "/",
  },
  {
    name: "Jinsu Lim",
    nameK: "임진수",
    image: "7th.jpg",
    role: "Portfolio Manager",
    roleK: "투자운용부 매니저",
    bio: [
      <p>
        Portfolio Manager in the Investment Management Department with a degree
        in Economics and Finance from Hanyang University. Previously worked as
        an Investment Professional at a private asset management firm. Possesses
        expertise in alternative investment market research and business
        feasibility analysis through financial modeling.
      </p>,
    ],
    bioK: [
      <p>
        투자운용부 포트폴리오 매니저로 한양대학교에서 경제금융학을 전공하고,
        사모 자산운용사에서 운용역으로 근무하였습니다. 대체투자 시장 리서치 및
        재무 모델링을 통한 사업성 검토 역량을 보유하고 있습니다.
      </p>,
    ],
    email: "JSLIM@ALDER-PARTNERS.COM",
    phone: "tel:+82-10-2911-3923",
    linkedin: "/",
  },
];

const ReadBio = ({ isOpen, onClose, selectedName, language }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Find the person with the matching name
  const person = peopleData.find((p) => p.name === selectedName);

  // Animation Variants
  const sidebarVariants = {
    hidden: { x: "100%" }, // Off-screen to the right
    visible: {
      x: 0,
      transition: { type: "Inertia", duration: 0.8 },
    },
    exit: {
      x: "100%",
      transition: { type: "Inertia", duration: 0.8 },
    },
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60"
              onClick={onClose}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            ></motion.div>

            {/* Animated Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sidebarVariants}
              className="fixed right-0 top-0 h-full w-full max-w-2xl bg-[#E7E6E2] z-[80]"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Sidebar"
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Sidebar Content */}
              <div className="overflow-y-auto h-full">
                {language ? (
                  <>
                    <div className="mb-8">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-80 h-auto"
                      />
                    </div>
                    <div className="space-y-4 p-8 ">
                      <h2 className="text-2xl font-medium">{person.name}</h2>
                      <p className="text-gray-600">{person.role}</p>
                      <div className="space-y-4 pt-4">
                        {person.bio.map((paragraph, index) => (
                          <p key={index} className="text-gray-700">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {/* Contact Links */}
                      {/* <div className="flex items-center justify-between gap-x-4">
                        <a
                          href={`mailto:${person.email}`}
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          EMAIL
                        </a >
                        <a
                          href={`tel:${person.phone}`}
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +82-10-8918-180
                        </a>
                        <a
                          href={person.linkedin}
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LINKEDIN
                        </a>
                      </div> */}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-8">
                      <img
                        src={person.image}
                        alt={person.name}
                        className="w-80 h-auto"
                      />
                    </div>
                    <div className="space-y-4 p-8 ">
                      <h2 className="text-2xl font-medium">{person.nameK}</h2>
                      <p className="text-gray-600">{person.role}</p>
                      <div className="space-y-4 pt-4">
                        {person.bioK.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-700 text-justify"
                            style={{ wordBreak: "keep-all" }}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      {/* Contact Links */}
                      <div className="flex items-center justify-between gap-x-4">
                        <a
                          href={`mailto:${person.email}`}
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          이메일
                        </a>
                        {/* <a
                          href={`tel:${person.phone}`}
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          +82-10-8918-180
                        </a> */}
                        <a
                          href={person.linkedin}
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          링크드인
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ReadBio;

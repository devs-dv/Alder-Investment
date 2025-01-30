import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const peopleData = [
  {
    name: "Hee-Dong Konstantin Kim",
    nameK: "희동 콘스탄틴 김",
    image: "1st.jpg",
    role: "CEO",
    roleK: "최고 경영자",
    bio: [
      "After years working alongside family offices and ultra-high-net-worth individuals in Europe, Hee-Dong met Chairman Joon-Yup Lee, an heir to a venerable entrepreneurial dynasty in Korea. Following strategic discussions and review, they identified critical opportunities to address unmet needs in Korea's wealth management sector.  Hence, ALDER INVESTMENTS was formed based on two principles: global standards & access and independent integrity.",
      "Recognising the limited exposure Korean UHNWs have to global markets and investment opportunities, ALDER INVESTMENTS focuses on providing truly independent, client-focused investment advice and management at the highest level —free from conflicts of interest — while prioritising each family's unique needs and goals.",
      "Prior to ALDER INVESTMENTS, Hee-Dong worked at Kingsley Capital Partners LLP (London), Invision Private Equity, the Boston Consulting Group and as Head of M&A of Swiss healthcare group AMEOS.",
      "Hee-Dong has a B.Sc. degree in Business Mathematics and Statistics from the London School of Economics and Political Science (LSE) and an MBA from Harvard Business School.",
    ],
    bioK: [
      "유럽에서 패밀리 오피스와 초고액자산가들과 긴밀히 협력하며 풍부한 경험을 쌓아온 김희동 대표는 한국의 유서 깊은 기업가 가문의 후계자인 이준엽 회장을 만나게 되었습니다. 두 사람은 심도 있는 전략적 검토를 통해 한국 자산관리 시장에서 충족되지 않은 핵심 니즈를 발견하고, 시장의 가능성과 높은 성장 잠재력을 확인했습니다. 이러한 비전을 바탕으로, 글로벌 접근성과 독립적 신뢰라는 두 가지 원칙을 중심에 두고 ALDER INVESTMENTS를 설립하게 되었습니다.",
      "그는 한국의 초고액자산가들이 글로벌 시장에서 투자 기회를 충분히 접근하지 못하고 있다는 점에 주목했습니다. 이러한 경험을 바탕으로, 독립성과 글로벌 접근성을 핵심 원칙으로 삼아 ALDER INVESTMENTS를 설립했으며, 각 패밀리의 고유한 요구사항과 목표를 최우선으로 고려하는 맞춤형 투자 자문과 자산 관리 서비스를 제공하고 있습니다.",
      "김 대표는 ALDER INVESTMENTS를 설립하기 전, Kingsley Capital Partners(런던), Invision Private Equity, Boston Consulting Group, 그리고 스위스 헬스케어 그룹 AMEOS에서 M&A 총괄로 근무했습니다.",
      "그는 런던정경대(LSE)에서 비즈니스 수학 및 통계학 학사 학위를, Harvard Business School에서 MBA를 취득하였습니다.",
    ],
    email: "hk.kim@alderpartners.co.kr",
    phone: "tel:+82-10-8918-180",
    linkedin: "https://www.linkedin.com/in/person",
  },
  {
    name: "Junho Kim",
    nameK: "김준호",
    image: "2nd.jpg",
    position: "Managing Director",
    role: "Investment management",
    roleK: "최고 개발 책임자",
    bio: [
      "Junho Kim is a seasoned professional with extensive experience in equity research, due-diligence, and corporate strategy.",
      "His expertise extends beyond financial analysis, encompassing hands-on execution of value enhancement initiatives in collaboration with senior management teams.",
      "As a founding member of ALDER INVESTMENTS, Junho leverages his deep strategic insights and leadership to shape the firm’s investment philosophy from an independent perspective. He aims to position the firm as a true value-add partner, enhancing the core strengths of each portfolio company and ensuring sustainable growth.",
      "From his start at a leading global investment bank to his leadership role at McKinsey & Company, he has worked at the forefront of the finance industry and built a robust global network.",
      "Junho has a B.A. degree in Economics from U.C. Berkeley.",
    ],
    bioK: [
      "ALDER INVESTMENTS의 창립 멤버인 김준호 파트너는 기업 분석, 실사, 전략 수립 분야에서 폭넓은 경험을 쌓아온 전문가입니다.",
      "김 파트너의 전문성은 재무 분석을 넘어 기업 가치 제고를 위해 경영진과 협력하며 실질적인 실행력을 발휘해왔습니다.",
      "그는 깊이 있는 전략적 통찰력과 리더십을 바탕으로 독립적인 관점에서 투자 철학을 구체화해 나가고 있습니다. 각 포트폴리오 기업의 핵심 역량을 강화하고 지속 가능한 성장을 실현하는 것을 목표로, ALDER INVESTMENTS를 진정한 가치 창출 파트너사로 자리잡게 하고 있습니다.",
      "글로벌 선도 투자은행에서 커리어를 시작해 McKinsey & Company에서 리더십을 발휘해 온 김 파트너는 금융업계는 물론 투자 대상 기업내에서도 핵심적인 역할을 수행해 오며 글로벌 네트워크를 구축하였습니다.",
      "김 파트너는 UC Berkeley에서 경제학 학사 학위를 취득하였습니다.",
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
    position: "Managing Director",
    role: "Compliance",
    roleK: "준법감시인",
    bio: [
      "Kihyun brings over 20 years of distinguished expertise in compliance and legal affairs, dating back to 2000 when the role of dedicated compliance officers was first mandated for financial institutions in Korea. He possesses deep expertise and a wealth of experience in this field.",
      "Before joining ALDER INVESTMENTS, Kihyun served as Chief Compliance and Legal Officer for Korea at Franklin Templeton Investment Trust Management Co., Ltd., where he dedicated over a decade to upholding the highest standards of regulatory and legal oversight. He began his career at Kookmin Investment Trust, one of Korea’s leading asset management firms at the time, and further honed his expertise at Shinhan Asset Management Co., Ltd., acquiring valuable insights into the operations of both domestic and global asset management companies.",
      "Leveraging his diverse and comprehensive background, Kihyun ensures robust risk management and regulatory compliance, safeguarding the interests of our clients and the integrity of our operations.",
      "Kihyun has a bachelor's degree in Law from Korea University.",
    ],
    bioK: [
      "신기현 준법감시인은 법무 및 준법감시 분야에서 20년 이상의 경력을 보유한 전문가로, 해당 분야에서의 깊이 있는 전문성과 풍부한 경험을 보유하고 있습니다. 그는 2000년 한국 금융기관에 준법감시인 제도가 최초로 도입된 시점부터 경험을 쌓으며, 국내 금융산업의 규제 준수 문화 정착과 법률적 기준 강화를 위해 꾸준히 기여해왔습니다.",
      "ALDER INVESTMENTS 에 합류하기 전, 신기현 전무는 프랭클린템플턴 투자신탁운용(Franklin Templeton Investment Trust Management)에서 한국 준법감시 및 법무총괄책임자로 10년 이상 재직하며 최고 수준의 규제 및 법적 감독 기준을 유지하는 데 기여했습니다. 그는 당시 국내 선도 자산운용사 중 하나였던 국민투자신탁에서 경력을 시작했으며, 신한자산운용에서 근무하며 국내외 자산운용사의 운영에 대한 통찰력을 쌓아왔습니다.",
      "다양하고 폭넓은 경험을 바탕으로, 강력한 리스크 관리와 규제 준수를 통해 고객의 이익을 보호하고 당사의 운영의 신뢰성과 안정성을 유지하는 데 기여하고 있습니다.",
      "신 준법감시인은 고려대학교에서 법학 학사 학위를 취득했습니다.",
    ],
    email: "KIHYUN.SHIN@ALDER-PARTNERS.COM",
    phone: "tel:+82-10-7196-1359",
    linkedin: "/",
  },
  {
    name: "Jinhee Kim",
    nameK: "김진희",
    image: "4th.jpg",
    position: "Vice President",
    role: "Fund operations",
    roleK: "운용지원부장",
    bio: [
      <p>
        Jinhee previously worked in the investment operations team at DWS Asset
        Management (formerly Deutsche Asset Management). Jinhee possesses
        extensive expertise in fund accounting and operations across a wide
        range of sectors, including equities, fixed income, OTC derivatives, and
        real estate.
      </p>,
      <p>
        Jinhee has a degree in Advertising and Public Relations from Hanyang
        University.
      </p>,
    ],
    bioK: [
      <p>
        김진희 부장은 DWS 자산운용(구 도이치 자산운용)의 신탁회계팀에서
        근무했으며, 주식, 채권, 장외 파생상품, 부동산 등 다양한 분야에 걸쳐 펀드
        회계 및 운영에 대한 폭넓은 전문성을 보유하고 있습니다.
      </p>,
      <p>김 부장은 한양대학교에서 광고홍보학 학위를 취득했습니다.</p>,
    ],
    email: "JINIKIM@ALDER-PARTNERS.COM",
    phone: "tel:+82-10-2714-5318",
    linkedin: "/",
  },
  {
    name: "Jihyun Seo",
    nameK: "서지현",
    image: "5th.jpg",
    position: "Vice President",
    role: "Operations",
    roleK: "경영지원부장",
    bio: [
      <p>
        Jihyun oversees all aspects of business support. She has served as a
        business manager at many companies across various industries (e.g.
        Mediafront) and possesses comprehensive experience in business
        operations and management as well as a specialization in human resources
        and accounting.
      </p>,
    ],
    bioK: [
      <p>
        서지현 부장은 경영지원 전반을 총괄하고 있습니다. 미디어프론트를 포함한
        다양한 업종의 회사에서 경영관리자로 근무했으며, 경영 운영 및 관리에 대한
        폭넓은 경험과 더불어 인사 및 회계 분야의 전문성을 보유하고 있습니다.
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
    position: "Senior Associate",
    role: "Investment management",
    roleK: "포트폴리오 매니저",
    bio: [
      <p>
        Chanwoo Kang’s expertise is centered around conducting comprehensive
        industry-wide and company-specific research, complemented by his
        successful management of diverse investment vehicles, including public
        equity funds, event-driven strategies, and multi-strategy funds.
      </p>,
      <p>
        He has a bachelor’s degree in Economics from Northeastern University.
      </p>,
    ],
    bioK: [
      <p>
        강찬우 매니저는 산업 전반 및 개별 기업에 대한 심층적인 리서치에 전문성을
        갖추고 있으며, 공모 주식형 펀드, 이벤트 드리븐(Event-Driven) 전략, 멀티
        전략(Multi-Strategy) 펀드 등 다양한 투자 상품을 성공적으로 운용한 경험을
        보유하고 있습니다.
      </p>,
      <p>
        강 매니저는 Northeastern University에서 경제학 학사 학위를 취득했습니다.
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
    position: "Senior Associate",
    role: "Investment management",
    roleK: "포트폴리오 매니저",
    bio: [
      <p>
        Jinsu Lim brings experience from the asset management sector, where he
        excelled in conducting market research and employing advanced financial
        modeling.
      </p>,
      <p>He has a bachelor’s degree in Economics from Hangyang University.</p>,
    ],
    bioK: [
      <p>
        임진수 매니저는 자산운용 업계에서 마켓 리서치와 재무 모델링을 수행하며
        탁월한 역량을 발휘한 경험을 보유하고 있습니다.
      </p>,
      <p>임 매니저는 한양대학교에서 경제학 학사 학위를 취득했습니다.</p>,
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
              className="fixed inset-0 bg-black/20"
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
                    <div className="p-8">
                      <h2 className="text-2xl font-medium">{person.name}</h2>
                      <p className="text-gray-600">{person.position}</p>
                      <p className="text-gray-600">{person.role}</p>
                      <div className="space-y-4 pt-6">
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
                    <div className="p-8">
                      <h2 className="text-2xl font-medium">{person.nameK}</h2>
                      <p className="text-gray-600">{person.position}</p>
                      <p className="text-gray-600">{person.role}</p>

                      <div className="space-y-4 pt-4">
                        {person.bioK.map((paragraph, index) => (
                          <p
                            key={index}
                            className="text-gray-700 text-left"
                            style={{ wordBreak: "keep-all" }}
                          >
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
                          이메일
                        </a>
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
                          링크드인
                        </a>
                      </div> */}
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

import React, { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({
  number,
  title,
  content,
  contactText,
  isOpen,
  onClick,
  index,
  object,
}) => {
  return (
    <div className="border-t border-[#ccccc6]">
      <button
        className="w-full flex items-center justify-between py-6 text-left"
        onClick={onClick}
      >
        <div className="flex items-center gap-8">
          <span className="text-sm text-[#545454]">{number}</span>
          <span className="text-lg text-[#545454]">{title}</span>
        </div>
        <span className="text-2xl text-[#545454] transition-transform duration-700">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`grid transition-all duration-700 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pl-12 pb-6 pr-12">
            <p className="text-[#545454] mb-4 font-light">{content}</p>
            {/* {contactText && (
              <p className="text-[#545454]">
                <a
                  href="#contact"
                  className="no-underline hover:underline text-blue-500 hover:text-blue-600 transition-colors"
                >
                  {object.language ? "Contact Us " : "문의하기 "}
                </a>
                {contactText}
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSection = (object) => {
  const [openItem, setOpenItem] = useState(-1);

  const content = [
    {
      title: "Bespoke Investment Plans",
      titleK: "고객 특성에 맞춘 개별 투자 솔루션",
      content: [
        <p style={{ wordBreak: "keep-all" }}>
          No two strategies are alike. Our investment plans are individually
          configured to suit the objectives and risk tolerance of each client.
          Designed with a comprehensive global asset allocation approach, they
          are grounded in a deep understanding of our clients' unique needs and
          risk tolerances. Through meticulous portfolio analysis, we identify
          opportunities while proactively managing risks to align with each
          client’s financial aspirations.
        </p>,
      ],

      contentK: [
        <p style={{ wordBreak: "keep-all" }}>
          고객 한분 한분에게 다른 전략을 적용합니다. 각 고객의 목표와 리스크
          허용 범위을 철저하게 분석해 최적화된 맞춤형 투자 전략을 설계합니다.
          글로벌 자산 배분에 대한 종합적인 접근 방식을 바탕으로, 고객의 니즈와
          리스크 수용도를 깊이 이해한 뒤에 설계됩니다. 세심한 포트폴리오 분석을
          통해 기회를 식별하고, 리스크를 사전에 관리하여 각 고객의 재무적 목표에
          부합하도록 조정하고 안정적인 성장을 도모합니다.
        </p>,
      ],
      contactText: "to take your investments to the next level.",
      contactTextK:
        "지금 연락 주시면, 귀하의 자산이 한 단계 더 성장할 수 있도록 최적의 방향을 제시하겠습니다.",
      mobileImage:
        "https://kingsley-digital-git-dev-made-thoughts-projects.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F177c0d1400296a8aeede27eeceaf1317ff4fc893-1560x2224.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
      desktopImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2Ff79929f328b188b5a42dbc2e090a1e18caee97c6-1200x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
    },
    {
      title: "Exclusive Opportunities",
      titleK: "독점적 투자 기회 ",
      content: [
        <p style={{ wordBreak: "keep-all" }}>
          Make your finances work harder for you and your family’s future.
          Through our wide network across Korea and around the globe, we provide
          clients with exclusive access to unique investment opportunities in
          special asset classes such as private equity, venture capital, real
          estate and private debt.
        </p>,
      ],
      contentK: [
        <p className="" style={{ wordBreak: "keep-all" }}>
          고객의 자산이 더 큰 가치를 만들어내고, 미래를 탄탄하게 설계할 수
          있도록 합니다. 우리는 한국 및 글로벌 네트워크를 기반으로 한 체계적인
          딜소싱과 철저한 검증을 통해 다양한 스페셜 투자 자산군(비상장 기업,
          부동산, 사모채권 등)에 접근할 수 있는 기회를 제공합니다. 이러한
          독점적투자 기회는 자산의 다변화와 지속적인 성장을 원하는 고객에게
        </p>,
      ],
      contactText: "for unprecedented access to financial growth.",
      contactTextK:
        "지금 연락 주시면, 한 차원 높은 금융 성장을 경험하실 수 있습니다..",
      mobileImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2Ff79929f328b188b5a42dbc2e090a1e18caee97c6-1200x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
      desktopImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F70ba3ca17248d1c78ab36933042dd866ddc56bfc-1066x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
    },
    {
      title: "Advisory",
      titleK: "종합 자문 서비스",
      content: (
        <p className="" style={{ wordBreak: "keep-all" }}>
          We take an informed, generational view when advising family legacy. We
          work closely with each family, ensuring the next generation is primed
          for when the time comes. In order to provide the best possible
          service, we work with the leading experts in every field, from tax
          advisory and law to investment banking and beyond. As full-service
          advisors, we help select the best assistance for each individual
          client and situation while accompanying them on this journey.
        </p>
      ),
      contentK: [
        <p className="" style={{ wordBreak: "keep-all" }}>
          가족의 자산과 유산 관리를 위해 세대에 걸친 장기적인 시각과 전문성을
          바탕으로 신뢰할 수 있는 솔루션을 제공합니다. 고객과 긴밀하게 협력하며,
          다음 세대가 중요한 시기에 준비될 수 있도록 체계적으로 지원합니다.
          세무, 법률, 투자은행 등 각 분야의 최고 전문가들과 협업하여, 고객의
          상황과 필요에 맞춘 종합적이고 전략적인 맞춤형 자문 서비스를
          제공합니다. 단순한 조언에서 멈추지 않고, 이를 통해 고객이 최적의
          결정을 내릴 수 있도록 여정의 모든 순간에 동행합니다.
        </p>,
      ],
      contactText:
        "for guidance that unlocks the best that the industry has to offer.",
      contactTextK:
        "자산관리 서비스 분야에서 최고의 솔루션을 안내 받으시려면  문의해 주시기 바랍니다.",
      mobileImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F70ba3ca17248d1c78ab36933042dd866ddc56bfc-1066x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
      desktopImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F53290bb7cf10f614f8e0158bd129fa5f5909ae5d-1200x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
    },
  ];

  const defaultImage = "def.jpg";

  return (
    <section className="bg-[#e7e6e2] overflow-hidden" id="services">
      <div className="mx-auto px-5 lg:px-10 py-16 ">
        <h2 className="text-left text-3xl uppercase mb-2 lg:mb-5 text-[#545454]">
          Our Services
        </h2>
        {object.language ? (
          <div className=" mb-5 lg:mb-11 lg:w-[54.3%] lg:text-justify w-full">
            <h2 className="text-[#545454] text-sm md:text-lg font-light">
              Our multi-family office works with ultra-high net worth
              individuals, families and corporate entities, offering bespoke
              asset management services based on mitigating risk.
            </h2>
          </div>
        ) : (
          // <div className="mb-20">
          //   <h2 className="text-[#545454] text-base font-medium lg:max-w-[475px]">
          //     ALDER INVESTMENTS 의 멀티패밀리 오피스는 개인, 패밀리 및 법인과
          //     협력하여 리스크를 효과적으로 관리하고, 고객에게 맞춤형 자산 관리
          //     서비스를 제공합니다.
          //   </h2>
          // </div>
          <div className=" mb-5 lg:mb-11 lg:w-[54.3%] lg:text-justify w-full">
            <h2
              className="text-[#545454] text-sm md:text-lg font-light"
              style={{ wordBreak: "keep-all" }}
            >
              초고액 자산가와 그들의 가족 및 사업체를 대상으로 맞춤형 자산 관리
              서비스를 제공하며, 리스크 관리에 중점을 둡니다.
            </h2>
          </div>
        )}
        <div className="flex flex-col lg:flex-row items-start lg:gap-20">
          {/* Desktop Images */}
          <div className="hidden lg:block lg:w-[55%] w-full relative lg:min-h-[1000px] h-[580px] overflow-hidden">
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                openItem === 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-3 h-full">
                <img
                  src="https://kingsley-digital-git-dev-made-thoughts-projects.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F177c0d1400296a8aeede27eeceaf1317ff4fc893-1560x2224.png%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
                  alt="Bespoke Investment Plans"
                  className="w-full md:w-[50%] h-[570px] lg:h-[760px] object-cover"
                />
                <img
                  src="https://kingsley-digital-git-dev-made-thoughts-projects.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F4a717556c25ee3f27035646cd38364dd4669573a-1328x1772.png%3Ffit%3Dmax%26auto%3Dformat&w=384&q=75"
                  alt="Bespoke Investment Plans Additional"
                  className="w-full md:w-[50%] h-[442px] lg:h-[560px] object-cover"
                />
              </div>
            </div>
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                openItem === 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-3 h-full">
                <img
                  src="https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2Fb46001491d101ec4f56350c8ff181ea26b7cd0f7-1272x1700.jpg%3Ffit%3Dmax%26auto%3Dformat&w=384&q=75"
                  alt="Bespoke Investment Plans"
                  className="w-full md:w-[50%] h-[442px] lg:h-[560px] object-cover"
                />
                <img
                  src="https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2Ff79929f328b188b5a42dbc2e090a1e18caee97c6-1200x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
                  alt="Bespoke Investment Plans Additional"
                  className="w-full md:w-[50%] h-[570px] lg:h-[760px] object-cover"
                />
              </div>
            </div>
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                openItem === 2
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-3 h-full">
                <img
                  src="https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F70ba3ca17248d1c78ab36933042dd866ddc56bfc-1066x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
                  alt="Exclusive Deals and Alternative Assets"
                  className="w-full md:w-[50%] h-[570px] lg:h-[760px] object-cover"
                />
                <img
                  src="https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2Fd0a4c0e1567214e376823f7ef48549f79f132b98-1348x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=384&q=75"
                  alt="Exclusive Deals and Alternative Assets Additional"
                  className="w-full md:w-[50%] h-[442px] lg:h-[560px] object-cover"
                />
              </div>
            </div>
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                openItem === 3
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-3 h-full">
                <img
                  src="https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F42672d62cb9483d9fe45f4540dd156d403014dc4-1200x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
                  alt="Portfolio Health Checks"
                  className="w-full md:w-[55%] h-[560px] object-cover"
                />
                <img
                  src="https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F3397fae6cae070b2db9173c67ae5b0f6110b5712-1274x1700.jpg%3Ffit%3Dmax%26auto%3Dformat&w=384&q=75"
                  alt="Portfolio Health Checks Additional"
                  className="w-full md:w-[35%] h-[412px] object-cover"
                />
              </div>
            </div>
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                openItem === -1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              {/* <div className="w-[91.5%]"> */}
              <div>
                <img
                  src={defaultImage}
                  alt="Services Overview"
                  className=" h-[540px] lg:h-[650px] w-full object-cover"
                />
              </div>
            </div>
          </div>
          {/* Mobile Image */}
          <div className="block lg:hidden w-full mb-8 overflow-hidden">
            <div
              className={`transition-all duration-500 ease-in-out ${
                openItem === -1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              <img
                src={defaultImage}
                alt="Services Overview"
                className="w-full h-[400px] lg:h-[920px] object-cover"
              />
            </div>
            {openItem !== -1 && (
              <div
                className={`transition-all duration-500 ease-in-out ${
                  openItem !== -1
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-full"
                }`}
              >
                <img
                  src={content[openItem]?.mobileImage}
                  alt={content[openItem]?.title}
                  className="w-full h-[400px] lg:h-[580px] -mt-96 object-cover"
                />
              </div>
            )}
          </div>
          {object.language ? (
            <div className="w-full lg:text-lg lg:w-[40%]">
              {content.map((item, index) => (
                <AccordionItem
                  key={index}
                  number={`0${index + 1}`}
                  title={item.title}
                  content={item.content}
                  contactText={item.contactText}
                  isOpen={openItem === index}
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                  index={index}
                  object={object}
                />
              ))}
            </div>
          ) : (
            <div className="w-full lg:text-lg lg:w-[40%]">
              {content.map((item, index) => (
                <AccordionItem
                  key={index}
                  number={`0${index + 1}`}
                  title={item.titleK}
                  content={item.contentK}
                  contactText={item.contactTextK}
                  isOpen={openItem === index}
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                  index={index}
                  object={object}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

AccordionItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  contactText: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  object: PropTypes.object.isRequired,
};

export default ServicesSection;

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
        className={`w-full flex items-center justify-between py-6 text-left transition-all duration-300 ease-in-out ${
          isOpen ? "pb-2" : "pb-6"
        }`}
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
            {Array.isArray(content) ? (
              content.map((item, idx) => (
                <React.Fragment key={idx}>
                  {typeof item === "string" ? (
                    <p className="text-[#545454] mb-4 font-light text-base">
                      {item}
                    </p>
                  ) : (
                    React.cloneElement(item, {
                      className: "text-[#545454] mb-4 font-light text-base",
                      style: { ...item.props.style, wordBreak: "keep-all" },
                    })
                  )}
                </React.Fragment>
              ))
            ) : (
              <p className="text-[#545454] mb-4 font-light text-base">
                {content}
              </p>
            )}
            {contactText && (
              <p className="text-[#545454]">
                <a
                  href="#contact"
                  className="no-underline hover:underline text-blue-500 hover:text-blue-600 transition-colors"
                >
                  {object.language ? "Contact Us " : "문의하기 "}
                </a>
                {contactText}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

AccordionItem.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.element,
  ]).isRequired,
  contactText: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  object: PropTypes.object.isRequired,
};

const ServicesSection = (object) => {
  const [openItem, setOpenItem] = useState(-1);

  const content = [
    {
      title: "Bespoke Investment Plans",
      titleK: "고객 특성에 맞춘 개별 투자 솔루션",
      content: [
        <p key="bespoke-1" style={{ wordBreak: "keep-all" }}>
          No two strategies are alike. Our investment plans are individually
          configured to suit the objectives and risk tolerance of each client.
          Designed with a comprehensive global asset allocation approach, they
          are grounded in a deep understanding of our clients' unique needs and
          risk tolerances. Through meticulous portfolio analysis, we identify
          opportunities while proactively managing risks to align with each
          client's financial aspirations.
        </p>,
      ],
      contentK: [
        <p key="bespoke-k-1" style={{ wordBreak: "keep-all" }}>
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
      mobileImage: "Bespoke Investment Plans_left.jpg",
      desktopImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2Ff79929f328b188b5a42dbc2e090a1e18caee97c6-1200x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
    },
    {
      title: "Exclusive Opportunities",
      titleK: "독점적 투자 기회 ",
      content: [
        <p key="exclusive-1" style={{ wordBreak: "keep-all" }}>
          Make your finances work harder for you and your family's future.
          Through our wide network across Korea and around the globe, we provide
          clients with exclusive access to unique investment opportunities in
          special asset classes such as private equity, venture capital, real
          estate and private debt.
        </p>,
      ],
      contentK: [
        <p key="exclusive-k-1" className="" style={{ wordBreak: "keep-all" }}>
          고객의 자산이 더 큰 가치를 만들어내고, 미래를 탄탄하게 설계할 수
          있도록 합니다. 우리는 한국 및 글로벌 네트워크를 기반으로 한 체계적인
          딜소싱과 철저한 검증을 통해 다양한 스페셜 투자 자산군(비상장 기업,
          부동산, 사모채권 등)에 접근할 수 있는 기회를 제공합니다. 이러한
          독점적투자 기회는 자산의 다변화와 지속적인 성장을 원하는 고객에게
          최적의 솔루션이 될 것입니다.
        </p>,
      ],
      contactText: "for unprecedented access to financial growth.",
      contactTextK:
        "지금 연락 주시면, 한 차원 높은 금융 성장을 경험하실 수 있습니다..",
      mobileImage: "Exclusive Opportunities_right.jpg",
      desktopImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F70ba3ca17248d1c78ab36933042dd866ddc56bfc-1066x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
    },
    {
      title: "Advisory",
      titleK: "종합 자문 서비스",
      content: (
        <p key="advisory-1" className="" style={{ wordBreak: "keep-all" }}>
          We take an informed, generational view when advising family legacy. We
          work closely with each family, ensuring the next generation is primed
          for when the time comes. In order to provide the best possible
          service, we work with the leading experts in every field, from tax
          advisory and law to investment banking, concierge services, and
          beyond. As full-service advisors, we help select the best assistance
          for each individual client and situation while accompanying them on
          this journey.
        </p>
      ),
      contentK: [
        <p key="advisory-k-1" className="" style={{ wordBreak: "keep-all" }}>
          가족의 자산과 유산 관리를 위해 세대에 걸친 장기적인 시각과 전문성을
          바탕으로 신뢰할 수 있는 솔루션을 제공합니다. 고객과 긴밀하게 협력하며,
          다음 세대가 중요한 시기에 준비될 수 있도록 체계적으로 지원합니다.
          세무, 법률, 투자은행, 컨시어지 서비스 등 각 분야의 최고 전문가들과
          협업하여, 고객의 상황과 필요에 맞춘 종합적이고 전략적인 맞춤형 자문
          서비스를 제공합니다. 단순한 조언에서 멈추지 않고, 이를 통해 고객이
          최적의 결정을 내릴 수 있도록 여정의 모든 순간에 동행합니다.
        </p>,
      ],
      contactText:
        "for guidance that unlocks the best that the industry has to offer.",
      contactTextK:
        "자산관리 서비스 분야에서 최고의 솔루션을 안내 받으시려면  문의해 주시기 바랍니다.",
      mobileImage: "Advisory_left.jpg",
      desktopImage:
        "https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F53290bb7cf10f614f8e0158bd129fa5f5909ae5d-1200x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75",
    },
  ];

  const defaultImage = "services.jpeg";

  return (
    <section className="bg-[#e7e6e2] overflow-hidden" id="services">
      <div className="mx-auto px-5 lg:px-10 py-16 ">
        <h2 className="text-left text-3xl uppercase mb-6 lg:mb-10 text-[#545454]">
          Our Services
        </h2>
        {object.language ? (
          <div className=" mb-5 lg:mb-11 lg:w-[54.3%] lg:text-justify w-full">
            <h2 className="text-[#545454] md:text-base font-light">
              Our multi-family office works with ultra-high net worth
              individuals, families and corporate entities, offering bespoke
              asset management services based on mitigating risk.
            </h2>
          </div>
        ) : (
          <div className=" mb-5 lg:mb-11 lg:w-[54.3%] lg:text-justify w-full">
            <h2
              className="text-[#545454] md:text-base font-light"
              style={{ wordBreak: "keep-all" }}
            >
              초고액 자산가와 그들의 가족 및 사업체를 대상으로 맞춤형 자산 관리
              서비스를 제공하며, 리스크 관리에 중점을 둡니다.
            </h2>
          </div>
        )}
        <div className="flex flex-col lg:flex-row items-start lg:gap-20 h-fit">
          {/* Desktop Images */}
          <div className="hidden lg:block lg:w-[55%] w-full relative lg:h-[650px] h-[580px] overflow-hidden">
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                openItem === 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-full"
              }`}
            >
              <div className="flex flex-col md:flex-row gap-3 h-full">
                <img
                  src="Bespoke Investment Plans_left.jpg"
                  alt="Bespoke Investment Plans"
                  className="w-full md:w-[50%] h-[570px] lg:h-[650px] object-cover"
                />
                <img
                  src="Bespoke Investment Plans_right.jpg"
                  alt="Bespoke Investment Plans Additional"
                  className="w-full md:w-[50%] h-[442px] lg:h-[500px] object-cover"
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
                  src="Exclusive Opportunities_left.jpg"
                  alt="Bespoke Investment Plans"
                  className="w-full md:w-[50%] h-[442px] lg:h-[500px] object-cover"
                />
                <img
                  src="Exclusive Opportunities_right.jpg"
                  alt="Bespoke Investment Plans Additional"
                  className="w-full md:w-[50%] h-[570px] lg:h-[650px] object-cover"
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
                  src="Advisory_left.jpg"
                  alt="Exclusive Deals and Alternative Assets"
                  className="w-full md:w-[50%] h-[570px] lg:h-[650px] object-cover"
                />
                <img
                  src="Advisory_right.jpg"
                  alt="Exclusive Deals and Alternative Assets Additional"
                  className="w-full md:w-[50%] h-[442px] lg:h-[500px] object-cover"
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
              <img
                src={defaultImage || "/placeholder.svg"}
                alt="Services Overview"
                className=" h-[540px] lg:h-[650px] w-full object-cover"
              />
            </div>
          </div>
          {/* Mobile Image */}
          <div className="block lg:hidden w-full mb-8 overflow-hidden relative h-[400px]">
            {content.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  openItem === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-full"
                }`}
                style={{
                  zIndex: openItem === index ? 1 : 0,
                }}
              >
                <img
                  src={item.mobileImage || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                openItem === -1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-full"
              }`}
              style={{
                zIndex: openItem === -1 ? 1 : 0,
              }}
            >
              <img
                src={defaultImage || "/placeholder.svg"}
                alt="Services Overview"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="w-full lg:text-lg lg:w-[40%]">
            {content.map((item, index) => (
              <AccordionItem
                key={`accordion-item-${index}`}
                number={`0${index + 1}`}
                title={object.language ? item.title : item.titleK}
                content={object.language ? item.content : item.contentK}
                isOpen={openItem === index}
                onClick={() => setOpenItem(openItem === index ? -1 : index)}
                index={index}
                object={object}
              />
            ))}
          </div>
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

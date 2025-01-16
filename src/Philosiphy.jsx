import React from "react";

const Philosiphy = ({ language, setLanguage }) => {
  const contentData = [
    {
      english: {
        title: "A New Perspective on Possibility",
        description:
          "We see the world a little differently. Our experienced team blends expertise from leading global institutions with international experience, allowing us to lead with clear-eyed insights that spark growth, mitigate risk and unlock possibility anywhere.",
      },
      korean: {
        title: "가능성을 여는 새로운 관점",
        description: [
          <p style={{ wordBreak: "keep-all" }}>
            We see the world a little differently. 우리는 세상을 다르게
            바라봅니다. 팀은 세계적인 선도 기관에서 쌓아온 전문성과 경험을
            바탕으로 명확한 통찰력을 제공합니다. 고객 자산의 가치를 높이고
            리스크를 최소화하며, 어디서나 새로운 가능성을 실현합니다.
          </p>,
        ],
      },
    },
    {
      english: {
        title: "Bespoke Solutions, Crafted for You",
        description: [
          <p style={{ wordBreak: "keep-all" }}>
            Our individual investment plans are bespoke on every level. Through
            detailed health checks, we explore the depth and breadth of each
            client's unique portfolio – to see where risks lie and possibility
            awaits. We champion clients to reach informed decisions about the
            opportunities and risks that stand before them, carefully crafting
            customised financial strategies that suit the future they're looking
            to build.
          </p>,
        ],
      },
      korean: {
        title: "고객만을 위한 맞춤형 솔루션",
        description: [
          <p style={{ wordBreak: "keep-all" }}>
            Our individual investment plans are bespoke on every level. 투자
            솔루션은 모든 단계에서 철저히 맞춤형으로 설계됩니다. 정밀한
            포트폴리오 진단을 통해 각 고객의 자산을 깊이 있게 분석하고, 잠재된
            리스크와 새로운 가능성을 찾아냅니다. 고객이 기회와 리스크를 명확하게
            이해하고 원하는 미래를 설계할 수 있도록 맞춤화된 금융 전략을
            정교하게 수립합니다.
          </p>,
        ],
      },
    },
    {
      english: {
        title: "We See the Value in Understanding Risk",
        description:
          "Growth is only sustainable when it's informed. We take a close look at each client's portfolio to identify where risk is hiding beneath the surface. We believe that only when we properly understand risk today, can we build enduring growth for our clients tomorrow.",
      },
      korean: {
        title: "철저한 리스크에 대한 이해, 성장의 첫 걸음",
        description: [
          <p style={{ wordBreak: "keep-all" }}>
            Growth is only sustainable when it's informed. 진정한 성장은
            리스크를 제대로 파악하는 것에서 시작됩니다. 고객의 포트폴리오를
            면밀히 분석해 겉으로 드러나지 않은 위험 요소를 찾아내고 관리합니다.
            오늘의 리스크를 깊이 있게 분석하고 이해해야만 안정적이고 지속 가능한
            미래 성장을 만들어갈 수 있습니다.
          </p>,
        ],
      },
    },
    {
      english: {
        title: "Our Independence is Our Integrity",
        description:
          "We serve our clients and our clients only. As an independent business, untethered from the interests of large financial groups, every decision we make intelligently enhances each client's portfolios. We are deft in our approach to offer the best guidance for each client's wealth management – ensuring transparency, privacy, and security.",
      },
      korean: {
        title: "독립성과 진정성",
        description: [
          <p style={{ wordBreak: "keep-all" }}>
            We serve our clients, and our clients only. 우리는 오직 고객만을
            위해 존재합니다. 외부 이해관계에 얽매이지 않은 독립적인 파트너로서,
            모든 결정은 고객의 포트폴리오 가치를 높이는 데 집중합니다. 투자와
            자산 관리 접근은 세심하고 신중하며, 투명성, 프라이버시, 그리고
            안전성을 철저히 보장합니다.
          </p>,
        ],
      },
    },
  ];

  return (
    <section className="bg-[#e7e6e2] py-16 px-5 md:px-10" id="philosophy">
      <p className="text-[#545454] text-3xl py-10"> OUR PHILOSOPHY</p>
      {language ? (
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          <div className="lg:w-[50%] lg:mr-10 md:text-justify">
            {contentData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-[#545454] space-y-2 md:space-y-4 mb-16">
                  <h2 className="text-lg md:text-xl font-medium">
                    {item.english.title}
                  </h2>
                  <p className="text-sm md:text-base font-light">
                    {item.english.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* Video Section */}
          <div className="2xl:w-[43%] lg:w-[50%] ml-auto lg:-mr-4">
            <div className="lg:sticky lg:top-16 pt-[3rem]">
              <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] 2xl:h-[570px] relative">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="LV3N.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-2">
                <p className="text-[#545454] font-light text-sm md:text-xl lg:text-base opacity-90">
                  An artful, generative digital painting representing our unique
                  and ever-evolving relationship with our clients. The image
                  reflects our metamorphic journey together from our first
                  interaction, depicted as a fluid painting, to the deepened
                  bond and understanding built through years of partnership and
                  trust, which results in a more intricate painting. It is an
                  ever-changing symbol, inspired by our shared values and
                  collaborative growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-10">
          <div className="lg:w-[50%] lg:mr-10 md:text-justify">
            {contentData.map((item, index) => (
              <React.Fragment key={index}>
                <div className="text-[#545454] space-y-2 md:space-y-4 mb-16">
                  <h2 className="text-lg md:text-xl font-medium">
                    {item.korean.title}
                  </h2>
                  <p
                    className="text-sm md:text-lg font-light"
                    style={{ wordBreak: "keep-all" }}
                  >
                    {item.korean.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
          {/* Video Section */}
          <div className="2xl:w-[43%] lg:w-[50%] ml-auto lg:-mr-4">
            <div className="lg:sticky lg:top-16 pt-[3rem]">
              <div className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] 2xl:h-[570px] relative">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="LV3N.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="mt-2">
                <p
                  className="text-[#545454] font-light text-sm md:text-xl lg:text-base opacity-90"
                  style={{ wordBreak: "keep-all" }}
                >
                  고객과 지속적으로 발전하는 관계를 이미지로 표현한 생성형
                  디지털 아트워크입니다. 초기 단계에서 유동적인 이미지로
                  묘사하는 것으로 시작해, 수년간의 파트너십과 신뢰를 통해 형성된
                  깊은 유대와 이해를 반영하여 점차 정교한 형태를 담아냅니다.
                  끊임없이 변화하는 아트워크는 고객과 함께 이룬 성과와 지속적인
                  성장을 상징하는 역동적인 표현물입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Philosiphy;

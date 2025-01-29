import React from "react";

const Content = ({ language }) => (
  <>
    {language ? (
      <div className="absolute bottom-4 md:bottom-8 lg:bottom-0 right-0 left-0 md:left-auto md:right-[5vw] p-4 md:p-6 lg:p-8 text-white z-20 max-w-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] nest-hub:max-w-[70%] widescreen:max-w-[55%]">
        <div className="relative">
          <div className="text-sm md:text-base lg:text-lg">
            <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-2">
              WE ARE ALDER INVESTMENTS
            </h2>
            <p
              className="font-light text-sm md:text-base lg:text-lg"
              style={{ wordBreak: "keep-all" }}
            >
              ALDER INVESTMENTS is an independent, boutique multi-family office
              specializing in customised private wealth management and related
              services for a select clientele of the most distinguished
              ultra-high net worth individuals, their families, and their
              businesses. Our globally informed perspective means we can see
              possibilities anywhere. With an independent approach, we cast our
              vision into the future to help our clients unlock sustainable,
              long-term growth that can be passed down for generations to come.
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div className="absolute bottom-4 md:bottom-8 lg:bottom-16 right-0 left-0 md:left-auto md:right-[5vw] p-4 md:p-6 lg:p-8 text-white z-20 max-w-full md:max-w-[80%] lg:max-w-[60%] xl:max-w-[50%] nest-hub:max-w-[70%] widescreen:max-w-[55%]">
        <div className="relative">
          <div className="text-sm md:text-base lg:text-lg">
            <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-2">
              WE ARE ALDER INVESTMENTS
            </h2>
            <p className="font-light" style={{ wordBreak: "keep-all" }}>
              ALDER INVESTMENTS는 선별된 초고액 자산가와 그들의 가족 및 사업체를
              대상으로, 최상위 수준의 맞춤형 자산 관리 서비스를 제공하는
              독립적인 부티크 멀티패밀리 오피스입니다. 글로벌 전문성을 바탕으로
              전 세계에서 새로운 기회를 발굴하며, 독립적 접근 방식을 통해 고객
              자산이 지속 가능하며 장기적인 성장을 이루고 이를 세대에 걸쳐
              계승할 수 있도록 관리합니다.
            </p>
          </div>
        </div>
      </div>
    )}
  </>
);

export default Content;

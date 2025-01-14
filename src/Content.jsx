import { div } from "framer-motion/client";
import React from "react";

const Content = ({ language }) => (
  <div className="absolute bottom-0 right-0 left-0 md:left-auto md:max-w-3xl lg:max-w-4xl p-2 md:p-12 lg:p-4 text-white z-20">
    <div className="relative">
      <div className="absolute inset-0 rounded-xl" />
      <div className="relative z-10 p-3 md:p-6">
        {language ? (
          <div className="lg:flex flex-col max-md:mb-20 ">
            <h2 className="text-xl flex-1 md:text-3xl lg:text-2xl mb-3 md:mb-5 tracking-wide">
              WE ARE ALDER INVESTMENTS
            </h2>
            <p
              className="text-xs md:text-lg lg:text-lg opacity-90"
              style={{ wordBreak: "keep-all" }}
            >
              {/* <p className="text-sm md:text-xl lg:text-sm opacity-90"> */}
              ALDER INVESTMENTS is an independent, boutique multi-family office
              specializing in customised private wealth management and related
              services at the highest level for to a select clientele of the
              most distinguished ultra-high net worth individuals, their
              families, and their businesses. Our globally informed perspective
              means we can see possibilities anywhere.
              <br /> With an independent approach, we cast our vision into the
              future to help all clients unlock sustainable, long-term growth
              that can be passed down for generations to come.
            </p>
          </div>
        ) : (
          <div className="lg:flex flex-col max-md:mb-20">
            <h2 className="text-2xl flex-1 md:text-3xl lg:text-2xl mb-3 md:mb-5 tracking-wide">
              WE ARE ALDER INVESTMENTS
            </h2>
            <p
              className="text-xs sm:break-words sm:text-justify md:text-xl lg:text-lg opacity-90"
              style={{ wordBreak: "keep-all" }}
            >
              ALDER INVESTMENTS 는 세계적 네트워크와 글로벌 전문성을 바탕으로,
              대형 금융사의 복잡한 이해관계에서 벗어난 독립적인 통찰력을 통해
              최상위 수준의 맞춤형 자산 관리 솔루션을 제공하는 전문 부티크
              패밀리 오피스입니다.
              <br />
              성공적이고 영향력 있는 초고액 자산가와 그들의 가족 및 사업체를
              위한 선별적 고객층을 대상으로, 자산 관리뿐만 아니라 세대를
              이어가는 지속 가능한 성장을 목표로 한 맞춤형 투자 전략을
              제공합니다.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Content;

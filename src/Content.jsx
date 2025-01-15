const Content = ({ language }) => (
  <div className="absolute bottom-0 right-0 left-0 md:left-auto md:max-w-3xl lg:max-w-4xl p-2 md:p-12 lg:p-4 text-white z-20">
    <div className="relative">
      <div className="absolute inset-0 rounded-xl" />
      <div className="text-sm md:text-lg font-light">
        {language ? (
          <div className="lg:flex flex-col max-md:mb-20 ">
            <h2 className="text-sm md:text-lg font-light">
              WE ARE ALDER INVESTMENTS
            </h2>
            <p
              className="text-sm md:text-lg font-light"
              style={{ wordBreak: "keep-all" }}
            >
              {/* <p className="text-sm md:text-xl lg:text-sm opacity-90"> */}
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
        ) : (
          <div className="lg:flex flex-col max-md:mb-20">
            <h2 className="text-sm md:text-lg font-light">
              WE ARE ALDER INVESTMENTS
            </h2>
            <p
              className="text-sm md:text-lg font-light"
              style={{ wordBreak: "keep-all" }}
            >
              ALDER INVESTMENTS는 글로벌 전문성과 외부 이해관계에 얽매이지 않은
              독립적 통찰력을 기반으로 최상위 수준의 맞춤형 자산 관리 솔루션을
              제공하는 전문 부티크 패밀리 오피스입니다.
              <br />
              선별된 성공적이고 영향력 있는 초고액 자산가와 그들의 가족 및
              사업체를 대상으로, 자산 관리뿐만 아니라 세대를 이어가는 지속
              가능한 성장을 목표로 한 맞춤형 투자 전략을 제공합니다.
            </p>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Content;

const Content = ({ language }) => (
  <>
    {language ? (
      <>
        <div className="absolute bottom-20  md:bottom-[16px] right-0 lg:mr-10 text-justify md:right-[-18px] left-0 md:left-auto md:max-w-3xl nest-hub:max-w-2xl lg:max-w-4xl p-2 md:p-12 lg:p-4 text-white z-20">
          <div className="relative">
            <div className="text-base text-[#898981] font-light pl-3 pr-3 md:pl-0">
              <div className="lg:flex flex-col text-base">
                <h2 className="text-lg font-medium">
                  WE ARE ALDER INVESTMENTS
                </h2>
                <p
                  className="md:text-base font-light text-sm"
                  style={{ wordBreak: "keep-all" }}
                >
                  ALDER INVESTMENTS is an independent, boutique multi-family
                  office specializing in customised private wealth management
                  and related services for a select clientele of the most
                  distinguished ultra-high net worth individuals, their
                  families, and their businesses. Our globally informed
                  perspective means we can see possibilities anywhere. With an
                  independent approach, we cast our vision into the future to
                  help our clients unlock sustainable, long-term growth that can
                  be passed down for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    ) : (
      <>
        <div className="absolute bottom-20  md:bottom-[16px] right-0 lg:mr-10 text-justify md:right-[-18px] left-0 md:left-auto md:max-w-3xl lg:max-w-4xl nest-hub:max-w-2xl p-2 md:p-12 lg:p-4 text-[#898981] z-20">
          <div className="relative">
            <div className="text-base font-light pl-3 pr-3 md:pl-0">
              <div className="lg:flex flex-col text-base">
                <h2 className="text-lg font-medium">
                  WE ARE ALDER INVESTMENTS
                </h2>
                <p
                  className="md:text-base font-light text-sm"
                  style={{ wordBreak: "keep-all" }}
                >
                  ALDER INVESTMENTS는 선별된 초고액 자산가와 그들의 가족 및
                  사업체를 대상으로, 최상위 수준의 맞춤형 자산 관리 서비스를
                  제공하는 독립적인 부티크 멀티패밀리 오피스입니다. 글로벌
                  전문성을 바탕으로 전 세계에서 새로운 기회를 발굴하며, 독립적
                  접근 방식을 통해 고객 자산이 지속 가능하며 장기적인 성장을
                  이루고 이를 세대에 걸쳐 계승할 수 있도록 관리합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </>
);

export default Content;

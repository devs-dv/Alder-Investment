import { useState, useEffect } from "react";
import ReadBioButton from "./ReadBioButton";
import ContactUsForm from "./ContactUsForm";
import { msalInstance } from "./msalConfig";

export default function ContactUs({ language, setLanguage }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Initialize MSAL when the component mounts
    const initializeMsal = async () => {
      try {
        await msalInstance.initialize();
        console.log("MSAL initialized successfully");
      } catch (error) {
        console.error("Failed to initialize MSAL:", error);
      }
    };

    initializeMsal();
  }, []);

  return (
    <section className="bg-[#CCCCC6] py-24" id="contact">
      <div className="px-5 lg:px-10">
        {language ? (
          <h1 className="text-[#545454] text-5xl md:text-7xl mb-12">
            What does the future hold?{" "}
          </h1>
        ) : (
          <h1 className="text-[#545454] font-medium text-4xl md:text-7xl mb-12 md:mb-24">
            What does the future hold?{" "}
          </h1>
        )}

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="lg:w-[70%] text-[#545454] text-lg leading-relaxed">
            <p
              className="text-[#545454] text-sm md:text-lg font-light"
              style={{ wordBreak: "keep-all" }}
            >
              {language ? (
                <>
                  Whether you're a private individual, represent a family or a
                  corporate entity, we'd love to hear from you. To ask us a
                  specific question or set up an introductory meeting with an
                  expert, please call us directly or fill in the form below.
                  Together, we can reimagine the future of your wealth.
                </>
              ) : (
                <>
                  ALDER 와의 미팅을 진행하고 싶으시다면, 아래 양식을 작성하거나
                  연락 주시기 바랍니다.
                </>
              )}
            </p>

            <ReadBioButton
              className="my-10"
              onClick={() => setIsSidebarOpen(true)}
              text={language ? "Contact Us" : "문의하기"}
            />
            <div className="flex flex-col gap-3 lg:max-w-2xl">
              <div className="flex justify-between">
                <p className="w-1/3">
                  {language ? "General Enquiries" : "일반 문의"}
                </p>
                <div className="w-2/3">
                  <a
                    href="mailto:contact@alder-invest.com"
                    className="hover:underline text-base md:text-lg"
                  >
                    contact@alder-invest.com
                  </a>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="w-1/3">{language ? "Telephone" : "전화"}</p>
                <div className="w-2/3">
                  <a
                    href="tel:+82-2-6012-2100"
                    className="hover:underline text-base md:text-lg"
                  >
                    +82-2-6012-2100
                  </a>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="w-1/3">{language ? "Address" : "주소"}</p>
                <div className="w-2/3">
                  <p className="text-base md:text-lg">
                    {language
                      ? "East tower 12F, 26, Eulji-ro 5-gil, Jung-gu, Seoul, Republic of Korea"
                      : "서울특별시 중구 을지로 5길 26, 동관 12층, 대한민국"}
                  </p>
                  <a
                    href="https://www.google.com/maps/place/tower+12F,+26+Eulji-ro+5-gil,+Jung+District,+Seoul,+South+Korea/@37.5674207,126.9851783,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca2ef4036d5d7:0xf00a04cff378d993!8m2!3d37.5674207!4d126.9851783?entry=tts&g_ep=EgoyMDI0MDUyOS4wKgBIAVAD"
                    className="text-base md:text-lg underline text-[#545454] hover:text-black"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {language ? "MAP" : "지도"}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-[30%] lg:h-[26rem] lg:overflow-hidden flex items-end justify-center">
            <img
              src="https://kingsley-digital.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F8oxjw9s3%2Fproduction%2F489a833058dc748b1b1a7e96727526b322b665b9-1348x1800.jpg%3Ffit%3Dmax%26auto%3Dformat&w=640&q=75"
              alt="office-window"
              className="lg:w-[80%] h-auto"
            />
          </div>
        </div>
      </div>

      <ContactUsForm
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        language={language}
      />
    </section>
  );
}

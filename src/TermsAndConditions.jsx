import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Logo, DesignLogo } from "./icons";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useActiveSection } from "./utils/useActiveSection";
import NavBar from "./NavBar";

const TermsAndConditions = (object) => {
  //console.log(object)
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const smoothEasing = cubicBezier(0.45, 0, 0.55, 1);

  return (
    <>
      <NavBar language={object.language} setLanguage={object.setLanguage} />

      <div
        className={`min-h-[75vh] md:flex px-5 lg:px-10 gap-5 md:py-20 bg-[#E7E6E2] text-[#545454]`}
      >
        <div className="flex-1">
          <p className="text-3xl uppercase">Terms And Conditions</p>
        </div>
        {object.language ? (
          <div className="flex-[2]">
            <p className="my-2">
              Alder Partners respect your privacy regarding any information that
              may be collected from you across www.dfy.co.kr.
            </p>
            <p>
              When we ask for personal information, it is because we need it to
              provide a service to you. It is collected by lawful means, and
              with your knowledge and consent. We also let you know why we're
              collecting it and how it will be used. We only retain collected
              information for as long as necessary to provide you with relevant
              services.
            </p>
            <p>
              We do not share any personally identifying information publicly or
              with third-parties, except when we are required to do so by law.
              We protect the data we store within commercially acceptable means
              to prevent loss and theft, as well as unauthorized access,
              copying, disclosure, use or modification. Our website may be
              linked to external sites that we do not own and are not operated
              by us. Please be aware that we have no control over the content
              and practices of these external sites, and thus unable to accept
              responsibility or liability for their respective privacy policies.
            </p>
            <p>
              You are free to refuse our request for your personal information,
              with the understanding that we may be unable to provide you with
              some of your desired services. Your continued use of our website
              will be regarded as acceptance of our practices around privacy and
              personal information. If you have any questions about how we
              handle user data and personal information, feel free to contact
              us.
            </p>
          </div>
        ) : (
          <div className="flex-[2]">
            <p className="my-2">
              Alder Parners 는 웹사이트(www.dfy.co.kr) 이용자로부터 수집한
              개인정보를 보호합니다.
            </p>
            <p>
              우리는 서비스를 제공하기 위하여 웹사이트 이용자에게 개인정보를
              요청합니다. 우리는 개인정보 보호법을 준수하고 이용자의 동의를 얻어
              개인정보를 수집합니다. 개인정보를 수집할 때 우리는 이유와 목적을
              이용자에게 알리며 서비스를 제공하는 데 필요한 기간 동안 이용자의
              개인정보를 보관합니다.
            </p>
            <p>
              우리는 법에 따라 요구되는 경우를 제외하고 개인식별정보를
              공개하거나 제3자와 공유하지 않습니다. 우리는 이용자 데이터의 무단
              액세스, 복사, 공개, 사용 및 수정, 손실 및 도난을 방지하기 위해
              상업적으로 허용된 수단으로써 저장된 데이터를 보호합니다. 이
              웹사이트는 우리 소유가 아닌 외부 사이트에 링크될 수 있습니다.
              우리는 이러한 외부 사이트의 내용 및 관행을 제어할 수 없음으로 각
              개인정보 보호정책에 대한 책임을 지지 않습니다.
            </p>
            <p>
              이용자는 개인정보에 대한 당사의 요청을 거절할 수 있으며 거절 시
              일부 서비스를 이용할 수 없습니다. 이 웹사이트를 계속 사용하는 것은
              이용자가 우리의 개인정보 및 개인정보에 대한 관행을 수락하는 것으로
              간주합니다. 우리의 개인정보 처리방침에 대해 더 궁금한 점이 있는
              경우 언제든지 문의해 주십시오.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default TermsAndConditions;

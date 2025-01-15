import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Logo, DesignLogo } from "./icons";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useActiveSection } from "./utils/useActiveSection";
import NavBar from "./NavBar";

const PrivacyPolicy = (object) => {
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
        className={`min-h-[80vh] md:flex px-5 lg:px-10 gap-5 md:py-20 bg-[#E7E6E2] text-[#545454]`}
      >
        <div className="flex-1 max-md:py-2">
          <p className="text-3xl uppercase">Privacy Policy</p>
        </div>
        {object.language ? (
          <div className="flex-[3]">
            <p>
              <strong>
                This website collects some Personal Data from its Users.
              </strong>
            </p>
            <p>
              This document can be printed for reference by using the print
              command in the settings of any browser.
            </p>
            <p>
              <strong>Owner and Data Controller</strong>
            </p>
            <p>
              Alder Partners
              <br />
              East 12F, 26, Eulji-ro 5-gil, Jung-gu, Seoul, 04539, Republic of
              Korea
            </p>
            <p>
              <strong>Types of Data collected</strong>
            </p>
            <p>
              Among the types of Personal Data that this Application collects,
              by itself or through third parties, there are: Usage Data;
              Trackers; answers to questions; clicks; keypress events; motion
              sensor events; mouse movements; scroll position; touch events;
              email address.
            </p>
            <p>
              Complete details on each type of Personal Data collected are
              provided in the dedicated sections of this privacy policy or by
              specific explanation texts displayed prior to the Data collection.
              Personal Data may be freely provided by the User, or, in case of
              Usage Data, collected automatically when using this Application.
              Unless specified otherwise, all Data requested by this Application
              is mandatory and failure to provide this Data may make it
              impossible for this Application to provide its services. In cases
              where this Application specifically states that some Data is not
              mandatory, Users are free not to communicate this Data without
              consequences to the availability or the functioning of the
              Service. Users who are uncertain about which Personal Data is
              mandatory are welcome to contact the Owner. Any use of Cookies –
              or of other tracking tools — by this Application or by the owners
              of third-party services used by this Application serves the
              purpose of providing the Service required by the User, in addition
              to any other purposes described in the present document and in the
              Cookie Policy.
            </p>
            <p>
              Users are responsible for any third-party Personal Data obtained,
              published or shared through this Application.
            </p>
            <p>
              <strong>Mode and place of processing the Data</strong>
            </p>
            <p>
              <em>Methods of processing</em>
            </p>
            <p>
              The Owner takes appropriate security measures to prevent
              unauthorised access, disclosure, modification, or unauthorised
              destruction of the Data. The Data processing is carried out using
              computers and/or IT-enabled tools, following organisational
              procedures and modes strictly related to the purposes indicated.
              In addition to the Owner, in some cases, the Data may be
              accessible to certain types of persons in charge, involved with
              the operation of this Application (administration, sales,
              marketing, legal, system administration) or external parties (such
              as third-party technical service providers, mail carriers, hosting
              providers, IT companies, communications agencies) appointed, if
              necessary, as Data Processors by the Owner. The updated list of
              these parties may be requested from the Owner at any time.
            </p>
            <p>
              <em>Place</em>
            </p>
            <p>
              The Data is processed at the Owner's operating offices and in any
              other places where the parties involved in the processing are
              located. Depending on the User's location, data transfers may
              involve transferring the User's Data to a country other than their
              own. To find out more about the place of processing of such
              transferred Data, Users can check the section containing details
              about the processing of Personal Data.
            </p>
            <p>
              <em>Retention time</em>
            </p>
            <p>
              Unless specified otherwise in this document, Personal Data shall
              be processed and stored for as long as required by the purpose
              they have been collected for and may be retained for longer due to
              applicable legal obligation or based on the Users’ consent.
            </p>
            <p>
              <strong>The purposes of processing</strong>
            </p>
            <p>
              The Data concerning the User is collected to allow the Owner to
              provide its Service, comply with its legal obligations, respond to
              enforcement requests, protect its rights and interests (or those
              of its Users or third parties), detect any malicious or fraudulent
              activity, as well as the following: Spam and bots protection,
              Analytics, Displaying content from external platforms and
              Contacting the User.
            </p>
            <p>
              <strong>Cookie Policy</strong>
            </p>
            <p>
              This Application uses Trackers. To learn more, Users may consult
              the{" "}
              <a href="https://www.iubenda.com/private/privacy-policy/2796243/cookie-policy?preview=true&amp;ifr=true&amp;height=800&amp;newmarkup=no&amp;an=no">
                Cookie Policy
              </a>
              .
            </p>
            <p>
              <strong>Further Information for Users</strong>
            </p>
            <p>
              <em>Legal basis of processing</em>
            </p>
            <p>
              The Owner may process Personal Data relating to Users if one of
              the following applies:
            </p>
            <ul className="list-disc">
              <li>
                Users have given their consent for one or more specific
                purposes.
              </li>
              <li>
                Provision of Data is necessary for the performance of an
                agreement with the User and/or for any pre-contractual
                obligations thereof;
              </li>
              <li>
                Processing is necessary for compliance with a legal obligation
                to which the Owner is subject;
              </li>
              <li>
                Processing is related to a task that is carried out in the
                public interest or in the exercise of official authority vested
                in the Owner;
              </li>
              <li>
                Processing is necessary for the purposes of the legitimate
                interests pursued by the Owner or by a third party.
              </li>
            </ul>
            <p>
              In any case, the Owner will gladly help to clarify the specific
              legal basis that applies to the processing, and in particular
              whether the provision of Personal Data is a statutory or
              contractual requirement, or a requirement necessary to enter into
              a contract.
            </p>
            <p>
              <em>Further information about retention time</em>
            </p>
            <p>
              Unless specified otherwise in this document, Personal Data shall
              be processed and stored for as long as required by the purpose
              they have been collected for and may be retained for longer due to
              applicable legal obligation or based on the Users’ consent.
            </p>
            <p>Therefore:</p>
            <ul>
              <li>
                Personal Data collected for purposes related to the performance
                of a contract between the Owner and the User shall be retained
                until such contract has been fully performed.
              </li>
              <li>
                Personal Data collected for the purposes of the Owner’s
                legitimate interests shall be retained as long as needed to
                fulfill such purposes. Users may find specific information
                regarding the legitimate interests pursued by the Owner within
                the relevant sections of this document or by contacting the
                Owner.
              </li>
            </ul>
            <p>
              The Owner may be allowed to retain Personal Data for a longer
              period whenever the User has given consent to such processing, as
              long as such consent is not withdrawn. Furthermore, the Owner may
              be obliged to retain Personal Data for a longer period whenever
              required to fulfil a legal obligation or upon order of an
              authority. Once the retention period expires, Personal Data shall
              be deleted. Therefore, the right of access, the right to erasure,
              the right to rectification and the right to data portability
              cannot be enforced after expiration of the retention period.
            </p>
            <p>
              <em>
                The rights of Users based on the General Data Protection
                Regulation (GDPR)
              </em>
            </p>
            <p>
              Users may exercise certain rights regarding their Data processed
              by the Owner.
            </p>
            <p>
              In particular, Users have the right to do the following, to the
              extent permitted by law:
            </p>
            <ul className="list-disc">
              <li>
                <strong>Withdraw their consent at any time.</strong> Users have
                the right to withdraw consent where they have previously given
                their consent to the processing of their Personal Data.
              </li>
              <li>
                <strong>Object to processing of their Data.</strong> Users have
                the right to object to the processing of their Data if the
                processing is carried out on a legal basis other than consent.
              </li>
              <li>
                <strong>Access their Data.</strong> Users have the right to
                learn if Data is being processed by the Owner, obtain disclosure
                regarding certain aspects of the processing and obtain a copy of
                the Data undergoing processing.
              </li>
              <li>
                <strong>Verify and seek rectification.</strong> Users have the
                right to verify the accuracy of their Data and ask for it to be
                updated or corrected.
              </li>
              <li>
                <strong>Restrict the processing of their Data.</strong> Users
                have the right to restrict the processing of their Data. In this
                case, the Owner will not process their Data for any purpose
                other than storing it.
              </li>
              <li>
                <strong>
                  Have their Personal Data deleted or otherwise removed.
                </strong>{" "}
                Users have the right to obtain the erasure of their Data from
                the Owner.
              </li>
              <li>
                <strong>
                  Receive their Data and have it transferred to another
                  controller.
                </strong>{" "}
                Users have the right to receive their Data in a structured,
                commonly used and machine-readable format and, if technically
                feasible, to have it transmitted to another controller without
                any hindrance.
              </li>
              <li>
                <strong>Lodge a complaint.</strong> Users have the right to
                bring a claim before their competent data protection authority.
              </li>
            </ul>
            <p>
              Users are also entitled to learn about the legal basis for Data
              transfers abroad including to any international organization
              governed by public international law or set up by two or more
              countries, such as the UN, and about the security measures taken
              by the Owner to safeguard their Data.
            </p>
            <p>
              <em>Details about the right to object to processing</em>
            </p>
            <p>
              <strong>
                Where Personal Data is processed for a public interest, in the
                exercise of an official authority vested in the Owner or for the
                purposes of the legitimate interests pursued by the Owner, Users
                may object to such processing by providing a ground related to
                their particular situation to justify the objection.
              </strong>
            </p>
            <p>
              <strong>
                Users must know that, however, should their Personal Data be
                processed for direct marketing purposes, they can object to that
                processing at any time, free of charge and without providing any
                justification. Where the User objects to processing for direct
                marketing purposes, the Personal Data will no longer be
                processed for such purposes. To learn whether the Owner is
                processing Personal Data for direct marketing purposes, Users
                may refer to the relevant sections of this document.
              </strong>
            </p>
            <p>
              <em>How to exercise these rights</em>
            </p>
            <p>
              Any requests to exercise User rights can be directed to the Owner
              through the contact details provided in this document. Such
              requests are free of charge and will be answered by the Owner as
              early as possible and always within one month, providing Users
              with the information required by law. Any rectification or erasure
              of Personal Data or restriction of processing will be communicated
              by the Owner to each recipient, if any, to whom the Personal Data
              has been disclosed unless this proves impossible or involves
              disproportionate effort. At the Users’ request, the Owner will
              inform them about those recipients.
            </p>
            <p>
              <strong>
                Additional information about Data collection and processing
              </strong>
            </p>
            <p>
              <em>Legal action</em>
            </p>
            <p>
              The User's Personal Data may be used for legal purposes by the
              Owner in Court or in the stages leading to possible legal action
              arising from improper use of this Application or the related
              Services. The User declares to be aware that the Owner may be
              required to reveal personal data upon request of public
              authorities.
            </p>
            <p>
              <em>Additional information about User's Personal Data</em>
            </p>
            <p>
              In addition to the information contained in this privacy policy,
              this Application may provide the User with additional and
              contextual information concerning particular Services or the
              collection and processing of Personal Data upon request.
            </p>
            <p>
              <em>System logs and maintenance</em>
            </p>
            <p>
              For operation and maintenance purposes, this Application and any
              third-party services may collect files that record interaction
              with this Application (System logs) or use other Personal Data
              (such as the IP Address) for this purpose.
            </p>
            <p>
              <em>Information not contained in this policy</em>
            </p>
            <p>
              More details concerning the collection or processing of Personal
              Data may be requested from the Owner at any time. Please see the
              contact information at the beginning of this document.
            </p>
            <p>
              <em>Changes to this privacy policy</em>
            </p>
            <p>
              The Owner reserves the right to make changes to this privacy
              policy at any time by notifying its Users on this page and
              possibly within this Application and/or - as far as technically
              and legally feasible - sending a notice to Users via any contact
              information available to the Owner. It is strongly recommended to
              check this page often, referring to the date of the last
              modification listed at the bottom. Should the changes affect
              processing activities performed on the basis of the User’s
              consent, the Owner shall collect new consent from the User, where
              required.
            </p>
          </div>
        ) : (
          <div className="flex-[3] ">
            <p>
              Alder Parners 는 웹사이트(www.dfy.co.kr) 이용자로부터 수집한
              개인정보를 보호합니다.
              <br />
              우리는 서비스를 제공하기 위하여 웹사이트 이용자에게 개인정보를
              요청합니다. 우리는 개인정보 보호법을 준수하고 이용자의 동의를 얻어
              개인정보를 수집합니다. 개인정보를 수집할 때 우리는 이유와 목적을
              이용자에게 알리며 서비스를 제공하는 데 필요한 기간 동안 이용자의
              개인정보를 보관합니다.
              <br />
              우리는 법에 따라 요구되는 경우를 제외하고 개인식별정보를
              공개하거나 제3자와 공유하지 않습니다. 우리는 이용자 데이터의 무단
              액세스, 복사, 공개, 사용 및 수정, 손실 및 도난을 방지하기 위해
              상업적으로 허용된 수단으로써 저장된 데이터를 보호합니다. 이
              웹사이트는 우리 소유가 아닌 외부 사이트에 링크될 수 있습니다.
              우리는 이러한 외부 사이트의 내용 및 관행을 제어할 수 없음으로 각
              개인정보 보호정책에 대한 책임을 지지 않습니다.
              <br />
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

export default PrivacyPolicy;

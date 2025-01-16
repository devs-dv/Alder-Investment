import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Logo, DesignLogo } from "./icons";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useActiveSection } from "./utils/useActiveSection";
import NavBar from "./NavBar";
import { TestNavbar } from "./NewsSec/TestNavbar";

const PrivacyPolicy = (object) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [triggerLoading, setTriggerLoading] = useState(false);

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
      {/* <NavBar language={object.language} setLanguage={object.setLanguage} /> */}
      <TestNavbar
        language={object.language}
        setLanguage={object.setLanguage}
        setTriggerLoading={setTriggerLoading}
      />

      <div
        className={`min-h-[80vh] md:flex px-5 lg:px-10 gap-5 md:py-20 bg-[#E7E6E2] text-[#545454]`}
      >
        <div className="flex-1 max-md:py-2">
          <p className="text-3xl uppercase">
            {object.language ? "Privacy Policy" : "개인정보 처리지침"}{" "}
          </p>
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
              Alder Investement
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
          <div className="flex-[3]">
            <ul className="list-decimal">
              <li className="font-bold">총칙</li>
              ㈜알더인베스트먼트는 개인정보보호법 제30조 및 정보통신망이용촉진
              및 정보보호에 관한 법률 제27조의2에 따라 정보주체(고객)의 개인정보
              보호 및 권익을 보호하고 개인정보와 관련한 정보주체의 고충을
              원활하게 처리할 수 있도록 하기 위하여 다음과 같은 처리방침을 두고
              있습니다.
              <br /> 본 방침은 관련 법령의 제 • 개정이나 정부 또는 회사의 운용
              방침에 따라 변경될 수 있으며 변경 시에는 회사의 인터넷 홈페이지를
              통하여 변경 내용이 공개됩니다.
              <li className="font-bold">
                개인정보 수집항목, 방법 및 처리 목적
              </li>
              ※ ㈜알더인베스트먼트는 직판 또는 개인고객을 상대로 영업을 수행하지
              않는 사유로 어떠한 경우에도 개인고객의 정보를 수집/저장하지
              않습니다. 다만, 인터넷 홈페이지 서비스를 이용하거나 회사가
              홈페이지 이용자 정보를 처리하는 과정에서 이용자의 접속 빈도와
              시간, 서비스 이용 기록 등과 같은 '쿠키' 정보가 자동으로
              수집됩니다. <br />※ 고객참여 이벤트, 경품행사, 고객의 시장정보
              정기구독 요청 등을 웹 사이트로 진행하는 경우에는 해당 이벤트
              목적으로 고객의 기본 정보 (이름, 주소, 이메일, 전화번호 등) 가
              수집/저장될 수 있습니다. 이러한 경우에도 ㈜알더인베스트먼트의
              웹사이트는 명함 수준의 기본 정보 이외 다른 개인 정보를 일체
              수집하지 않습니다.
              <br />
              {/* 1))회사가 수집하는 기타 개인정보의 항목과 처리 목적은 다음과
              같습니다. */}
              <ul className="list-decimal ml-6">
                <li>
                  회사가 수집하는 기타 개인정보의 항목과 처리 목적은 다음과
                  같습니다.
                </li>
                <ul className="list-[lower-alpha] ml-6">
                  {" "}
                  {/* Adjusted list style and added margin for subpoints */}
                  <li>
                    집합투자기구 판매, 신탁회사와의 위탁판매계약 체결 및 이행을
                    위하여 불가피하게 필요한 경우
                    <ul className="list-[lower-roman] ml-6">
                      <li>
                        <strong>수집항목:</strong> 판매, 신탁회사의 담당
                        임직원에 관한 정보 (이름, 회사명, 부서, 직급, 회사 주소,
                        전화번호, 이메일)
                      </li>
                      <li>
                        <strong>처리 목적:</strong> 집합투자기구 위탁판매, 신탁
                        업무와 관련한 업무수행
                      </li>
                    </ul>
                  </li>
                  <li>
                    투자자문계약 체결 및 이행을 위하여 불가피하게 필요한 경우
                    <ul className="list-[lower-roman] ml-6">
                      <li>
                        <strong>수집항목:</strong> 고객의 담당 임직원에 관한
                        정보 (이름, 회사명, 부서, 직급, 회사 주소, 전화번호,
                        이메일)
                      </li>
                      <li>
                        <strong>처리 목적:</strong> 계약서 체결 및 투자자문업무
                        수행
                      </li>
                    </ul>
                  </li>
                  <li>
                    기타 집합투자기구의 운용 업무 수행을 위하여 불가피하게
                    필요한 경우
                    <ul className="list-[lower-roman] ml-6">
                      <li>
                        <strong>수집항목:</strong> 투자매매/중개회사 또는
                        법인투자자의 담당 임직원에 관한 정보 (이름, 회사명,
                        부서, 직급, 회사 주소, 전화번호, 이메일)
                      </li>
                      <li>
                        <strong>처리 목적:</strong> 주문 업무 수행 및
                        법인투자자의 요청사항에 대한 정보제공
                      </li>
                    </ul>
                  </li>
                  <li>
                    인터넷 홈페이지 서비스를 이용하거나 회사가 홈페이지 이용자
                    정보를 처리하는 과정에서 이용자의 접속 빈도와 시간, 서비스
                    이용 기록 등과 같은 ‘쿠키’ 정보가 자동으로 수집되는 경우
                    <ul className="list-[lower-roman] ml-6">
                      <li>
                        <strong>수집항목:</strong> 쿠키('cookie')는 웹사이트를
                        운영하는데 이용되는 서버가 이용자의 브라우저에게 보내는
                        아주 작은 텍스트 파일로 이용자가 웹사이트에 접속하는데
                        사용하고 있는 컴퓨터나 모바일 기기에 저장됩니다.
                        ㈜알더인베스트먼트에서는 쿠키를 통해 웹사이트 이용자에게
                        더 개선된 온라인 경험을 제공하고자 하며, 특히 웹사이트
                        이용자의 접속 빈도, 방문 시간, 방문 횟수, 선호하는 기술
                        환경 등을 분석하고 웹사이트가 잘 운영되고 있는지
                        분석합니다.
                      </li>
                      <li>
                        <strong>
                          개인정보 자동 수집 장치의 설치/운영 및 거부에 관한
                          사항:
                        </strong>
                        쿠키의 설치/운영 및 거부: 이용자는 쿠키 설치에 대한
                        선택권을 가지고 있습니다. 따라서 이용자는 웹브라우저에서
                        다음과 같이 옵션을 설정함으로써 모든 쿠키를 허용하거나,
                        쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의
                        저장을 거부할 수도 있습니다. 다만, 쿠키의 저장을 거부할
                        때, 일부 맞춤형 서비스를 받는데 제한을 받을 수 있습니다.
                        <ul className="list-disc ml-6">
                          <li>
                            {`Internet Explorer의 경우: 웹 브라우저 상단의 도구 메뉴 > 인터넷 옵션 > 개인정보 > 설정`}
                          </li>
                          <li>{`Chrome의 경우: 웹 브라우저 우측의 설정 메뉴 > 화면 하단의 고급 설정 표시 > 개인정보의 콘텐츠 설정 버튼 > 쿠키`}</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <li>
                  회사는 상기의 정보를 다음과 같은 방법으로 수집합니다. -
                  집합투자기구의 판매회사, 투자매매/중개회사, 법인투자자의
                  임직원 정보가 계약서 등 관련 서류에 명시되어 있거나 해당
                  고객이 별도 제공
                </li>
                <li>
                  회사는 고객이 제공한 개인정보를 상기의 목적 범위 내에서
                  이용하여야 합니다. 다만, 다음의 경우에는 예외적으로 목적
                  범위를 초과하여 이용할 수 있습니다.
                  <ul className="list-decimal ml-6">
                    <li>고객으로부터 별도의 동의를 받는 경우</li>
                    <li>법률에 특별한 규정이 있는 경우</li>
                    <li>
                      고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에
                      있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서
                      명백히 고객 또는 제3자의 급박한 생명, 신체, 재산의 이익을
                      위하여 필요하다고 인정되는 경우
                    </li>
                    <li>
                      통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서
                      특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우
                    </li>
                  </ul>
                </li>
              </ul>
              <li className="font-bold">개인정보의 처리 및 보유기간</li>
              회사는 개인정보의 수집 및 이용목적이 달성된 후에는 해당 정보를
              지체없이 파기합니다.
              <li className="font-bold">
                개인정보의 파기절차 및 방법에 관한 사항
              </li>
              회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 다음과
              같은 방법으로 해당정보를 지체없이 파기합니다.
              <ul className="list-decimal ml-6">
                <li>
                  종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각을 통하여 폐기
                </li>
                <li>
                  <li>
                    종이에 출력된 개인정보: 분쇄기로 분쇄하거나 소각을 통하여
                    폐기
                  </li>
                </li>
              </ul>
              <li className="font-bold">개인정보의 제3자 제공에 관한 사항</li>
              <ul className="list-decimal ml-6">
                <li>
                  회사는 고객이 제공한 개인정보를 고객의 동의 없이 개인정보취급
                  수탁자 이외의 제3자에게 제공할 수 없습니다. 다만, 다음의
                  경우에는 수집 목적 범위 내에서 제공할 수 있습니다.
                </li>
                <ul className="list-decimal ml-6">
                  <li>
                    법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
                    불가피한 경우
                  </li>
                  <li>
                    고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에
                    있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서
                    명백히 고객 또는 제3자의 급박한 생명, 신체, 재산의 이익을
                    위하여 필요하다고 인정되는 경우
                  </li>
                </ul>
                <li>
                  회사가 상기 1)에 따라 고객의 동의를 받을 때에는 다음의 사항을
                  고객에게 알려야 하며, 다음의 사항을 변경하는 경우에도 이를
                  알리고 동의를 받아야 합니다.
                </li>
                <ul className="list-decimal ml-6">
                  <li>개인정보를 제공받는 자</li>
                  <li>개인정보를 제공받는 자의 개인정보 이용 목적</li>
                  <li>제공하는 개인정보의 항목</li>
                  <li>개인정보를 제공받는 자의 개인정보 보유 및 이용 기간</li>
                  <li>
                    동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른
                    불이익이 있는 경우에는 그 불이익의 내용
                  </li>
                </ul>
                <li>
                  동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른 불이익이
                  있는 경우에는 그 불이익의 내용
                </li>
                <ul className="list-decimal ml-6">
                  <li>고객으로부터 별도의 동의를 받는 경우</li>
                  <li>법률에 특별한 규정이 있는 경우</li>
                  <li>
                    고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에
                    있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서
                    명백히 고객 또는 제3자의 급박한 생명, 신체, 재산의 이익을
                    위하여 필요하다고 인정되는 경우
                  </li>
                  <li>
                    통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서 특정
                    개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우
                  </li>
                </ul>
              </ul>
              <li className="font-bold">개인정보처리의 위탁에 관한 사항</li>
              회사는 원칙적으로 정보주체의 동의없이 해당 개인정보의 처리를
              타인에게 위탁하지 않습니다.
              <li className="font-bold">
                고객의 권리, 의무 및 그 행사 방법에 관한 사항
              </li>
              <ul className="list-decimal ml-6">
                <li>개인정보 열람 요구권</li>
                <ul className="list-decimal ml-6">
                  <li>
                    고객은 회사가 처리하는 자신의 개인정보에 대한 열람을 요구할
                    수 있습니다.
                  </li>
                  <li>
                    회사는 고객으로부터 열람을 요구 받았을 때 10일 이내에 고객이
                    해당 개인정보를 열람할 수 있도록 하여야 합니다. 열람할 수
                    없는 정당한 사유가 있을 때에는 고객에게 그 사유를 알리고
                    열람을 연기할 수 있으며, 그 사유가 소멸하면 지체없이
                    열람하게 하여야 합니다.
                  </li>
                  <li>
                    회사는 다음의 사유에 해당하는 경우에는 고객에게 그 사유를
                    알리고 열람을 제한하거나 거절할 수 있습니다.
                    <ul className="list-disc ml-6">
                      <li>법률에 따라 열람이 금지되거나 제한되는 경우</li>
                      <li>
                        다른 사람의 생명, 신체를 해할 우려가 있거나 다른 사람의
                        재산과 그 밖의 이익을 부당하게 침해할 우려가 있는 경우
                      </li>
                    </ul>
                  </li>
                </ul>
                <li>개인정보 정정, 삭제 요구권</li>
                <ul className="list-decimal ml-6">
                  <li>
                    고객은 회사에게 자기 개인정보의 정정 또는 삭제를 요구할 수
                    있습니다. 다만, 다른 법령에서 그 개인정보가 수집 대상으로
                    명시되어 있는 경우에는 삭제를 요구할 수 없습니다.{" "}
                  </li>
                  <li>
                    회사는 고객이 자기 개인정보의 정정 또는 삭제를 요구할 경우
                    다른 법령에 특별한 절차가 규정되어 있는 경우를 제외하고는
                    지체없이 정정, 삭제 등 필요한 조치를 취한 후 그 결과를
                    고객에게 알려야 합니다.{" "}
                  </li>
                  <li>
                    회사가 개인정보를 삭제할 때에는 복구 또는 재생되지 않도록
                    조치하여야 합니다.{" "}
                  </li>
                  <li>
                    회사는 필요한 경우 해당 고객에게 정정, 삭제 요구사항의
                    확인에 필요한 증거자료를 제출하게 할 수 있습니다.
                  </li>
                </ul>
                <li>개인정보 처리 정지 요구권</li>
                <ul className="list-decimal ml-6">
                  <li>
                    고객은 회사에게 자기 개인정보 처리의 정지를 요구할 수
                    있습니다.
                  </li>
                  <li>
                    회사는 고객이 자기 개인정보 처리의 정지를 요구할 경우
                    지체없이 개인정보 처리의 전부를 정지하거나 일부를 정지하여야
                    합니다. 다만, 다음의 경우에는 고객의 처리 정지 요구를 거절할
                    수 있습니다.
                  </li>
                  <ul>
                    <li>
                      가. 법률에 특별한 규정이 있거나 법령상 의무를 준수하기
                      위하여 불가피한 경우
                    </li>
                    <li>
                      나. 다른 사람의 생명, 신체를 해할 우려가 있거나 다른
                      사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가 있는
                      경우
                    </li>
                    <li>
                      다. 개인정보를 처리하지 아니하면 고객과 약정한 서비스를
                      제공하지 못하는 등 계약의 이행이 곤란한 경우로서 고객이 그
                      계약의 해지의사를 명확하게 밝히지 아니한 경우
                    </li>
                  </ul>
                  <li>
                    회사는 고객의 요구에 따라 처리가 정지된 개인정보에 대하여
                    지체없이 해당 개인정보의 파기 등 필요한 조치를 하여야
                    합니다.
                  </li>
                </ul>
              </ul>
              <li className="font-bold">
                개인정보의 안전성 확보 조치에 관한 사항
              </li>
              회사는 개인정보가 분실, 도난, 유출, 변조, 훼손되지 아니하도록
              안정성 확보에 필요한 관리적, 기술적, 물리적 조치를 하고 있습니다.
              <ul className="list-decimal ml-6">
                <li>
                  개인정보의 안전한 처리를 위한 내부 관리 계획의 수립, 시행
                </li>
                <li>개인정보에 대한 접근 통제 및 접근 권한의 제한 조치</li>
                <li>
                  개인정보를 안전하게 저장, 전송할 수 있는 암호화 기술의 적용
                  또는 이에 상응하는 조치
                </li>
                <li>
                  개인정보 침해사고 발생에 대응하기 위한 접속 기록의 보관 및
                  위조, 변조 방지를 위한 조치
                </li>
                <li>개인정보에 대한 보안프로그램의 설치 및 갱신</li>
                <li>
                  개인정보의 안전한 보관을 위한 보관시설의 마련 또는 잠금 장치의
                  설치 등 물리적 조치
                </li>
              </ul>
              <li className="font-bold">개인정보에 관한 민원서비스</li>
              회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
              처리하기 위하여 다음과 같이 개인정보 취급자 및 책임자를 지정,
              운영하고 있습니다.
              <ul>
                <li>① 성 명 : 신기현 준법감시인</li>
                <li>② 소 속 : ㈜알더인베스트먼트</li>
                <li>③ 연락처: (대표) 02-6012-2100, (직통) 070-4272-8226</li>
                <br />
                고객께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호
                관련 민원을 상기의 개인정보보호 관리자 또는 책임자에게 신고하실
                수 있습니다. 회사는 지적된 문제를 즉시 확인하고 수정이 필요한
                경우 최대한 빠른 시간 내에 조치하도록 하겠습니다. 회사는 항상
                고객의 개인정보를 보호하기 위하여 최선의 노력을 다하겠습니다.
                <br />
                정보주체는 아래의 기관에 대해 개인정보 침해에 대한 피해구제,
                상담 등을 문의하실 수 있습니다. 아래의 기관은 회사와는 별개의
                기관으로서, 회사의 자체적인 개인정보 불만처리, 피해구제 결과에
                만족하지 못하시거나 보다 자세한 도움이 필요하시면 문의하여
                주시기 바랍니다.
                <ul className="list-decimal ml-6">
                  <li>개인정보 침해신고센터 (한국인터넷진흥원 운영)</li>
                  <ul className="list-disc">
                    <li>소관업무: 개인정보 침해 사실 신고, 상담 신청</li>
                    <li>홈페이지: privacy.kisa.or.kr</li>
                    <li>전화: (국번없이) 118</li>
                    <li>
                      주소: (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원
                      개인정보침해신고센터
                    </li>
                  </ul>
                  <li>개인정보 분쟁조정위원회 (한국인터넷진흥원 운영)</li>
                  <ul className="list-disc">
                    <li>
                      소관업무: 개인정보 분쟁조정 신청, 집단분쟁조정
                      (민사적해결)
                    </li>
                    <li>홈페이지: privacy.kisa.or.kr</li>
                    <li>전화: (국번없이) 118</li>
                    <li>
                      주소: (138-950) 서울시 송파구 중대로 135 한국인터넷진흥원
                      개인정보침해신고센터
                    </li>
                  </ul>
                  <li>
                    대검찰청 사이버범죄수사단: 02-3480-3581 (www.spo.go.kr)
                  </li>
                  <li>
                    경찰청 사이버안전국: 국번없이 112(긴급상담, 무료) 또는
                    국번없이 182(민원상담, 유료)
                    (http://cyberbureau.police.go.kr)
                  </li>
                </ul>
              </ul>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default PrivacyPolicy;

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
            <div className="">
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  Personal Information Processing Guidelines
                </h1>
              </div>

              <div className="flex-[3]">
                <ul className="list-decimal ml-6 space-y-6">
                  <li>
                    <span className="font-bold">General Provisions</span>
                    <p className="mt-2">
                      Alder Investments Ltd. has established the following
                      processing policy to protect the personal information and
                      rights of data subjects (customers) and to smoothly handle
                      any issues related to personal information, in accordance
                      with Article 30 of the Personal Information Protection Act
                      and Article 27-2 of the Act on Promotion of Information
                      and Communications Network Utilization and Information
                      Protection.
                    </p>
                    <p className="mt-2">
                      This policy may be changed according to the enactment or
                      revision of relevant statutes or the operational policies
                      of the government or the company, and any changes will be
                      disclosed at the company's website.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold">
                      Items of Personal Information Collection, Methods, and
                      Processing Purposes
                    </span>
                    <p className="mt-2">
                      ※ Alder Investments Ltd. does not collect/store any
                      personal customer information under any circumstances
                      because it does not conduct direct sales or business with
                      individual customers. However, 'cookie' information such
                      as user access frequency and time, and service usage
                      records are automatically collected during the process of
                      using internet homepage services or when the company
                      processes website user information.
                    </p>
                    <p className="mt-2">
                      ※ Customer participation events, prize events, or requests
                      for regular subscriptions to market information are
                      conducted through the website, basic customer information
                      (name, address, email, phone number, etc.) may be
                      collected/stored for the purpose of the event. Even in
                      such cases, Alder Investments Ltd.'s website does not
                      collect any personal information beyond basic business
                      card-level information.
                    </p>

                    <ul className="list-decimal ml-6 mt-4 space-y-4">
                      <li>
                        The items of other personal information collected and
                        the purposes of processing are as follows:
                        <ul className="mt-2 space-y-4">
                          <div className="flex gap-2">
                            <span>①</span>
                            <li>
                              When it is inevitably necessary for the sale of
                              collective investment schemes, the conclusion and
                              execution of entrustment sales contracts with
                              trust companies
                              <ul className="list-[lower-alpha] ml-6 mt-2">
                                <li>
                                  <strong>Collection Items:</strong> Information
                                  about the responsible officers and employees
                                  of the sales and trust companies (name,
                                  company name, department, position, company
                                  address, phone number, email)
                                </li>
                                <li>
                                  <strong>Purpose of Processing:</strong>{" "}
                                  Execution of tasks related to the entrustment
                                  sale of collective investment schemes and
                                  trust business
                                </li>
                              </ul>
                            </li>
                          </div>

                          <div className="flex gap-2">
                            <span>②</span>
                            <li>
                              When it is inevitably necessary for the conclusion
                              and execution of an investment advisory contract
                              <ul className="list-[lower-alpha] ml-6 mt-2">
                                <li>
                                  <strong>Collection Items:</strong> Information
                                  about the customer's responsible employees
                                  (name, company name, department, position,
                                  company address, phone number, email)
                                </li>
                                <li>
                                  <strong>Purpose of Processing:</strong>{" "}
                                  Execution of contracts and operation of
                                  investment advisory
                                </li>
                              </ul>
                            </li>
                          </div>

                          <div className="flex gap-2">
                            <span>③</span>
                            <li>
                              When it is inevitably necessary for the execution
                              of other operational tasks of the collective
                              investment scheme
                              <ul className="list-[lower-alpha] ml-6 mt-2">
                                <li>
                                  <strong>Collection Items:</strong> Information
                                  about the responsible employees of the
                                  investment trading/brokerage company or
                                  corporate investor (name, company name,
                                  department, position, company address, phone
                                  number, email)
                                </li>
                                <li>
                                  <strong>Purpose of Processing:</strong>{" "}
                                  Performing order tasks and providing
                                  information on requests from corporate
                                  investors
                                </li>
                              </ul>
                            </li>
                          </div>

                          <div className="flex gap-2">
                            <span>④</span>
                            <li>
                              When 'cookie' information such as the user's
                              access frequency and time, and service usage
                              records is automatically collected while using
                              internet homepage services or processing website
                              user information
                              <ul className="list-[lower-alpha] ml-6 mt-2">
                                <li>
                                  <strong>Collection Items:</strong> A cookie is
                                  a very small text file sent by the server used
                                  to operate the website to the user's browser,
                                  and it is stored on the computer or mobile
                                  device used by the user to access the website.
                                  Alder Investments Ltd. will provide enhanced
                                  online experience to website users through
                                  cookies, particularly by analyzing users'
                                  access frequency, visit times, visit counts,
                                  and preferred technical environments, as well
                                  as assessing operation of the website.
                                </li>
                                <li>
                                  <strong>
                                    Matters concerning the
                                    installation/operation and rejection of
                                    devices automatically collecting personal
                                    information
                                  </strong>
                                  <p>
                                    Installation/operation and rejection of
                                    cookies:
                                  </p>
                                  <p className="mt-2">
                                    Users can choose about installing cookies.
                                    Accordingly, users can set options in their
                                    web browser to allow all cookies, verify
                                    when a cookie is stored, or refuse the
                                    storage of all cookies. However, refusing
                                    the storage of cookies may limit the ability
                                    to receive some personalized services.
                                  </p>
                                  <ul className="list-disc ml-6 mt-2">
                                    <li>
                                      {`For Internet Explorer: Tools menu at the top
                                    of the web browser > Internet Options >
                                    Privacy > Settings`}
                                    </li>
                                    <li>
                                      {`For Chrome: Settings menu on the right side
                                    of the web browser > Show advanced settings
                                    > Content settings under Privacy > Cookies`}
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </div>
                        </ul>
                      </li>
                      <li>
                        The company collects the above information by using the
                        following methods. - Information of employees of the
                        selling company, investmenttrading/brokerage company and
                        corporate investors of the collective investment scheme
                        is specified in contracts or related documents, or
                        provided separately by the customer
                      </li>
                      <li>
                        The company must use the personal information provided
                        by the customer within the scope of the above purposes.
                        However, in the following cases, it may be used beyond
                        the scope of the purposes as an exception.
                        <ul className="mt-2">
                          <div className="flex gap-2">
                            <span>①</span>
                            <li>
                              When separate consent is obtained from the
                              customer
                            </li>
                          </div>

                          <div className="flex gap-2">
                            <span>②</span>
                            <li>
                              When there are special provisions in the law
                            </li>
                          </div>

                          <div className="flex gap-2">
                            <span>③</span>
                            <li>
                              In cases where the customer or his/her legal
                              representative is unable to express intent or
                              cannot be contacted due to an unknown address, and
                              it is deemed necessary for the urgent benefit of
                              the customer or a third party's life, body, or
                              property
                            </li>
                          </div>

                          <div className="flex gap-2">
                            <span>④</span>
                            <li>
                              When it is necessary for purposes such as
                              statistical compilation and academic research, and
                              personal information is provided in a form that
                              does not allow the identification of a specific
                              individual.
                            </li>
                          </div>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-bold">
                      Processing and Retention Period of Personal Information
                    </span>
                    <p className="mt-2">
                      The company shall destroy the relevant information without
                      delay once it achieves the purpose of collecting and using
                      personal information.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold">
                      Matters Concerning the Procedures and Methods for the
                      Destruction of Personal Information
                    </span>
                    <p className="mt-2">
                      The company, in principle, destroys the personal
                      information without delay after the purpose of collection
                      and use has been achieved, using the following methods.
                    </p>
                    <ul className="list-decimal ml-6 mt-2">
                      <li>
                        Personal information printed on paper: Shred with a
                        shredder or incinerated for disposal
                      </li>
                      <li>
                        Personal information stored in electronic file format:
                        Permanently delete by using technical methods that make
                        the records unrecoverable
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-bold">
                      Matters Concerning the Provision of Personal Information
                      to Third Parties
                    </span>
                    <ul className="list-decimal ml-6">
                      <li>
                        The company cannot provide the personal information
                        provided by the customer to a third party other than the
                        personal information handling trustee without the
                        customer's consent. However, in the following cases, it
                        may be provided within the scope of the collection
                        purpose.
                      </li>
                      <ul className="">
                        <div className="flex gap-2">
                          <span>①</span>
                          <li>
                            In cases where there are special provisions in the
                            law or it is unavoidable to comply with statutory
                            obligations
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>②</span>
                          <li>
                            In cases where the customer or his/her legal
                            representative is unable to express intent or cannot
                            obtain prior consent due to unknown address, etc.,
                            and it is deemed necessary for the urgent benefit of
                            the customer's or third party's life, body, or
                            property
                          </li>
                        </div>
                      </ul>
                      <li>
                        When the company obtains the customer's consent
                        according to the above 1), it must inform the customer
                        of the following matters, and if there are any changes
                        to these matters, it must also inform and obtain
                        consent.
                      </li>
                      <ul className="">
                        <div className="flex gap-2">
                          <span>①</span>
                          <li>Recipient of Personal Information</li>
                        </div>

                        <div className="flex gap-2">
                          <span>②</span>
                          <li>
                            Purpose of Use of Personal Information by the
                            Recipient
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>③</span>
                          <li>Items of Personal Information Provided</li>
                        </div>

                        <div className="flex gap-2">
                          <span>④</span>
                          <li>
                            Retention and Use Period of Personal Information by
                            the Recipient
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>⑤</span>
                          <li>
                            The fact that there is a right to refuse consent
                            and, if there are any disadvantages due to refusal,
                            the details of such disadvantages
                          </li>
                        </div>
                      </ul>
                      <li>
                        The company may provide information to a third party
                        beyond the purposes outlined in 1) and 2) in the
                        following cases.
                      </li>
                      <ul className="">
                        <div className="flex gap-2">
                          <span>①</span>
                          <li>
                            When separate consent is obtained from the customer
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>②</span>
                          <li>When there are special provisions in the law</li>
                        </div>

                        <div className="flex gap-2">
                          <span>③</span>
                          <li>
                            In cases where the customer or his/her legal
                            representative is unable to express intent or cannot
                            be contacted due to an unknown address, and it is
                            deemed necessary for the urgent benefit of the
                            customer or a third party's life, body, or property.
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>④</span>
                          <li>
                            When it is necessary for purposes such as
                            statistical compilation and academic research, and
                            personal information is provided in a form that does
                            not allow the identification of a specific
                            individual.
                          </li>
                        </div>
                      </ul>
                    </ul>
                  </li>

                  <li>
                    <span className="font-bold">
                      Matters Concerning the Delegation of Personal Information
                      Processing
                    </span>
                    <p className="mt-2">
                      The company, in principle, does not entrust the processing
                      of personal information to others without the consent of
                      the data subject.
                    </p>
                  </li>

                  <li>
                    <span className="font-bold">
                      Matters concerning the rights, obligations of the
                      customers, and methods of exercise
                    </span>

                    <ul className="list-decimal ml-6 mt-2">
                      <li>
                        Right to request inspection of personal information
                      </li>
                      <ul>
                        <div className="flex gap-2">
                          <span>①</span>
                          <li>
                            The customer may request to inspect his/her personal
                            information processed by the company.
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>②</span>
                          <li>
                            When the company receives a request for inspection
                            from the customer, it must allow the customer to
                            inspect the relevant personal information within 10
                            days. If there is a legitimate reason for not being
                            able to inspect, the company must inform the
                            customer of the reason and may postpone the
                            inspection. Once the reason ceases to exist, the
                            inspection must be conducted without delay.
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>③</span>
                          <li>
                            The company may restrict or refuse inspection by
                            informing the customer of the reason if it falls
                            under any of the following circumstances.
                          </li>
                        </div>
                        <ul className="list-[lower-alpha] ml-14 mt-2">
                          <li>
                            When inspection is prohibited or restricted by law
                          </li>
                          <li>
                            When there is a concern that it may harm another
                            person's life or body, or unjustly infringe on
                            another person's property and other interests
                          </li>
                        </ul>
                      </ul>
                      <li>
                        Right to request correction or deletion of personal
                        information
                      </li>
                      <ul className="mt-2">
                        <div className="flex gap-2">
                          <span>①</span>
                          <li>
                            The customer may request the company to correct or
                            delete his/her personal information. However, if the
                            personal information is required as a subject of
                            collection by another statute, deletion cannot be
                            requested.
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>②</span>
                          <li>
                            The company must promptly take necessary actions
                            such as correction or deletion and inform the
                            customer of the results when the customer requests
                            correction or deletion of his/her personal
                            information, unless a special procedure is
                            prescribed by other statutes
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>③</span>
                          <li>
                            When the company deletes personal information, it
                            must ensure that it cannot be recovered or
                            reproduced.
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>④</span>
                          <li>
                            The company may require the customer to submit
                            evidence necessary to verify the correction or
                            deletion request, if necessary.
                          </li>
                        </div>
                      </ul>
                      <li>
                        Right to Request Suspension of Personal Information
                        Processing
                      </li>
                      <ul className="mt-2">
                        <div className="flex gap-2">
                          <span>①</span>
                          <li>
                            The customer may request the company to suspend the
                            processing of his/her personal information.
                          </li>
                        </div>

                        <div className="flex gap-2">
                          <span>②</span>
                          <li>
                            If the customer requests the suspension of his/her
                            personal information processing, the company must
                            immediately suspend all or part of the processing of
                            personal information. However, in the following
                            cases, the company may refuse the customer's request
                            for suspension of processing.
                          </li>
                        </div>
                        <ul className="ml-6">
                          <li>
                            a. When there are special provisions in the law or
                            it is unavoidable to comply with statutory
                            obligations
                          </li>
                          <li>
                            b. When there is a concern that it may harm another
                            person's life or body, or unjustly infringe on
                            another person's property and other interests
                          </li>
                          <li>
                            c. When it is difficult to fulfill the contract,
                            such as providing services agreed with the customer,
                            if personal information is not processed, and the
                            customer has not clearly expressed his/her intention
                            to terminate the contract
                          </li>
                        </ul>
                        <div className="flex gap-2">
                          <span>③</span>
                          <li>
                            The company must promptly take necessary actions,
                            such as the destruction of the relevant personal
                            information, for personal information whose
                            processing has been suspended at the customer's
                            request.
                          </li>
                        </div>
                      </ul>
                    </ul>
                  </li>
                  <li>
                    <span className="font-bold">
                      Matters concerning measures to ensure the security of
                      personal information
                    </span>
                    <p className="mt-2">
                      The company is taking administrative, technical, and
                      physical measures necessary to ensure security so that
                      personal information is not lost, stolen, leaked, altered,
                      or damaged.
                    </p>
                    <ul className="list-decimal ml-6">
                      <li>
                        Establishment and implementation of an internal
                        management plan for the secure processing of personal
                        information
                      </li>
                      <li>
                        Measures to control access to personal information and
                        restrict access rights
                      </li>
                      <li>
                        Application of encryption technology or equivalent
                        measures to securely store and transmit personal
                        information
                      </li>
                      <li>
                        Measures to preserve access logs and prevent forgery and
                        alteration in response to personal information breach
                        incidents
                      </li>
                      <li>
                        Installation and updating of security programs for
                        personal information
                      </li>
                      <li>
                        Physical measures such as preparing storage facilities
                        or installing locking devices for the safe storage of
                        personal information
                      </li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-bold">
                      Complaint services regarding personal information
                    </span>
                    <p className="mt-2">
                      The company designates and operates personal information
                      handlers and managers as follows to protect customers'
                      personal information and handle complaints related to
                      personal information.
                    </p>
                    <div className="mt-4 space-y-2">
                      <p>① Name: Ki-Hyun Shin, Compliance Officer</p>
                      <p>② Affiliation: ALDER INVESTMENTS LTD.</p>
                      <p>
                        ③ Contact: (Main) 02-6012-2100, (Direct) 070-4272-8226
                      </p>
                    </div>
                    <p className="mt-2">
                      Customers can report any personal information
                      protection-related complaints arising from the use of the
                      company's services to the above-mentioned personal
                      information protection manager or person in charge. The
                      company will promptly verify the identified issues and
                      take actions as quickly as possible if corrections are
                      necessary. The company will always make every effort to
                      protect the customer's personal information
                    </p>
                    <p className="mt-2">
                      Remedy for Infringement of Rights Regarding Personal
                      Information
                    </p>
                    <p>
                      The data subject can inquire about remedies and
                      consultations for personal information infringement with
                      the following organizations. The following organizations
                      are separate from the company. If you are not satisfied
                      with the company's own handling of personal information
                      complaints or remedy results, or if you need more detailed
                      assistance, please contact them.
                    </p>
                    <div className="mt-6">
                      <ul className="list-decimal ml-6 space-y-4">
                        <li>
                          <strong>
                            Personal Information Infringement Report Center
                            (Operated by Korea Internet & Security Agency)
                          </strong>
                          <ul className="list-disc ml-6">
                            <li>
                              Jurisdiction: Reporting personal information
                              infringement, applying for consultation
                            </li>
                            <li>Website: privacy.kisa.or.kr</li>
                            <li>Phone: (without area code) 118</li>
                            <li>
                              Address: (138-950) 135 Jungdae-ro, Songpa
                              District, Seoul City, Korea Internet & Security
                              Agency, Personal Information Infringement Report
                              Center
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>
                            Personal Information Dispute Mediation Committee
                            (Operated by Korea Internet & Security Agency)
                          </strong>
                          <ul className="list-disc ml-6 mt-2">
                            <li>
                              Jurisdiction: Application for personal information
                              dispute mediation, collective dispute mediation
                              (civil resolution)
                            </li>
                            <li>Website: privacy.kisa.or.kr</li>
                            <li>Phone: (without area code) 118</li>
                            <li>
                              Address: (138-950) 135 Jungdae-ro, Songpa
                              District, Seoul City, Korea Internet & Security
                              Agency, Personal Information Infringement Report
                              Center
                            </li>
                          </ul>
                        </li>

                        <li>
                          Supreme Prosecutors' Office Cyber Crime Investigation
                          Unit: 02-3480-3581 (www.spo.go.kr)
                        </li>
                        <li>
                          National Police Agency Cyber Safety Bureau: Without
                          area code 112 (emergency consultation, free) or
                          without area code 182 (civil consultation, paid)
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <a
                  href="http://cyberbureau.police.go.kr"
                  className="underline ml-12"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (http://cyberbureau.police.go.kr)
                </a>
              </div>
            </div>
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
                <ul className="">
                  {" "}
                  {/* Adjusted list style and added margin for subpoints */}
                  <div className="flex gap-2">
                    <span>①</span>
                    <li>
                      집합투자기구 판매, 신탁회사와의 위탁판매계약 체결 및
                      이행을 위하여 불가피하게 필요한 경우
                      <ul className="list-[lower-roman] ml-6">
                        <li>
                          <strong>수집항목:</strong> 판매, 신탁회사의 담당
                          임직원에 관한 정보 (이름, 회사명, 부서, 직급, 회사
                          주소, 전화번호, 이메일)
                        </li>
                        <li>
                          <strong>처리 목적:</strong> 집합투자기구 위탁판매,
                          신탁 업무와 관련한 업무수행
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="flex gap-2">
                    <span>②</span>
                    <li>
                      투자자문계약 체결 및 이행을 위하여 불가피하게 필요한 경우
                      <ul className="list-[lower-roman] ml-6">
                        <li>
                          <strong>수집항목:</strong> 고객의 담당 임직원에 관한
                          정보 (이름, 회사명, 부서, 직급, 회사 주소, 전화번호,
                          이메일)
                        </li>
                        <li>
                          <strong>처리 목적:</strong> 계약서 체결 및
                          투자자문업무 수행
                        </li>
                      </ul>
                    </li>
                  </div>
                  <div className="flex gap-2">
                    <span>③</span>
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
                  </div>
                  <div className="flex gap-2">
                    <span>④</span>
                    <li>
                      인터넷 홈페이지 서비스를 이용하거나 회사가 홈페이지 이용자
                      정보를 처리하는 과정에서 이용자의 접속 빈도와 시간, 서비스
                      이용 기록 등과 같은 ‘쿠키’ 정보가 자동으로 수집되는 경우
                      <ul className="list-[lower-roman] ml-6">
                        <li>
                          <strong>수집항목:</strong> 쿠키('cookie')는 웹사이트를
                          운영하는데 이용되는 서버가 이용자의 브라우저에게
                          보내는 아주 작은 텍스트 파일로 이용자가 웹사이트에
                          접속하는데 사용하고 있는 컴퓨터나 모바일 기기에
                          저장됩니다. ㈜알더인베스트먼트에서는 쿠키를 통해
                          웹사이트 이용자에게 더 개선된 온라인 경험을 제공하고자
                          하며, 특히 웹사이트 이용자의 접속 빈도, 방문 시간,
                          방문 횟수, 선호하는 기술 환경 등을 분석하고 웹사이트가
                          잘 운영되고 있는지 분석합니다.
                        </li>
                        <li>
                          <strong>
                            개인정보 자동 수집 장치의 설치/운영 및 거부에 관한
                            사항:
                          </strong>
                          쿠키의 설치/운영 및 거부: 이용자는 쿠키 설치에 대한
                          선택권을 가지고 있습니다. 따라서 이용자는
                          웹브라우저에서 다음과 같이 옵션을 설정함으로써 모든
                          쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
                          거치거나, 아니면 모든 쿠키의 저장을 거부할 수도
                          있습니다. 다만, 쿠키의 저장을 거부할 때, 일부 맞춤형
                          서비스를 받는데 제한을 받을 수 있습니다.
                          <ul className="list-disc ml-6">
                            <li>
                              {`Internet Explorer의 경우: 웹 브라우저 상단의 도구 메뉴 > 인터넷 옵션 > 개인정보 > 설정`}
                            </li>
                            <li>{`Chrome의 경우: 웹 브라우저 우측의 설정 메뉴 > 화면 하단의 고급 설정 표시 > 개인정보의 콘텐츠 설정 버튼 > 쿠키`}</li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </div>
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
                  <ul className="">
                    <div className="flex gap-2">
                      <span>①</span>
                      <li>고객으로부터 별도의 동의를 받는 경우</li>
                    </div>

                    <div className="flex gap-2">
                      <span>②</span>
                      <li>법률에 특별한 규정이 있는 경우</li>
                    </div>

                    <div className="flex gap-2">
                      <span>③</span>
                      <li>
                        고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에
                        있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서
                        명백히 고객 또는 제3자의 급박한 생명, 신체, 재산의
                        이익을 위하여 필요하다고 인정되는 경우
                      </li>
                    </div>

                    <div className="flex gap-2">
                      <span>④</span>
                      <li>
                        통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서
                        특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는
                        경우
                      </li>
                    </div>
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
                <ul className="">
                  <div className="flex gap-2">
                    <span>①</span>
                    <li>
                      법률에 특별한 규정이 있거나 법령상 의무를 준수하기 위하여
                      불가피한 경우
                    </li>
                  </div>
                  <div className="flex gap-2">
                    <span>②</span>
                    <li>
                      고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에
                      있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서
                      명백히 고객 또는 제3자의 급박한 생명, 신체, 재산의 이익을
                      위하여 필요하다고 인정되는 경우
                    </li>
                  </div>
                </ul>
                <li>
                  회사가 상기 1)에 따라 고객의 동의를 받을 때에는 다음의 사항을
                  고객에게 알려야 하며, 다음의 사항을 변경하는 경우에도 이를
                  알리고 동의를 받아야 합니다.
                </li>
                <ul className="">
                  <div className="flex gap-2">
                    <span>①</span>

                    <li>개인정보를 제공받는 자</li>
                  </div>

                  <div className="flex gap-2">
                    <span>②</span>
                    <li>개인정보를 제공받는 자의 개인정보 이용 목적</li>
                  </div>

                  <div className="flex gap-2">
                    <span>③</span>
                    <li>제공하는 개인정보의 항목</li>
                  </div>

                  <div className="flex gap-2">
                    <span>④</span>
                    <li>개인정보를 제공받는 자의 개인정보 보유 및 이용 기간</li>
                  </div>

                  <div className="flex gap-2">
                    <span>⑤</span>
                    <li>
                      동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른
                      불이익이 있는 경우에는 그 불이익의 내용
                    </li>
                  </div>
                </ul>
                <li>
                  동의를 거부할 권리가 있다는 사실 및 동의 거부에 따른 불이익이
                  있는 경우에는 그 불이익의 내용
                </li>
                <ul className="">
                  <div className="flex gap-2">
                    <span>①</span>
                    <li>고객으로부터 별도의 동의를 받는 경우</li>
                  </div>

                  <div className="flex gap-2">
                    <span>②</span>
                    <li>법률에 특별한 규정이 있는 경우</li>
                  </div>

                  <div className="flex gap-2">
                    <span>③</span>
                    <li>
                      고객 또는 그 법정대리인이 의사표시를 할 수 없는 상태에
                      있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서
                      명백히 고객 또는 제3자의 급박한 생명, 신체, 재산의 이익을
                      위하여 필요하다고 인정되는 경우
                    </li>
                  </div>

                  <div className="flex gap-2">
                    <span>④</span>
                    <li>
                      통계작성 및 학술연구 등의 목적을 위하여 필요한 경우로서
                      특정 개인을 알아볼 수 없는 형태로 개인정보를 제공하는 경우
                    </li>
                  </div>
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
                <ul className="">
                  <div className="flex gap-2">
                    <span>①</span>
                    <li>
                      고객은 회사가 처리하는 자신의 개인정보에 대한 열람을
                      요구할 수 있습니다.
                    </li>
                  </div>

                  <div className="flex gap-2">
                    <span>②</span>
                    <li>
                      회사는 고객으로부터 열람을 요구 받았을 때 10일 이내에
                      고객이 해당 개인정보를 열람할 수 있도록 하여야 합니다.
                      열람할 수 없는 정당한 사유가 있을 때에는 고객에게 그
                      사유를 알리고 열람을 연기할 수 있으며, 그 사유가 소멸하면
                      지체없이 열람하게 하여야 합니다.
                    </li>
                  </div>

                  <div className="flex gap-2">
                    <span>③</span>
                    <li>
                      회사는 다음의 사유에 해당하는 경우에는 고객에게 그 사유를
                      알리고 열람을 제한하거나 거절할 수 있습니다.
                      <ul className="list-disc ml-6">
                        <li>법률에 따라 열람이 금지되거나 제한되는 경우</li>
                        <li>
                          다른 사람의 생명, 신체를 해할 우려가 있거나 다른
                          사람의 재산과 그 밖의 이익을 부당하게 침해할 우려가
                          있는 경우
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
                <li>개인정보 정정, 삭제 요구권</li>
                <ul className="">
                  <div className="flex gap-2">
                    <span>①</span>
                    <li>
                      고객은 회사에게 자기 개인정보의 정정 또는 삭제를 요구할 수
                      있습니다. 다만, 다른 법령에서 그 개인정보가 수집 대상으로
                      명시되어 있는 경우에는 삭제를 요구할 수 없습니다.{" "}
                    </li>
                  </div>

                  <div className="flex gap-2">
                    <span>②</span>
                    <li>
                      회사는 고객이 자기 개인정보의 정정 또는 삭제를 요구할 경우
                      다른 법령에 특별한 절차가 규정되어 있는 경우를 제외하고는
                      지체없이 정정, 삭제 등 필요한 조치를 취한 후 그 결과를
                      고객에게 알려야 합니다.{" "}
                    </li>
                  </div>

                  <div className="flex gap-2">
                    <span>③</span>
                    <li>
                      회사가 개인정보를 삭제할 때에는 복구 또는 재생되지 않도록
                      조치하여야 합니다.{" "}
                    </li>
                  </div>

                  <div className="flex gap-2">
                    <span>④</span>
                    <li>
                      회사는 필요한 경우 해당 고객에게 정정, 삭제 요구사항의
                      확인에 필요한 증거자료를 제출하게 할 수 있습니다.
                    </li>
                  </div>
                </ul>
                <li>개인정보 처리 정지 요구권</li>
                <ul className="">
                  <div className="flex gap-2">
                    <span>①</span>
                    <li>
                      고객은 회사에게 자기 개인정보 처리의 정지를 요구할 수
                      있습니다.
                    </li>
                  </div>

                  <div className="flex gap-2">
                    <span>②</span>
                    <li>
                      회사는 고객이 자기 개인정보 처리의 정지를 요구할 경우
                      지체없이 개인정보 처리의 전부를 정지하거나 일부를
                      정지하여야 합니다. 다만, 다음의 경우에는 고객의 처리 정지
                      요구를 거절할 수 있습니다.
                    </li>
                  </div>

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

                  <div className="flex gap-2">
                    <span>③</span>

                    <li>
                      회사는 고객의 요구에 따라 처리가 정지된 개인정보에 대하여
                      지체없이 해당 개인정보의 파기 등 필요한 조치를 하여야
                      합니다.
                    </li>
                  </div>
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
                    <a
                      href="http://cyberbureau.police.go.kr"
                      className="underline ml-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      (http://cyberbureau.police.go.kr)
                    </a>
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

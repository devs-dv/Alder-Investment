import React, { useState } from "react";
import { msalInstance } from "./msalConfig";
import { Client } from "@microsoft/microsoft-graph-client";
import { InteractionRequiredAuthError } from "@azure/msal-browser";
import { X } from "lucide-react";

function ContactUsForm({ isOpen, onClose, language }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    organisation: "",
    emailAddress: "",
    discussionTopic: "",
    contactMethod: "",
    message: "",
    mailingList: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const sendEmail = async (accessToken) => {
    const client = Client.init({
      authProvider: (done) => {
        done(null, accessToken);
      },
    });

    const message = {
      subject: `New contact form submission from ${formData.fullName}`,
      body: {
        contentType: "Text",
        content: `
          Full Name: ${formData.fullName}
          Phone Number: ${formData.phoneNumber}
          Organisation: ${formData.organisation}
          Email Address: ${formData.emailAddress}
          Discussion Topic: ${formData.discussionTopic}
          Contact Method: ${formData.contactMethod}
          Message: ${formData.message}
          Mailing List: ${formData.mailingList ? "Yes" : "No"}
        `,
      },
      toRecipients: [
        {
          emailAddress: {
            address: "contact@alder-invest.com",
          },
        },
      ],
    };

    await client.api("/me/sendMail").post({ message });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const accounts = msalInstance.getAllAccounts();
      if (accounts.length === 0) {
        await msalInstance.loginPopup({
          scopes: ["https://graph.microsoft.com/.default"],
        });
      }

      const request = {
        scopes: ["https://graph.microsoft.com/.default"],
        account: msalInstance.getAllAccounts()[0],
      };

      const response = await msalInstance.acquireTokenSilent(request);
      await sendEmail(response.accessToken);

      setSubmitResult({
        success: true,
        message: language
          ? "Your message has been sent successfully!"
          : "메시지가 성공적으로 전송되었습니다!",
      });
    } catch (error) {
      if (error instanceof InteractionRequiredAuthError) {
        try {
          const response = await msalInstance.acquireTokenPopup(request);
          await sendEmail(response.accessToken);
          setSubmitResult({
            success: true,
            message: language
              ? "Your message has been sent successfully!"
              : "메시지가 성공적으로 전송되었습니다!",
          });
        } catch (err) {
          console.error(err);
          setSubmitResult({
            success: false,
            message: language
              ? "An error occurred while sending your message. Please try again."
              : "메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.",
          });
        }
      } else {
        console.error(error);
        setSubmitResult({
          success: false,
          message: language
            ? "An error occurred while sending your message. Please try again."
            : "메시지 전송 중 오류가 발생했습니다. 다시 시도해 주세요.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasValue = (value) => value && value.length > 0;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed right-0 top-0 h-full z-[80] w-full max-w-xl bg-[#CCCCC6] transform transition-transform duration-1000 overflow-y-auto ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="min-h-full p-4 sm:p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-normal text-gray-800">Contact Us</h2>
            <p className="mt-4 text-gray-600" style={{ wordBreak: "keep-all" }}>
              {language
                ? "Tell us more about yourself using this form. Include any specific questions in the message field and we will do our best to respond to your query promptly."
                : "본 양식에 귀하에 대한 소중한 정보를 기재해주시기 바랍니다. 메시지란에 질문을 작성해 주시면, 답변 드리겠습니다"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                className={`peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors ${
                  hasValue(formData.fullName) ? "not-empty" : ""
                }`}
                value={formData.fullName}
                onChange={handleChange}
                placeholder=" "
              />
              <label
                htmlFor="fullName"
                className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454] peer-[.not-empty]:top-[-1rem] peer-[.not-empty]:text-sm"
              >
                {language ? "Full Name*" : "성함*"}
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative">
                <input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  required
                  className={`peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors ${
                    hasValue(formData.phoneNumber) ? "not-empty" : ""
                  }`}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label
                  htmlFor="phoneNumber"
                  className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454] peer-[.not-empty]:top-[-1rem] peer-[.not-empty]:text-sm"
                >
                  {language ? "Phone Number*" : "연락처*"}
                </label>
              </div>

              <div className="relative">
                <input
                  id="organisation"
                  type="text"
                  name="organisation"
                  className={`peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors ${
                    hasValue(formData.organisation) ? "not-empty" : ""
                  }`}
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder=" "
                />
                <label
                  htmlFor="organisation"
                  className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454] peer-[.not-empty]:top-[-1rem] peer-[.not-empty]:text-sm"
                >
                  {language ? "Organisation" : "조직명"}
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                id="emailAddress"
                type="email"
                name="emailAddress"
                required
                className={`peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors ${
                  hasValue(formData.emailAddress) ? "not-empty" : ""
                }`}
                value={formData.emailAddress}
                onChange={handleChange}
                placeholder=" "
              />
              <label
                htmlFor="emailAddress"
                className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454] peer-[.not-empty]:top-[-1rem] peer-[.not-empty]:text-sm"
              >
                {language ? "Email Address*" : "이메일*"}
              </label>
            </div>

            <div className="relative">
              <select
                id="discussionTopic"
                name="discussionTopic"
                className={`peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors text-sm sm:text-base ${
                  hasValue(formData.discussionTopic)
                    ? "not-empty text-[#545454]"
                    : "text-[#545454]/60"
                }`}
                value={formData.discussionTopic}
                onChange={handleChange}
              >
                <option value="" disabled className="text-sm sm:text-base">
                  {language
                    ? "What would you like to discuss with us?*"
                    : "귀하께서 원하시는 상담 분야를 선택해주십시오*"}
                </option>
                <option value="meeting" className="text-sm sm:text-base">
                  {language
                    ? "Arranging a meeting with an expert"
                    : "전문가와의 상담 예약"}
                </option>
                <option value="wealth" className="text-sm sm:text-base">
                  {language
                    ? "Customised asset management"
                    : "고객 맞춤형 자산관리"}
                </option>
                <option value="advisory" className="text-sm sm:text-base">
                  {language
                    ? "Tax, inheritance, gift advice"
                    : "세금, 상속, 증여 관련 조언"}
                </option>
                <option value="other" className="text-sm sm:text-base">
                  {language ? "General queries / Other" : "일반 문의/기타"}
                </option>
              </select>
            </div>

            <div className="relative">
              <select
                id="contactMethod"
                name="contactMethod"
                className={`peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors text-sm sm:text-base ${
                  hasValue(formData.contactMethod)
                    ? "not-empty text-[#545454]"
                    : "text-[#545454]/60"
                }`}
                value={formData.contactMethod}
                onChange={handleChange}
              >
                <option value="" disabled className="text-sm sm:text-base">
                  {language
                    ? "How would you like to be contacted?"
                    : "귀하께 연락드릴 방법을 선택해 주십시오."}
                </option>
                <option value="phone" className="text-sm sm:text-base">
                  {language ? "Phone" : "전화"}
                </option>
                <option value="email" className="text-sm sm:text-base">
                  {language ? "Email" : "이메일"}
                </option>
              </select>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className={`peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors resize-none text-sm sm:text-base ${
                  hasValue(formData.message) ? "not-empty" : ""
                }`}
                value={formData.message}
                onChange={handleChange}
                placeholder=" "
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454] peer-[.not-empty]:top-[-1rem] peer-[.not-empty]:text-sm"
              >
                {language ? "Your Message" : "메시지"}
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="mailingList"
                name="mailingList"
                className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                checked={formData.mailingList}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    mailingList: e.target.checked,
                  }))
                }
              />
              <label
                htmlFor="mailingList"
                className="text-xs sm:text-sm text-gray-600"
              >
                {language
                  ? "Please check this box to be added to our mailing list"
                  : "이 확인란을 선택하면 메일링 리스트에 추가됩니다."}
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
            >
              {isSubmitting
                ? language
                  ? "Sending..."
                  : "전송 중..."
                : language
                ? "SUBMIT"
                : "제출하기"}
            </button>
            {submitResult && (
              <div
                className={`text-center ${
                  submitResult.success ? "text-green-600" : "text-red-600"
                }`}
              >
                {submitResult.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactUsForm;

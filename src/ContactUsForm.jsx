import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

function ContactForm({ isOpen, onClose, language }) {
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
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    console.log("Form submission started");
    console.log("Form data being submitted:", formData);

    try {
      console.log("Sending request to API...");
      const response = await axios.post("/api/send-email", formData);
      console.log("API Response:", response.data);
      setSubmitSuccess(true);
      setFormData({
        fullName: "",
        phoneNumber: "",
        organisation: "",
        emailAddress: "",
        discussionTopic: "",
        contactMethod: "",
        message: "",
        mailingList: false,
      });
      console.log("Form submission completed successfully");
    } catch (error) {
      console.error("Form submission error:", error);
      console.error("Error details:", {
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers,
      });
      setSubmitError(
        error.response?.data?.error ||
          error.response?.data?.details ||
          "An error occurred while submitting the form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
      console.log("Form submission process completed");
    }
  };

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
                : "본 양식에 귀하에 대한 소중한 정보를 기재해주시기 바랍니다. 메시지란에 질문을 작성해 주시면, 답변 드리겠습니다."}
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                id="fullName"
                type="text"
                name="fullName"
                required
                className="peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors"
                placeholder=" "
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <label
                htmlFor="fullName"
                className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454]"
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
                  className="peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors"
                  placeholder=" "
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="phoneNumber"
                  className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454]"
                >
                  {language ? "Phone Number*" : "연락처*"}
                </label>
              </div>

              <div className="relative">
                <input
                  id="organisation"
                  type="text"
                  name="organisation"
                  className="peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors"
                  placeholder=" "
                  value={formData.organisation}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="organisation"
                  className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454]"
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
                className="peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors"
                placeholder=" "
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
              <label
                htmlFor="emailAddress"
                className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454]"
              >
                {language ? "Email Address*" : "이메일*"}
              </label>
            </div>

            <div className="relative">
              <select
                id="discussionTopic"
                name="discussionTopic"
                className="peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors text-sm sm:text-base text-[#545454]/60"
                value={formData.discussionTopic}
                onChange={handleInputChange}
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
                className="peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors text-sm sm:text-base text-[#545454]/60"
                value={formData.contactMethod}
                onChange={handleInputChange}
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
                className="peer w-full border-b bg-[#CCCCC6] border-gray-200 py-3 outline-none focus:border-gray-400 transition-colors resize-none text-sm sm:text-base"
                placeholder=" "
                value={formData.message}
                onChange={handleInputChange}
              />
              <label
                htmlFor="message"
                className="absolute left-0 top-3 text-sm sm:text-base text-[#545454] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#545454] peer-focus:top-[-1rem] peer-focus:text-sm peer-focus:text-[#545454]"
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
                onChange={handleInputChange}
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
              className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? language
                  ? "SUBMITTING..."
                  : "제출 중..."
                : language
                ? "SUBMIT"
                : "제출하기"}
            </button>

            {submitError && (
              <p className="text-red-500 text-sm">{submitError}</p>
            )}
            {submitSuccess && (
              <p className="text-green-500 text-sm">
                {language
                  ? "Form submitted successfully!"
                  : "양식이 성공적으로 제출되었습니다!"}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactForm;

import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

app.post("/api/send-email", async (req, res) => {
  console.log("Received POST request to /api/send-email");
  console.log("Request body:", req.body);

  try {
    console.log("Parsing request body...");
    const body = req.body;
    console.log("Received form data:", JSON.stringify(body, null, 2));

    const {
      fullName,
      phoneNumber,
      organisation,
      emailAddress,
      discussionTopic,
      contactMethod,
      message,
      mailingList,
    } = body;

    console.log("Checking Resend API key...");
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set in environment variables");
      throw new Error("RESEND_API_KEY is not configured");
    }

    console.log("Preparing to send email via Resend...");
    const { data, error } = await resend.emails.send({
      from: `${fullName} <onboarding@resend.dev>`,
      to: "contact@alder-invest.com",
      reply_to: emailAddress,
      subject: "New Contact Form Submission",
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Organisation:</strong> ${organisation}</p>
        <p><strong>Email:</strong> ${emailAddress}</p>
        <p><strong>Discussion Topic:</strong> ${discussionTopic}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Added to Mailing List:</strong> ${
          mailingList ? "Yes" : "No"
        }</p>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return res.status(400).json({ error: error.message });
    }

    console.log("Email sent successfully:", data);
    return res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    console.error("Unexpected error in API route:", error);
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
});

export default app;

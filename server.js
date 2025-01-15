// import express from "express";
// import { Resend } from "resend";
// import cors from "cors";
// import dotenv from "dotenv";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(cors());
// app.use(express.json());

// const resendApiKey = process.env.RESEND_API_KEY;
// if (!resendApiKey) {
//   console.error("RESEND_API_KEY is not set in the environment variables");
//   process.exit(1);
// }

// const resend = new Resend(resendApiKey);

// app.post("/api/send-email", async (req, res) => {
//   console.log("Received request:", req.body);

//   try {
//     const {
//       fullName,
//       phoneNumber,
//       organisation,
//       emailAddress,
//       discussionTopic,
//       contactMethod,
//       message,
//       mailingList,
//     } = req.body;

//     console.log("Sending email with Resend...");
//     const { data, error } = await resend.emails.send({
//       from: `${fullName} ${emailAddress}`,
//       to: "contact@alder-invest.com",
//       reply_to: emailAddress,
//       subject: "New Contact Form Submission",
//       html: `
//         <h1>New Contact Form Submission</h1>
//         <p><strong>Name:</strong> ${fullName}</p>
//         <p><strong>Phone:</strong> ${phoneNumber}</p>
//         <p><strong>Organisation:</strong> ${organisation}</p>
//         <p><strong>Email:</strong> ${emailAddress}</p>
//         <p><strong>Discussion Topic:</strong> ${discussionTopic}</p>
//         <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         <p><strong>Added to Mailing List:</strong> ${
//           mailingList ? "Yes" : "No"
//         }</p>
//       `,
//     });

//     if (error) {
//       console.error("Error sending email:", error);
//       return res.status(400).json({ error: error.message });
//     }

//     console.log("Email sent successfully:", data);
//     res.status(200).json({ message: "Email sent successfully", data });
//   } catch (error) {
//     console.error("Unexpected error:", error);
//     res
//       .status(500)
//       .json({ error: "An unexpected error occurred while sending the email" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

// import express from "express";
// import { Resend } from "resend";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// const resend = new Resend(process.env.RESEND_API_KEY);

// app.use(cors());
// app.use(express.json());

// app.post("/api/send-email", async (req, res) => {
//   console.log("API Route Handler Started");
//   console.log("Request Method:", req.method);

//   try {
//     console.log("Parsing request body...");
//     const body = req.body;
//     console.log("Received form data:", JSON.stringify(body, null, 2));

//     const {
//       fullName,
//       phoneNumber,
//       organisation,
//       emailAddress,
//       discussionTopic,
//       contactMethod,
//       message,
//       mailingList,
//     } = body;

//     console.log("Checking Resend API key...");
//     if (!process.env.RESEND_API_KEY) {
//       console.error("RESEND_API_KEY is not set in environment variables");
//       throw new Error("RESEND_API_KEY is not configured");
//     }

//     console.log("Preparing to send email via Resend...");
//     const { data, error } = await resend.emails.send({
//       from: `${fullName} <onboarding@resend.dev>`,
//       to: "contact@alder-invest.com",
//       reply_to: emailAddress,
//       subject: "New Contact Form Submission",
//       html: `
//         <h1>New Contact Form Submission</h1>
//         <p><strong>Name:</strong> ${fullName}</p>
//         <p><strong>Phone:</strong> ${phoneNumber}</p>
//         <p><strong>Organisation:</strong> ${organisation}</p>
//         <p><strong>Email:</strong> ${emailAddress}</p>
//         <p><strong>Discussion Topic:</strong> ${discussionTopic}</p>
//         <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
//         <p><strong>Message:</strong> ${message}</p>
//         <p><strong>Added to Mailing List:</strong> ${
//           mailingList ? "Yes" : "No"
//         }</p>
//       `,
//     });

//     if (error) {
//       console.error("Resend API Error:", error);
//       return res.status(400).json({ error: error.message });
//     }

//     console.log("Email sent successfully:", data);
//     return res.status(200).json({ message: "Email sent successfully", data });
//   } catch (error) {
//     console.error("Unexpected error in API route:", error);
//     return res.status(500).json({ error: "An unexpected error occurred" });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Remove the config export as we want body parsing
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  // Handle OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Handle GET request
  if (req.method === "GET") {
    return res.status(200).json({ message: "API is working" });
  }

  // Handle POST request
  if (req.method === "POST") {
    console.log("API Route Handler Started");
    console.log("Request Method:", req.method);

    try {
      console.log("Parsing request body...");
      const {
        fullName,
        phoneNumber,
        organisation,
        emailAddress,
        discussionTopic,
        contactMethod,
        message,
        mailingList,
      } = req.body;

      console.log("Received form data:", JSON.stringify(req.body, null, 2));

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
  }

  // Handle unsupported methods
  res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
  return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
}

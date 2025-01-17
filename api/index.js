const express = require("express");
const resend = require("resend");

const app = express();
app.use(express.json());

// Resend API Key
resend.apiKey = "YOUR_RESEND_API_KEY";

app.post("/contact", async (req, res) => {
  // Handle POST request
  console.log("API Route Handler Started");
  console.log("Request Method:", req.method);

  const {
    fullName,
    phoneNumber,
    organisation,
    emailAddress,
    discussionTopic,
    contactMethod,
    message,
  } = req.body;

  try {
    // Attempt to remove email from suppression list
    try {
      await resend.suppressions.remove({
        email: "contact@alder-invest.com",
      });
      console.log("Email removed from suppression list");
    } catch (suppressionError) {
      console.log("Suppression removal attempted:", suppressionError);
    }

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
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
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      if (error.message?.includes("suppression")) {
        return res.status(400).json({
          error:
            "Email is suppressed. Attempting to remove from suppression list. Please try again.",
          details: error.message,
        });
      }
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

const port = 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));

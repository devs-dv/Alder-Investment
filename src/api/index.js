import { Resend } from "resend";

export const config = {
  runtime: "edge",
};

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(request) {
  console.log("API Route Handler Started");
  console.log("Request Method:", request.method);

  // Ensure we're only handling POST requests
  if (request.method !== "POST") {
    console.log("Method Not Allowed:", request.method);
    return new Response("Method not allowed", {
      status: 405,
      headers: {
        Allow: "POST",
        "Content-Type": "text/plain",
      },
    });
  }

  try {
    console.log("Parsing request body...");
    const body = await request.json();
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
      from: `${fullName} ${emailAddress}`,
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
      return new Response(
        JSON.stringify({
          error: error.message,
          details: "Error occurred while sending email via Resend",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    console.log("Email sent successfully:", data);
    return new Response(
      JSON.stringify({
        message: "Email sent successfully",
        data,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Unexpected error in API route:", error);
    console.error("Error stack:", error.stack);
    return new Response(
      JSON.stringify({
        error: "An unexpected error occurred while sending the email",
        details: error.message,
        timestamp: new Date().toISOString(),
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

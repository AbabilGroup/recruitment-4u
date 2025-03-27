import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type FormConfig = {
  emailSubject: string;
  recipientEmail?: string;
  fields: Record<
    string,
    {
      label: string;
      required?: boolean;
    }
  >;
};

// Predefined form configurations
const FORM_CONFIGS: Record<string, FormConfig> = {
  contact: {
    emailSubject: "New Contact Form Submission",
    fields: {
      company: { label: "Company", required: true },
      email: { label: "Email Address", required: true },
      phone: { label: "Phone Number" },
      jobPositions: { label: "Requested Job Positions" },
      workersCount: { label: "Number of Workers" },
      note: { label: "Note" },
      agreeToContact: { label: "Agreed to contact" },
    },
  },
  jobApplication: {
    emailSubject: "New Job Application",
    fields: {
      fullName: { label: "Full Name", required: true },
      email: { label: "Email", required: true },
      position: { label: "Position Applied For", required: true },
      resume: { label: "Resume URL" },
      coverLetter: { label: "Cover Letter" },
    },
  },
  // Add more form types as needed
};

export async function POST(request: Request) {
  const { formType, formData } = await request.json();

  // Validate form type
  const config = FORM_CONFIGS[formType];
  if (!config) {
    return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
  }

  // Validate required fields
  for (const [field, fieldConfig] of Object.entries(config.fields)) {
    if (fieldConfig.required && !formData[field]) {
      return NextResponse.json(
        { error: `${fieldConfig.label} is required` },
        { status: 400 }
      );
    }
  }

  // Create email HTML
  const emailHtml = `
    <h2>${config.emailSubject}</h2>
    ${Object.entries(config.fields)
      .map(([field, fieldConfig]) =>
        formData[field] !== undefined &&
        formData[field] !== "" &&
        formData[field] !== false
          ? `<p><strong>${fieldConfig.label}:</strong> ${
              typeof formData[field] === "boolean"
                ? formData[field]
                  ? "Yes"
                  : "No"
                : formData[field]
            }</p>`
          : ""
      )
      .join("")}
  `;

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "playergtax6@gmail.com",
      pass: "zkzcwbubvwjpnwec",
    },
  });

  // Email options
  const mailOptions = {
    from: "playergtax6@gmail.com",
    to: "playergtax8@gmail.com",
    subject: `${config.emailSubject} - ${formType}`,
    html: emailHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}

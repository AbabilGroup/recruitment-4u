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
  // 1. Verify Content-Type header
  const contentType = request.headers.get("content-type");
  if (!contentType?.includes("application/json")) {
    return NextResponse.json(
      { error: "Invalid content type. Expected application/json" },
      { status: 400 }
    );
  }

  let formType: string;
  let formData: Record<string, unknown>;

  try {
    // 2. Safely parse request body
    const requestBody = await request.text();

    // Check for empty body
    if (!requestBody.trim()) {
      return NextResponse.json(
        { error: "Request body cannot be empty" },
        { status: 400 }
      );
    }

    const parsedBody = JSON.parse(requestBody);
    formType = parsedBody.formType;
    formData = parsedBody.formData;

    // 3. Validate required fields exist
    if (!formType || !formData) {
      return NextResponse.json(
        { error: "Both formType and formData are required" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("JSON parsing error:", error);
    return NextResponse.json(
      { error: "Invalid JSON format in request body" },
      { status: 400 }
    );
  }

  // Rest of your existing validation and email sending logic
  try {
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

    // Create email HTML (keep your existing implementation)
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

    // Create transporter (keep your existing implementation)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "playergtax6@gmail.com",
        pass: "zkzcwbubvwjpnwec",
      },
    });

    // Send email
    await transporter.sendMail({
      from: "playergtax6@gmail.com",
      to: "playergtax8@gmail.com",
      subject: `${config.emailSubject} - ${formType}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// export async function POST(request: Request) {
//   const { formType, formData } = await request.json();

//   // Validate form type
//   const config = FORM_CONFIGS[formType];
//   if (!config) {
//     return NextResponse.json({ error: "Invalid form type" }, { status: 400 });
//   }

//   // Validate required fields
//   for (const [field, fieldConfig] of Object.entries(config.fields)) {
//     if (fieldConfig.required && !formData[field]) {
//       return NextResponse.json(
//         { error: `${fieldConfig.label} is required` },
//         { status: 400 }
//       );
//     }
//   }

//   // Create email HTML
//   const emailHtml = `
//     <h2>${config.emailSubject}</h2>
//     ${Object.entries(config.fields)
//       .map(([field, fieldConfig]) =>
//         formData[field] !== undefined &&
//         formData[field] !== "" &&
//         formData[field] !== false
//           ? `<p><strong>${fieldConfig.label}:</strong> ${
//               typeof formData[field] === "boolean"
//                 ? formData[field]
//                   ? "Yes"
//                   : "No"
//                 : formData[field]
//             }</p>`
//           : ""
//       )
//       .join("")}
//   `;

//   // Create transporter
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "playergtax6@gmail.com",
//       pass: "zkzcwbubvwjpnwec",
//       // user: "contact.recruitment4u@gmail.com",
//       // pass: "ceghjxoejxqhbbqf",
//     },
//   });

//   // Email options
//   const mailOptions = {
//     from: "playergtax6@gmail.com",
//     // from: "contact.recruitment4u@gmail.com",
//     to: "playergtax8@gmail.com",
//     // to: "chairmanababilgroup@gmail.com",
//     subject: `${config.emailSubject} - ${formType}`,
//     html: emailHtml,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     return NextResponse.json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ error: "Error sending email" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { company, name, email, phone, country, message } = await req.json();
    console.log("Contact API called");

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // move to .env
        pass: process.env.GMAIL_PASS, // move to .env
      },
    });

    const mailOptions = {
      from: `Contact Form <${email}>`,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error sending email:", error.message);
    } else {
      console.error("Error sending email:", error);
    }
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
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

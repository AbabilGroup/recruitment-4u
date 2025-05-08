import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { company, name, email, phone, country, message } = await req.json();

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "help.recruitment4u@gmail.com", // Use environment variables
        pass: "lgdqxiurexamgogm",
      },
    });

    const mailOptions = {
      from: `Contact Form <${email}>`,
      to: "recruitment4u.hrm@gmail.com",
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

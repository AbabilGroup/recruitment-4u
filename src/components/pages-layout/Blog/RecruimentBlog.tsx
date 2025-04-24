import React from "react";
import BlogHeaderCard from "@/components/common/BlogHeaderCard";
import Author from "../../../../public/images/author.jpg";
import BlogImg from "../../../../public/images/articale3.jpg";
import { BlogContent } from "@/components/common/BlogContent";

type ParagraphItem =
  | {
      type: "text";
      content: string;
    }
  | {
      type: "html";
      content: string;
    }
  | {
      type: "image";
      src: string;
      alt: string;
      caption?: string;
    };

export default function RecruimentBlog() {
  const BlogData = {
    paragraphs: [
      {
        type: "text",
        content: `When expanding your talent search beyond Europe, employers often face an overwhelming variety of global options. But not all international hiring decisions deliver the same value. Certain nationalities consistently rise to the top offering professionalism, adaptability, technical know-how, and cultural alignment. At Recruitment-4u, we've helped countless clients identify top-tier talent from across the globe, particularly from regions like the Gulf, Asia, North, and South America, where the talent pipeline is strong and continuously growing.`,
      },
      {
        type: "text",
        content: `These professionals don't just have the right qualifications; they come with the global mindset, work ethic, and communication skills needed in today's digital, fast-moving business world.`,
      },
      {
        type: "text",
        content: `Still, despite the size of the international talent pool, challenges remain. The real struggle isn't finding CVs, it's finding job-ready candidates with the perfect blend of hard and soft skills. Whether it's tech fluency, multilingual communication, or cross-functional collaboration, today's roles demand a lot more than just a diploma.`,
      },
      {
        type: "text",
        content: `<strong>Work Smarter with Recruitment-4u: Your Global Recruitment Partner</strong>`,
      },

      {
        type: "text",
        content: `Hiring outside Europe is a strategic move but it also comes with added complexity. From verifying credentials to navigating visa processes and compliance regulations, it's not a journey you want to take alone. That's why smart companies partner with Recruitment-4u, your go-to global recruitment agency.`,
      },
      {
        type: "text",
        content: `We specialize in connecting businesses with high-performing professionals worldwide. Whether you're hiring developers, digital marketers, or healthcare professionals, we've got the network and the expertise to deliver results.`,
      },
      {
        type: "text",
        content: `With Recruitment-4u, you’ll avoid the common pitfalls of international hiring, saving time, money, and internal resources while gaining access to a global pool of highly qualified candidates.`,
      },
      {
        type: "image",
        src: "/images/blog1.jpg",
        alt: "Recruitment team interviewing",
      },
      {
        type: "text",
        content: ` <strong>How Recruitment-4u Finds the Right International Candidates</strong>.`,
      },
      {
        type: "text",
        content: `At Recruitment-4u, we use a multi-step approach to source and deliver top talent. First, we dig deep into our global candidate databases, and job boards. We go beyond passive sourcing; we use real-time analytics to identify professionals who match your job description, company culture, and growth goals..`,
      },
      {
        type: "text",
        content: `For candidates outside of Europe, we focus on verifying educational backgrounds, language skills, certifications, and cultural compatibility. Our vetting process ensures that each professional we present is equipped to hit the ground running in a global workplace.`,
      },
      {
        type: "text",
        content: `From job fairs and university partnerships to executive headhunting and skill assessments, our team ensures a tailored approach for every industry and job role.`,
      },
      {
        type: "text",
        content: `<strong>Why Use a Global Recruitment Agency Like Recruitment-4u?</strong>`,
      },
      {
        type: "text",
        content: `Hiring internationally is not just about filling a position; it's about finding the right fit for your company culture and business goals. Recruitment-4u specializes in this, offering a range of services designed to make your hiring process as smooth as possible.`,
      },
      {
        type: "text",
        content: `In today’s fast-moving markets, the best candidates are often not actively searching. They're busy, successful, and open only to the right opportunity. That’s where Recruitment-4u comes in.`,
      },

      {
        type: "html",
        content: `<ul class="space-y-2 my-4">
        <p class="text-lg mb-10 text-primary leading-relaxed">Here’s why clients across Europe trust us with their international hiring::</p>
                <li class="flex items-start">
                 <span class="mr-2">✅</span>
                 <span class=" font-semibold"> Access to English-speaking professionals from high-talent regions like India, Nigeria, and the Philippines</span>
                </li>
                <li class="flex  items-start">
                 <span class="mr-2">✅</span>
                  <span class=" font-semibold" >End-to-end recruitment support: sourcing, screening, compliance, and onboarding</span>
                </li>
                
                </ul>
                `,
      },
    ] as ParagraphItem[],
  };
  return (
    <section>
      <BlogHeaderCard
        category="Recruiting"
        date="July 2, 2023"
        title="Which Nationality Should You Prefer When You Think Outside Europe?"
        authorName="Vasco"
        authorImg={Author} // or use a real image path
        coverImg={BlogImg} // or use a real image path
      />
      <BlogContent content={BlogData} />
    </section>
  );
}

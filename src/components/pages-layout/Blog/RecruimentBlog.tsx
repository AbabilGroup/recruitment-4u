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
        type: "image",
        src: "/images/global-talent-map.jpg",
        alt: "Global talent recruitment map",
        caption: "Our worldwide talent sourcing network",
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
        type: "image",
        src: "/images/recruitment-process.jpg",
        alt: "Recruitment process infographic",
        caption: "Our streamlined international hiring process",
      },
      {
        type: "text",
        content: `<strong>Work Smarter with Recruitment-4u: Your Global Recruitment Partner</strong>`,
      },
      {
        type: "image",
        src: "/images/team-interviewing.jpg",
        alt: "Recruitment team interviewing",
        caption: "Our specialists conducting candidate interviews",
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
        type: "image",
        src: "/images/successful-hires.jpg",
        alt: "Successful international hires",
        caption: "Our satisfied clients and their international team members",
      },
      {
        type: "text",
        content: `With Recruitment-4u, you'll avoid the common pitfalls of international hiring, saving time, money, and internal resources while gaining access to a global pool of highly qualified candidates.`,
      },
    ] as const,
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
      <BlogContent
        content={BlogData as unknown as { paragraphs: ParagraphItem[] }}
      />
    </section>
  );
}

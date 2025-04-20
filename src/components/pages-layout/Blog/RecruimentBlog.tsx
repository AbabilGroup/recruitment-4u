import React from "react";
import BlogHeaderCard from "@/components/common/BlogHeaderCard";
import Author from "../../../../public/images/author.jpg";
import BlogImg from "../../../../public/images/articale3.jpg";
import BlogContent from "@/components/common/BlogContent";

export default function RecruimentBlog() {
  const paragraphs = [
    `From this moment, right after the screening, the recruiter copes with the candidate. The remaining two stages are connected with the candidate’s <strong>interviewing</strong> and the vacancy’s closing.`,
    `Then, depending on the rules of the client’s company, the client’s manager interviews the candidate on their own or with the recruiter.`,
    `That’s all, the recruitment project is over, as you can see. If the candidate is hired, they go on to the onboarding stage, but it is already the beginning of another project.`,
    `Summarizing all the above, let me highlight the main stages of the recruitment process:`,
  ];
  return (
    <section>
      <BlogHeaderCard
        category="Recruiting"
        date="July 2, 2023"
        title="Recruiters and sourcers: what’s the difference?"
        authorName="Vasco"
        authorImg={Author} // or use a real image path
        coverImg={BlogImg} // or use a real image path
      />
      <BlogContent
        title="Recruiters and sourcers: what’s the difference?"
        paragraphs={paragraphs}
        image={BlogImg} // or use a real image path
        imageAlt="Recruitment Process"
      />
    </section>
  );
}

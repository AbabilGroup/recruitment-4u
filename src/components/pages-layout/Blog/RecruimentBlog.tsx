import React from "react";
import BlogHeaderCard from "@/components/common/BlogHeaderCard";
import Author from "../../../../public/images/author.jpg";
import BlogImg from "../../../../public/images/articale3.jpg";

export default function RecruimentBlog() {
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
    </section>
  );
}

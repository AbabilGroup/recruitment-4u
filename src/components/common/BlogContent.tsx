import React from "react";
import Image, { StaticImageData } from "next/image";

interface BlogContentProps {
  title: string;
  paragraphs: string[];
  image: StaticImageData;
  imageAlt?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({
  title,
  paragraphs,
  image,
  imageAlt,
}) => {
  return (
    <section className="bg-white text-gray-800 px-4 md:px-20 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        {paragraphs.map((para, index) => (
          <p key={index} dangerouslySetInnerHTML={{ __html: para }} />
        ))}

        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>

        <div className="flex justify-center">
          <Image
            src={image}
            alt={imageAlt || "Blog Image"}
            width={800}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default BlogContent;

import React from "react";
import Image from "next/image";
import whyUsBanner from "../../../../public/images/why-us-banner.jpg";
const WhyUs = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className=" bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
          <div className="col-span-1 flex items-center justify-center">
            <Image
              priority
              src={whyUsBanner}
              alt="why-us-banner"
              className="w-full"
            />
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center text-center md:text-left">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-tight max-w-4xl">
              {title}
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black mt-4">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

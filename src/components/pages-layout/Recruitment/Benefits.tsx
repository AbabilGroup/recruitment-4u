import React from "react";
import Image from "next/image";
import Benefits1 from "../../../../public/images/benefits1.jpg";
import Benefits2 from "../../../../public/images/benefits2.jpg";
import Benefits3 from "../../../../public/images/benefits3.jpg";
import Benefits4 from "../../../../public/images/benefits4.jpg";
import Benefits5 from "../../../../public/images/benefits5.jpg";
import Benefits6 from "../../../../public/images/benefits6.jpg";

export default function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "Huge Talent Pool",
      description:
        "130,000+ candidates in our database. Top talents with different stacks for all types of companies and products",
      image: Benefits1,
    },
    {
      id: 2,
      title: "Insights",
      description:
        "We conduct technical interviews. Also, our recruiters give an extensive summary after each interview",
      image: Benefits2,
    },
    {
      id: 3,
      title: "Experience",
      description:
        "We prescreen candidates with our unique methodology and use 30+ channels for recruiting",
      image: Benefits3,
    },
    {
      id: 4,
      title: "Flexible Payments",
      description:
        "Different tariff plans to choose from and a variety of payment methods from wire to crypto transfers",
      image: Benefits4,
    },
    {
      id: 5,
      title: "Transparency",
      description:
        "Live access to CRM during the recruiting process, so you can review the recruiting funnel",
      image: Benefits5,
    },
    {
      id: 6,
      title: "Supervision",
      description:
        "We provide a personal manager and professional recruiter for each client",
      image: Benefits6,
    },
  ];

  return (
    <section className="py-12 container mx-auto px-4">
      <h1 className="text-[40px] font-bold text-center text-black mb-12">
        Benefits
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <div
            key={benefit.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col items-start text-left">
              <Image
                src={benefit.image}
                alt={benefit.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h2 className="text-xl text-black font-semibold mb-2">
                {benefit.title}
              </h2>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

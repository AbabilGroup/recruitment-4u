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
      title: "Access to Top Talent",
      description:
        "Over 130,000 candidates in our database, featuring diverse skill sets.",
      image: Benefits1,
    },
    {
      id: 2,
      title: "Expertise You Can Trust",
      description:
        "Proprietary screening methodology and 30+ recruitment channels.",
      image: Benefits2,
    },
    {
      id: 3,
      title: "Transparent Process",
      description: "Real-time CRM access to monitor the recruitment funnel.",
      image: Benefits3,
    },
    {
      id: 4,
      title: "In-Depth Insights",
      description: "Thorough technical interviews with detailed summaries.",
      image: Benefits4,
    },
    {
      id: 5,
      title: "Flexible Payment Options",
      description:
        "Various tariff plans and payment methods, including cryptocurrencies.",
      image: Benefits5,
    },
    {
      id: 6,
      title: "Personalized Support",
      description: "Dedicated manager and recruiter for each client.",
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

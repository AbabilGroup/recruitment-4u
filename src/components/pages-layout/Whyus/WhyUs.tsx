"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import whyUsBanner from "../../../../public/images/why-us-banner.jpg";

const benefits = [
  {
    title: "A simpler and quicker way to get qualified candidates",
    description:
      "We offer clients several options of providing employees (e.g. temporary recruitment), giving them a faster and more flexible way of hiring.",
  },
  {
    title: "A way to save time and money",
    description:
      "DEKRA assumes all administrative, legal and financial duties, saving time for you and your employees.",
  },
  {
    title: "Huge database of candidates",
    description:
      "We can quickly fulfil your employee requirements thanks to our wide variety of candidates with different profiles and skillsets.",
  },
  {
    title: "Experience and established processes",
    description:
      "As a result of years of agency work, we have well-defined processes, experience in hiring local and foreign workers, office all across Croatia, and visibility across the region.",
  },
];

const navbarHeight = 80; // adjust to match your navbar

const WhyUs = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sticky Image Column */}
          <div className="w-full lg:w-1/2 h-fit">
            <div
              className="sticky"
              style={{
                top: `${navbarHeight}px`,
                height: `calc(100vh - ${navbarHeight}px)`,
              }}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full h-full rounded-lg overflow-hidden">
                <Image
                  src={whyUsBanner}
                  alt="why-us-banner"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
          </div>

          {/* Scrollable Content Column */}
          <div className="w-full lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}>
              <h1 className="text-[52px] md:text-[52px] font-bold text-black mb-6">
                Why Us
              </h1>
              <p className="text-lg text-black">
                We are a recruitment agency that specializes in connecting
                companies with the right talent.
              </p>
            </motion.div>

            <div className="space-y-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gray-100 rounded-lg">
                  <h2 className="text-[40px] md:text-[40px] font-semibold text-black mb-2">
                    {index + 1}. {benefit.title}
                  </h2>
                  <p className="text-gray-700">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

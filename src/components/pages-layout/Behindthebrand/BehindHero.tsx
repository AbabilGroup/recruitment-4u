"use client";
import React from "react";
import { motion } from "framer-motion";

export default function BehindHero() {
  return (
    <section className="relative bg-primary ml-[-10vw] w-screen overflow-hidden">
      {/* Background images container */}
      <div className="flex h-[70vh] min-h-[500px]">
        {/* Left image */}
        <div
          className="w-1/2 bg-[url('/images/behind.jpg')] bg-cover bg-no-repeat bg-center"
          style={{ backgroundPosition: "50% center" }}></div>

        {/* Right image - now with relative positioning for the child Image */}
        <div className="w-1/2 relative bg-[url('/images/behind2.jpg')] bg-cover bg-no-repeat bg-center"></div>
      </div>

      {/* Text overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto px-6 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Global tech recruitment & staffing for fast-growing companies
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              We supply our clients with exclusive recruitment services helping
              businesses scale and prosper
            </p>
            <a
              className="bg-primary text-[25px] font-bold mt-5 text-white px-8 py-4 rounded-md hover:text-slate-700 transition-all"
              href="https://calendly.com/chairmanababilgroup/30min?back=1&month=2025-04"
              target="_blank">
              Book a call
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

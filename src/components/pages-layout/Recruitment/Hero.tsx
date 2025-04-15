import React from "react";
import { motion } from "framer-motion";
import ImageSlider from "@/components/common/ImageSlider";
import img1 from "../../../../public/images/11.png";
import img2 from "../../../../public/images/22.png";
import img3 from "../../../../public/images/adria_grupa.png";
import img4 from "../../../../public/images/alh.png";
import img5 from "../../../../public/images/Alu-flex-pack-logo-1.png";
import img6 from "../../../../public/images/Anilox.png";
import img7 from "../../../../public/images/aquaterm-logo.png";
import img8 from "../../../../public/images/arena.png";
import img9 from "../../../../public/images/autotrans-logo.png";
import img10 from "../../../../public/images/batak.png";
import img11 from "../../../../public/images/duplico.png";
import img12 from "../../../../public/images/euromarkt.png";
import img13 from "../../../../public/images/gavrilovic.png";
import img14 from "../../../../public/images/good_food.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
];
export default function Hero() {
  return (
    <section className="relative bg-[#E8F5F4] ml-[-10vw]  w-screen overflow-hidden">
      <div className="container mx-auto">
        {/* Background images container */}
        <div className="flex h-[70vh] min-h-[500px]">
          {/* Left image */}
          <div
            className="w-1/2 bg-[url('/images/reruitmentleft.jpg')] bg-cover bg-no-repeat bg-center"
            style={{ backgroundPosition: "50% center" }}></div>

          {/* Right image - now with relative positioning for the child Image */}
          <div className="w-1/2 relative bg-[url('/images/reruitmentright.jpg')] bg-cover bg-no-repeat bg-center"></div>
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
                Recruitment
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                We provide full-cycle recruiting services that free up time and
                save money.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Find the talent you need to keep growing your business.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300">
                Book a call
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" bg-white ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-5">
            <h5 className="text-black text-[22px] md:text-[24px] font-bold mb-6">
              Client:
            </h5>
            <ImageSlider images={images} height="h-28" speed={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

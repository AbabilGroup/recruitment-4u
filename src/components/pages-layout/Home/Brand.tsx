import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
// Import images
import FemaleImage from "../../../../public/images/brandfemale.jpeg";
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

// Store images in an array
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

const Brand = () => {
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 overflow-hidden">
      <div className="container mx-auto text-center">
        <h1 className="text-black text-[40px] md:text-[50px] font-bold mb-6">
          We have secured the trust of numerous clients with the quality of our
          work.
        </h1>
      </div>

      {/* Smooth Scrolling Image Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-8 w-max"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            ease: "linear",
            duration: 50,
            repeat: Infinity,
            repeatType: "loop",
          }}>
          {[...images, ...images].map((img, index) => (
            <div key={index} className="group">
              <Image
                src={img}
                alt="brand"
                className="w-auto h-32 object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="container mx-auto flex justify-center items-center text-center mt-8">
        <div>
          <h5 className="text-black text-[40px] md:text-[50px] font-bold">
            Contact Us
          </h5>
          <Button
            onClick={() => handleButtonClick("/contact")}
            className="bg-primary text-[32px] mt-5 px-12 py-8 font-bold">
            Send inquiry
          </Button>
        </div>
        <div>
          <Image
            src={FemaleImage}
            alt="brand"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Brand;

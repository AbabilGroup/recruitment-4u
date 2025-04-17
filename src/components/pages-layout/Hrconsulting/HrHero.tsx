import Image from "next/image";
import HRImage from "../../../../public/images/hrconsultingleft.jpg"; // or use another overlay image
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
import ImageSlider from "@/components/common/ImageSlider";

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
    <section>
      <div
        className="bg-cover bg-no-repeat bg-center min-h-[600px] flex items-center px-5"
        style={{
          backgroundImage: `url('/images/hrconsultingcover.jpg')`, // or dynamically via import
        }}>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-black">
            <h1 className="text-[52px] font-bold mb-6">HR consulting</h1>
            <p className="text-[25px] mb-6 max-w-lg">
              We help companies create a well-known brand that will stand out on
              the market and boost hiring metrics.
            </p>
            <button className="bg-primary text-[25px] font-bold mt-5 text-white px-8 py-4 rounded-md hover:text-slate-700 transition-all">
              Book a call
            </button>
          </div>
          {/* Right image */}
          <div className="hidden md:block">
            <Image
              src={HRImage}
              alt="HR consulting illustration"
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
      <div className=" bg-white ">
        <div className="container mx-auto">
          <div className="flex justify-center items-center gap-5">
            <h5 className="text-black text-[22px] md:text-[24px] font-bold mb-6">
              Trusted by top brands
            </h5>
            <ImageSlider images={images} height="h-28" speed={50} />
          </div>
        </div>
      </div>
    </section>
  );
}

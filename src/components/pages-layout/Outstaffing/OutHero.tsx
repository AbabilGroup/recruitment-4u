import React from "react";
import Image from "next/image";
import { DollarSign, ThumbsUp, Users } from "lucide-react";
import ImageSlider from "@/components/common/ImageSlider";
import Outstaffing from "../../../../public/images/Outstaffing.jpg";
import img1 from "../../../../public/images/brand1.png";
import img2 from "../../../../public/images/brand2.png";
import img3 from "../../../../public/images/brand3.png";
import img4 from "../../../../public/images/brand4.png";
import img5 from "../../../../public/images/brand5.png";
import img6 from "../../../../public/images/brand6.png";
import img7 from "../../../../public/images/brand7.png";
import img8 from "../../../../public/images/brand8.png";
import img9 from "../../../../public/images/brand9.png";
import img10 from "../../../../public/images/brand10.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
export default function OutHero() {
  return (
    <section>
      <div className="min-h-[600px] flex items-center px-5">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="text-black">
            <h1 className="text-[52px] font-bold mb-6">Outstaffing</h1>
            <p className="text-[25px] mb-6 max-w-lg">
              We provide outstaffing for fast-growing companies, help to grow
              companies’ teams and increase their productivity
            </p>
            <a
              className="bg-primary text-[25px] font-bold mt-5 text-white px-8 py-4 rounded-md hover:text-slate-700 transition-all"
              href="https://calendly.com/chairmanababilgroup/30min?back=1&month=2025-04"
              target="_blank">
              Book a call
            </a>
          </div>
          {/* Right image */}
          <div className="hidden md:block">
            <Image
              src={Outstaffing}
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
            <ImageSlider images={images} height="h-8" speed={50} />
          </div>
        </div>
      </div>

      <div className="bg-[#F8F8F8] py-12">
        <div className="   pb-20 mx-auto">
          {/* Use flex for same height and wrap for responsiveness */}
          <div className="flex flex-col md:flex-row mt-10 gap-8">
            {/* Box 1 */}
            <div className="flex-1 flex flex-col justify-between p-6 rounded-lg">
              <div>
                <DollarSign height={60} width={70} className="text-primary" />
                <div className="mt-10">
                  <h4 className="text-black text-[30px] font-bold">
                    $0 pre-payment
                  </h4>
                  <p className="text-[20px] text-black font-normal">
                    The hiring process is cost-effective, fast and easy. We are
                    ready to start immediately, and we take care of payrolls and
                    taxes
                  </p>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex-1 flex flex-col justify-between p-6 rounded-lg">
              <div>
                <ThumbsUp height={60} width={70} className="text-primary" />
                <div className="mt-10">
                  <h4 className="text-black text-[30px] font-bold">
                    Flexibility and scalability
                  </h4>
                  <p className="text-[20px] text-black font-normal">
                    We provide temporary staff for short-term projects, or help
                    with long-term hiring needs. Plus, we can quickly scale the
                    workforce up or down
                  </p>
                </div>
              </div>
            </div>
            {/* Box 3 */}
            <div className="flex-1 flex flex-col justify-between p-6 rounded-lg">
              <div>
                <Users height={60} width={70} className="text-primary" />
                <div className="mt-10">
                  <h4 className="text-black text-[30px] font-bold">
                    Employee retention
                  </h4>
                  <p className="text-[20px] text-black font-normal">
                    We focuse on building long-term relationships and strive to
                    provide remote workers who fit into the client&apos;s
                    culture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

import { motion } from "framer-motion";
// Define cardVariants for motion animations
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Whatsdo = () => {
  return (
    <section className="bg-[#009AEE] py-12 w-screen ml-[-10vw]">
      <div className="container mx-auto ">
        <h1 className="text-[40px] text-center text-white font-bold">
          What we do
        </h1>
        <motion.div className="py-10 flex justify-center items-center max-md:flex-col gap-4 md:gap-8">
          <motion.div
            className="w-full sm:w-[360px] cursor-pointer"
            variants={cardVariants}>
            <div
              className={`text-white p-10 rounded-[2rem] w-full h-[450px] max-w-sm bg-[#071A42] shadow-lg`}>
              <div className="flex flex-col  justify-between h-full">
                <div>
                  <h2 className="text-[28px] font-bold mb-2">Recruiting</h2>
                  <p className="text-[18px] font-normal text-white mt-6">
                    We provide full-cycle recruiting services that free up time
                    and save money.
                  </p>
                  <p className="text-[18px] font-normal text-white mt-6">
                    We provide full-cycle recruiting services that free up time
                    and save money.
                  </p>
                </div>
                <div className="flex items-center  justify-between">
                  <div className="flex -space-x-3"></div>
                  <button
                    // onClick={onClick}
                    className="w-14 h-14  text-[#0489EF] rounded-full flex items-center justify-center ">
                    More -{">"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="w-full sm:w-[360px] cursor-pointer"
            variants={cardVariants}>
            <div
              className={`text-black p-10 rounded-[2rem] w-full h-[450px] max-w-sm bg-[#FFFFFF] shadow-lg`}>
              <div className="flex flex-col  justify-between h-full">
                <div>
                  <h2 className="text-[28px] text-black  font-bold mb-2">
                    Subscription-based recruiting
                  </h2>
                  <p className="text-[18px]  text-black font-normal  mt-6">
                    We provide full-cycle recruiting services that free up time
                    and save money.
                  </p>
                  <p className="text-[18px] font-normal text-black mt-6">
                    We provide full-cycle recruiting services that free up time
                    and save money.
                  </p>
                </div>
                <div className="flex items-center  justify-between">
                  <div className="flex -space-x-3"></div>
                  <button
                    // onClick={onClick}
                    className="w-14 h-14  text-[#0489EF] rounded-full flex items-center justify-center ">
                    More -{">"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            // onClick={() => handleButtonClick("/outstaffing")}
            className="w-full sm:w-[360px]  cursor-pointer"
            variants={cardVariants}>
            <div
              className={`text-black p-10 rounded-[2rem] w-full h-[450px] max-w-sm bg-[#84D66F] shadow-lg`}>
              <div className="flex flex-col  justify-between h-full">
                <div>
                  <h2 className="text-[28px] text-black  font-bold mb-2">
                    Recruitment Process Outsourcing
                  </h2>
                  <p className="text-[18px]  text-black font-normal  mt-6">
                    RPO is outsourcing the recruitment processor a partial or
                    complete transfer bythe employer of the search and
                    selectionprocess to a specialized contractor withina
                    project, department, or company.
                  </p>
                </div>
                <div className="flex items-center  justify-between">
                  <div className="flex -space-x-3"></div>
                  <button
                    // onClick={onClick}
                    className="w-14 h-14  text-[#0489EF] rounded-full flex items-center justify-center ">
                    More -{">"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Whatsdo;

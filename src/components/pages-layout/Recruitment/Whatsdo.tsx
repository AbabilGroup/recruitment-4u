import React from "react";
import Card from "@/components/common/Card";
import { motion } from "framer-motion";
// Define cardVariants for motion animations
const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Whatsdo = () => {
   <section className="bg-[#009AEE] py-12">
     <div className="container">
       <motion.div className="flex justify-center items-center max-md:flex-col gap-4 md:gap-8">
         <motion.div
           className="w-full sm:w-[360px] cursor-pointer"
           variants={cardVariants}>
           <Card
             title="Recruitment"
             description="We provide full-cycle recruiting & HR services that are tailored to the business needs."
             avatars={[
               "https://randomuser.me/api/portraits/women/1.jpg",
               "https://randomuser.me/api/portraits/women/2.jpg",
             ]}
             bgColor="bg-[#05123F]"
           />
         </motion.div>

         <motion.div
           className="w-full sm:w-[360px] cursor-pointer"
           variants={cardVariants}>
           <Card
             title="HR-consulting"
             description="We help companies create a well-known brand that will stand out on the market and boost hiring metrics."
             avatars={[
               "https://randomuser.me/api/portraits/women/1.jpg",
               "https://randomuser.me/api/portraits/women/2.jpg",
             ]}
             bgColor="bg-[#FFFFFF]"
           />
         </motion.div>

         <motion.div
           // onClick={() => handleButtonClick("/outstaffing")}
           className="w-full sm:w-[360px] cursor-pointer"
           variants={cardVariants}>
           <Card
             title="Outstaffing"
             description="We provide outstaffing for fast-growing companies, help to grow companies' teams and increase their productivity"
             avatars={[
               "https://randomuser.me/api/portraits/women/1.jpg",
               "https://randomuser.me/api/portraits/women/2.jpg",
             ]}
             bgColor="bg-[#90DA7B]"
           />
         </motion.div>
       </motion.div>
     </div>
   </section>;
}

export default Whatsdo
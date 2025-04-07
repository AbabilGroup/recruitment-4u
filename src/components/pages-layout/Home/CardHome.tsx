import { motion } from "framer-motion";
import Card from "@/components/common/Card";

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const CardHome = () => {
  return (
    <motion.div
      className="container mx-auto px-4 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}>
      <motion.div className="flex justify-center items-center max-md:flex-col gap-4 md:gap-8">
        <motion.div className="w-full sm:w-[360px]" variants={cardVariants}>
          <Card
            title="Recruitment"
            description="We provide full-cycle recruiting & HR services that are tailored to the business needs."
            avatars={[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
            ]}
            bgColor="bg-[#05123F]"
            onClick={() => alert("Play clicked!")}
          />
        </motion.div>

        <motion.div className="w-full sm:w-[360px]" variants={cardVariants}>
          <Card
            title="HR-consulting"
            description="We help companies create a well-known brand that will stand out on the market and boost hiring metrics."
            avatars={[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
            ]}
            bgColor="bg-[#009AEE]"
            onClick={() => alert("Play clicked!")}
          />
        </motion.div>

        <motion.div className="w-full sm:w-[360px]" variants={cardVariants}>
          <Card
            title="Outstaffing"
            description="We provide outstaffing for fast-growing companies, help to grow companies' teams and increase their productivity"
            avatars={[
              "https://randomuser.me/api/portraits/women/1.jpg",
              "https://randomuser.me/api/portraits/women/2.jpg",
            ]}
            bgColor="bg-[#90DA7B]"
            onClick={() => alert("Play clicked!")}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CardHome;

import FeatureCard from "@/components/common/FeatureCard";
import {
  FileText,
  BarChart2,
  Lightbulb,
  User,
  DollarSign,
  ThumbsUp,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <FileText size={40} />,
    title: "HR audit",
    description:
      "Examine the processes in the field of personnel management, determine which improvements are needed",
  },
  {
    icon: <BarChart2 size={40} />,
    title: "Insights",
    description:
      "Highlight the strengths and weaknesses of your HR department, tell about the latest trends",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Solutions",
    description:
      "Build the company’s HR strategy in the shortest time and with the perfect result",
  },
  {
    icon: <User size={40} />,
    title: "Experience",
    description:
      "We professionally create an employer brand strategy for attracting talents and retaining employees",
  },
  {
    icon: <DollarSign size={40} />,
    title: "Flexible Payments",
    description:
      "Different tariff plans to choose from and a variety of payment methods from wire to crypto transfers",
  },
  {
    icon: <ThumbsUp size={40} />,
    title: "Effective Recruitment",
    description:
      "We can help in the area of recruiting by optimizing a recruitment strategy as well as assisting in hiring",
  },
];

import React from "react";

const OutBenefits: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        Benefits
      </h1>
      <p className=" text-[26px] text-center mb-12 text-primary">
        We help 70+ companies improve their HR processes, achieve goals and get
        a profit.
      </p>
      <div className="container max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <FeatureCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutBenefits;

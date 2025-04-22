// HrBenefits.tsx
import React from "react";
import {
  FileText,
  BarChart2,
  Lightbulb,
  User,
  DollarSign,
  ThumbsUp,
} from "lucide-react";
import FeatureCard from "../../common/FeatureCard";

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
      "Analyze your personnel management practices to identify areas for enhancement.",
  },
  {
    icon: <BarChart2 size={40} />,
    title: "Insights",
    description:
      "Pinpoint strengths and weaknesses within your HR framework while staying informed on industry trends.",
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Solutions",
    description:
      "Develop a robust HR strategy swiftly, tailored for optimal results.",
  },
  {
    icon: <User size={40} />,
    title: "Experience",
    description:
      "Expertly strategize employer branding to secure and retain top talent.",
  },
  {
    icon: <DollarSign size={40} />,
    title: "Flexible Payments",
    description:
      "Choose from various pricing plans and payment options, including wire transfers and cryptocurrency.",
  },
  {
    icon: <ThumbsUp size={40} />,
    title: "Effective Recruitment",
    description:
      "Enhance recruitment strategies and support hiring efforts for superior results",
  },
];

const HrBenefits: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <h1 className="text-4xl font-bold text-center text-black mb-12">
        Benefits
      </h1>
      <p className=" text-[26px] text-center mb-12 text-primary">
        We’ve partnered with over 70 organizations to optimize HR operations,
        meet objectives, and drive profitability.
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

export default HrBenefits;

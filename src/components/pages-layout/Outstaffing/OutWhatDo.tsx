import {
  Users,
  FlaskConical,
  ShieldCheck,
  Headphones,
  GitBranch,
} from "lucide-react";
import React from "react";

export default function OutWhatDo() {
  const services = [
    {
      title: "IT Staff Augmentation",
      description:
        "Get highly qualified professionals to strengthen your team and fill critical roles swiftly.",
      icon: <Users size={70} className="text-primary" />,
    },
    {
      title: "Project-based outstaffing",
      description:
        "Receive a dedicated team to manage projects from inception to completion efficiently.",
      icon: <GitBranch size={70} className="text-primary" />,
    },
    {
      title: "R&D Center Development",
      description:
        "Leverage our expertise in establishing R&D centers with top-tier talent tailored to your needs.",
      icon: <FlaskConical size={70} className="text-primary" />,
    },
    {
      title: "QA Team Building",
      description:
        "Hire individual QA specialists or create a full team of experienced professionals for thorough quality assurance.",
      icon: <ShieldCheck size={70} className="text-primary" />,
    },
    {
      title: "Technical Support Center Setup",
      description:
        "Let us help you build or enhance your technical support department with skilled staff.",
      icon: <Headphones size={70} className="text-primary" />,
    },
  ];

  return (
    <section className="bg-[#F8F8F8] mx-auto py-12">
      <h1 className="text-[52px] font-bold text-center text-black mb-12">
        What we do
      </h1>
      <p className=" text-[26px] text-center mb-12 text-primary">
        We help businesses expand quickly, enhance operations, achieve
        objectives, and boost profitability.
      </p>
      <div className="container pb-20 mx-auto px-4">
        {/* Top row - 3 boxes */}
        <div className="flex flex-col md:flex-row mt-10 gap-8">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* Bottom row - 2 centered boxes */}
        <div className="flex justify-center mt-10">
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard key={index + 3} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: {
    title: string;
    description: string;
    icon: React.ReactNode;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="flex-1 flex flex-col justify-between border-r-4 border-white p-6 rounded-lg bg-white hover:shadow-lg transition-shadow">
      <div>
        <div className="flex justify-center md:justify-start">
          {service.icon}
        </div>
        <div className="mt-6 md:mt-10">
          <h4 className="text-black text-2xl md:text-[30px] font-bold">
            {service.title}
          </h4>
          <p className="text-lg md:text-[20px] text-black font-normal mt-4">
            {service.description}
          </p>
        </div>
      </div>
      <button className="text-lg md:text-[20px] mt-5 text-primary font-bold underline text-left hover:text-primary-dark transition-colors">
        More details
      </button>
    </div>
  );
};

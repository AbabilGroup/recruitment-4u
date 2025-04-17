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
        "We offer highly skilled employees to expand your company's capacity and close positions in the shortest possible time.",
      icon: <Users size={70} className="text-primary" />,
    },
    {
      title: "Project-based outstaffing",
      description:
        "We will provide a team to work on the project and manage the project from the start to the finish.",
      icon: <GitBranch size={70} className="text-primary" />,
    },
    {
      title: "R&D Center",
      description:
        "We have expertise in building R&D centers and are ready to deliver the best talents for your business.",
      icon: <FlaskConical size={70} className="text-primary" />,
    },
    {
      title: "QA Team",
      description:
        "We can help you hire a QA talent to complete your QA team or build a QA team consisting of a few highly qualified and experienced specialists.",
      icon: <ShieldCheck size={70} className="text-primary" />,
    },
    {
      title: "Technical Support Center",
      description:
        "Address us in case you need to create a Technical support department or fill the gaps in the team.",
      icon: <Headphones size={70} className="text-primary" />,
    },
  ];

  return (
    <section className="bg-[#F8F8F8] mx-auto py-12">
      <h1 className="text-[52px] font-bold text-center text-black mb-12">
        What we do
      </h1>
      <p className=" text-[26px] text-center mb-12 text-primary">
        We help companies to grow faster, improve business processes, achieve
        goals <br /> and get additional profit.
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

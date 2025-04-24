import React from "react";
import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionDetails from "@/components/common/SolutionDetails";
import SolutionContent from "@/components/common/SolutionContent";

const Content = [
  {
    title: "Access to Skilled Talent",
    paragraphs:
      "Gain access to a pool of qualified, vetted professionals ready to meet your business needs.",
  },
  {
    title: "Flexible Workforce Solutions",
    paragraphs:
      "We recognize the importance of adaptability and offer workforce management solutions tailored to your operational demands.",
  },
  {
    title: "Fast & Hassle-Free Recruitment",
    paragraphs:
      "Accelerate your hiring process with our streamlined approach to sourcing, onboarding, and managing talent",
  },
];
export default function NavigatingHero() {
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/navigating1.jpg"
        title="Challenges with European Immigration Laws"
        highlightedText="One of the main challenges companies face in navigating European immigration laws is dealing with the complex and often fragmented legal framework designed to protect national labor markets while also addressing broader economic needs across the region.
"
        paragraphs={[
          "Complying with immigration laws in Europe can be particularly demanding for companies seeking to employ foreign talent. Employers must adhere to various national and EU-level regulations, such as work and residence permit requirements, tax and social security obligations, and conditions that may include proving the employment of a local or EU citizen for a defined period. The process often involves labor market tests, documentation compliance, and coordination with multiple government bodies.",
          "An agency specializing in the employment of foreign workers can be a valuable partner in this process. Such agencies provide expert guidance through the legal complexities, assist with permit applications, advise on required documentation, and help ensure full compliance with national and EU labor laws.",
          "If your organization is currently navigating these challenges, our employment administration service is here to support you with tailored solutions and expert assistance.",
        ]}
      />
      <SolutionDetails
        imageSrc="/images/navigating2.jpg"
        title="Employment Administration"
        paragraphs="The employment administration service for foreign workers involves managing administrative tasks related to the employment of foreign nationals by companies operating in Europe. This service is designed to help companies navigate the complexities of hiring foreign workers, ensure compliance with European immigration and labor regulations, and streamline the administrative process."
      />
      <div className="w-full flex justify-center px-4">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
          {Content.map((item, index) => (
            <div key={index} className={`text-center px-4`}>
              <SolutionContent
                title={item.title}
                paragraphs={item.paragraphs}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

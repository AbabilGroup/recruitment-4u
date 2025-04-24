import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionContent from "@/components/common/SolutionContent";
import SolutionDetails from "@/components/common/SolutionDetails";
import React from "react";

const Content = [
  {
    title: "Access to Skilled Talent",
    paragraphs:
      "Gain access to a pool of qualified, vetted professionals ready to meet your business needs.",
  },
  {
    title: "Flexible Workforce Solutions",
    paragraphs:
      " We recognize the importance of adaptability and offer workforce management solutions tailored to your operational demands.",
  },
  {
    title: "Fast & Hassle-Free Recruitment",
    paragraphs:
      "Accelerate your hiring process with our streamlined approach to sourcing, onboarding, and managing talent.",
  },
];
export default function ConstructionHero() {
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/construction1.jpg"
        title="Challenges in finding construction workers"
        highlightedText="The current issue in the construction industry regarding the shortage of workers stems from a significant lack of labor. This shortage hampers productivity, extends project timelines, and creates challenges in meeting the demand for skilled construction workers."
        paragraphs={[
          "The European market is experiencing a similar need for construction workers, as reflected in numerous advertisements for available construction positions. Companies across the continent often face difficulties in finding dedicated and skilled workers to meet this demand, which can result in hiring challenges and potential delays in project completion.",
          "As a foreign worker recruitment agency, we offer several ways to assist you. First, we leverage our extensive network of skilled foreign workers who are eager to work across Europe. By connecting these workers with companies in need, we help bridge the gap between labor supply and demand. Additionally, we provide support in navigating the legal requirements for hiring foreign workers, ensuring a seamless and compliant hiring process for both companies and workers.",

          "Our solution to address these challenges is employment mediation.",
        ]}
      />
      <SolutionDetails
        imageSrc="/images/construction2.jpg"
        title="Employment mediation"
        paragraphs="By offering an employment mediation service, we assist companies in accessing a pool of qualified workers, addressing the challenges you face in finding a skilled workforce. Through the facilitation of foreign worker employment and the provision of comprehensive employment services, we play a crucial role in meeting the workforce needs of the construction industry across Europe."
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

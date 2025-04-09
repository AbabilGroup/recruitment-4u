import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionContent from "@/components/common/SolutionContent";
import SolutionDetails from "@/components/common/SolutionDetails";
import React from "react";

const Content = [
  {
    title: "Access to responsible workers",
    paragraphs: "Access to a qualified and verified base of workers.",
  },
  {
    title: "Preventing project delays",
    paragraphs:
      "We ensure the execution of projects on time with a qualified workforce.",
  },
  {
    title: "Quick and easy recruitment process",
    paragraphs:
      "We speed up the process of finding, administering and hiring workers.",
  },
];
export default function ConstructionHero() {
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/construction1.jpg"
        title="Challenges in finding construction workers"
        highlightedText="The current problem in construction in finding workers revolves around a significant lack of labor. This hinders productivity, increases project completion time and leads to challenges in meeting the demand for skilled construction workers."
        paragraphs={[
          "The current market in Croatia shows a need for construction workers, as evidenced by numerous advertisements for construction positions. Companies often struggle to find dedicated and skilled workers to meet this demand, leading to hiring difficulties and potential delays in project completion.",
          "As a foreign worker recruitment agency, there are several ways we can help you. First, we leverage our network of skilled foreign workers who are willing to work in Croatia. By connecting these workers with companies in need, we help bridge the gap between demand and supply in the labor market. In addition, we provide support in navigating the legal requirements for hiring foreign workers, ensuring a smooth and compliant hiring process for both companies and workers.",

          "The solution we offer you is employment mediation.",
        ]}
      />
      <SolutionDetails
        imageSrc="/images/construction2.jpg"
        title="Employment mediation"
        paragraphs="By providing an employment mediation service, we help companies to access a pool of qualified workers, we solve the challenges you face in finding a qualified workforce. Overall, by facilitating the employment of foreign workers and offering comprehensive employment services, we play a key role in meeting the workforce needs of the construction industry in Croatia."
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

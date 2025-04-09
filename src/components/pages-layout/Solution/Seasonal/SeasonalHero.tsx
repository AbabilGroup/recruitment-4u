import React from "react";
import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionDetails from "@/components/common/SolutionDetails";
import SolutionContent from "@/components/common/SolutionContent";

const Content = [
  {
    title: "Access to skilled workers",
    paragraphs:
      "We offer a database of already verified candidates and reduce the risk of employment.",
  },
  {
    title: "Flexibility in employment",
    paragraphs: "We understand the need for flexible workforce management.",
  },
  {
    title: "Quick and easy recruitment process",
    paragraphs:
      "We speed up the process of finding, administering and hiring workers.",
  },
];
export default function SeasonalHero() {
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/seasonal1.jpg"
        title="Challenges in finding seasonal workers"
        highlightedText="The problem of finding seasonal workers in Croatia, especially in industries such as tourism, catering, agriculture and construction, is multifaceted and often represents a significant challenge for employers."
        paragraphs={[
          "The hospitality industry is more subject to seasonal changes than ever before, compared to any other sphere of activity.",
          "Most of our clients during the first quarter cannot accurately predict the number and need for external or foreign workers during the high season.",
          "It is obvious that the situation in which most resorts, hotels and restaurants make last-minute hiring decisions results in a sudden increase in demand for workers. This further results in the market’s unwillingness to meet that demand immediately. Namely, from the moment of signing the contract with the Employment Agency, it takes a month or even two until the foreign workers arrive at their workplace. Finding workers, testing qualifications, interviewing, paperwork and similar processes take up most of that time.",
          "Therefore, we offer you a solution that eliminates the risks of long waits and delays in the arrival of workers: outsourcing of labor.",
        ]}
      />
      <SolutionDetails
        imageSrc="/images/seasonal2.jpg"
        title="Assignment of workers"
        paragraphs="It enables quick and easy hiring of labor for seasonal projects or a specific period of time. You can use already available workers in Croatia, which speeds up the hiring process. We facilitate the conclusion of assignment agreements, and take responsibility for the payment of salaries and the accompanying administration. This service provides a practical solution for urgent manpower needs, providing flexibility and efficiency in managing workers for different projects and seasonal requirements."
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

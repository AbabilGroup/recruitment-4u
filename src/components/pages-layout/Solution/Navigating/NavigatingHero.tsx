import React from "react";
import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionDetails from "@/components/common/SolutionDetails";
import SolutionContent from "@/components/common/SolutionContent";

const Content = [
  {
    title: "Access to skilled workers",
    paragraphs: "Access to a qualified and verified base of workers.",
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
export default function NavigatingHero() {
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/navigating1.jpg"
        title="Challenges with Croatian immigration laws"
        highlightedText="The main problem that companies face in understanding Croatian immigration laws is navigating the complex legal framework that aims to protect the domestic labor market, while at the same time meeting the country's economic needs."
        paragraphs={[
          "Following immigration laws for Croatian companies can be complex due to the legal framework that regulates the employment of foreign workers in Croatia. Companies must comply with the Aliens Act, ensuring compliance with tax and social security obligations and meeting special criteria such as full-time employment of a Croatian or EU citizen for a specified period. The process includes obtaining work permits, residence permits and compliance with regulations for employment of third-country nationals.",
          "The agency for employment of foreign workers can help Croatian companies here by providing expertise in solving the intricacies of the legal framework. The agency facilitates the process of applying for work permits, guides companies regarding the necessary documentation and helps ensure compliance with labor market tests and regulations.",
          "If this is something you are currently dealing with, we offer you a solution with our employment administration service.",
        ]}
      />
      <SolutionDetails
        imageSrc="/images/navigating2.jpg"
        title="Employment administration"
        paragraphs="The employment administration service for foreign workers involves managing administrative tasks related to the employment of foreign nationals by companies operating in Croatia. This service is designed to help companies navigate the complexities of hiring foreign workers, ensure compliance with immigration and labor regulations, and simplify the administrative process."
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

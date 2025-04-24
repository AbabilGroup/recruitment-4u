import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionContent from "@/components/common/SolutionContent";
import SolutionDetails from "@/components/common/SolutionDetails";

const Content = [
  {
    title: "Access to Skilled Talent",
    paragraphs:
      " Gain access to a pool of qualified, vetted professionals ready to meet your business needs.",
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
export default function MedicalHero() {
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/medical1.jpg"
        title="Challenges in finding medical workers"
        highlightedText="The challenge of finding qualified medical personnel, particularly in specialized fields such as healthcare, is a complex issue facing many healthcare facilities across Europe."
        paragraphs={[
          "In Europe, the healthcare sector faces similar challenges as many other regions in finding and retaining qualified medical personnel. The demand for skilled healthcare professionals, including doctors, nurses, pharmacists, and technicians, continues to grow due to factors such as an aging population, advances in medical treatments, and evolving healthcare needs.",

          "The demand for medical professionals continues to increase, driven by factors like population growth, an aging demographic, and advancements in medical technology.",

          "Europe's healthcare system relies on a combination of public and private institutions, each with unique staffing needs. While the continent’s medical workforce is highly skilled, there are often shortages in certain specialties or regions, leading to gaps in patient care and increased workloads on existing staff.",
          "Healthcare facilities also face difficulties in accurately forecasting their staffing needs, resulting in shortages during critical periods. This unpredictability can disrupt patient care and strain the workload of existing staff.",
        ]}
      />
      <SolutionDetails
        imageSrc="/images/medical2.jpg"
        title="Employment mediation"
        paragraphs="Healthcare facilities across Europe often struggle with accurately forecasting their staffing needs, resulting in shortages during critical periods. This unpredictability can disrupt patient care and place additional strain on existing staff."
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

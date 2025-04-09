import SolutionArticale from "@/components/common/SolutionArticale";
import SolutionContent from "@/components/common/SolutionContent";
import SolutionDetails from "@/components/common/SolutionDetails";

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
export default function MedicalHero() {
  return (
    <section className="py-12 container">
      <SolutionArticale
        imageSrc="/images/medical1.jpg"
        title="Challenges in finding medical workers"
        highlightedText="The challenge of finding qualified medical personnel, especially in specialized fields such as healthcare, is a complex issue facing many healthcare facilities around the world."
        paragraphs={[
          "In Croatia, the health sector faces similar challenges as many other countries in finding and retaining qualified medical personnel. The demand for skilled healthcare professionals, including doctors, nurses, pharmacists and technicians, continues to grow due to factors such as an aging population, advances in medical treatments and evolving healthcare needs.",
          "The demand for medical professionals continues to grow, driven by factors such as population growth, an aging population, and advances in medical technology.",

          "Croatia’s healthcare system relies on a combination of public and private institutions, each with unique staffing needs. The country’s medical workforce is highly skilled, but there may be shortages in certain specialties or regions, leading to gaps in patient care and increased workloads on existing staff.",
          "Healthcare facilities also often face difficulties in accurately forecasting their staffing needs, leading to shortages at critical times. This unpredictability can disrupt patient care and strain existing staff.",
        ]}
      />
      <SolutionDetails
        imageSrc="/images/medical2.jpg"
        title="Employment mediation"
        paragraphs="Healthcare facilities also often face difficulties in accurately forecasting their staffing needs, leading to shortages at critical times. This unpredictability can disrupt patient care and strain existing staff."
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

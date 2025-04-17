import { Check } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Tell us about you",
    items: [
      "Company intro",
      "Employer brand/experience audit",
      "UVP for workers",
    ],
  },
  {
    number: 2,
    title: "We drive changes",
    items: [
      "Define staff touchpoints",
      "Build employee lifecycle stages",
      "Establish processes",
    ],
  },
  {
    number: 3,
    title: "We finalize",
    items: [
      "Invest in the right technology",
      "Provide leadership training",
      "Presenting results",
    ],
  },
];

export default function HrOurprocess() {
  return (
    <section className="bg-gray-100 text-black py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[52px] font-bold mb-4">Our process</h2>
        <p className="text-[26px] font-normal mb-12">
          Reduce time to hire. We’ll provide you with the first candidates’{" "}
          <br /> CVs within 3–5 days.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div key={step.number} className="text-left">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 flex text-[25px] items-center justify-center rounded-full bg-black text-white font-bold">
                  {step.number}
                </div>
                <div className="flex-1 border-t border-black ml-4"></div>
              </div>

              <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
              <ul className="space-y-2">
                {step.items.map((item, index) => (
                  <li key={index} className="flex text-[22px] items-start space-x-2">
                    <Check className="text-green-600 mt-1" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";

import Stack1 from "../../../../public/images/OutStack1.jpg";
import Stack2 from "../../../../public/images/OutStack2.jpg";
import Stack3 from "../../../../public/images/OutStack3.jpg";
import Stack4 from "../../../../public/images/OutStack4.jpg";

const data = [
  {
    title: "Back end development",
    image: Stack1,
    description:
      "We specialize in robust backend development using Node.js, Python, Go, and more.",
  },
  {
    title: "Front end & design",
    image: Stack2,
    description:
      "Clean and interactive interfaces using React, TypeScript, and modern UI frameworks.",
  },
  {
    title: "Mobile development",
    image: Stack3,
    description:
      "Cross-platform mobile apps developed in Swift, Kotlin, Dart, and React Native.",
  },
  {
    title: "Game development",
    image: Stack4,
    description:
      "Immersive 3D game experiences using Unity and Unreal Engine technologies.",
  },
  {
    title: "Data Science & Big Data",
    description:
      "Data scientist, Machine Learning, Quantitative Researcher, AI Researcher, Data Analyst",
  },
  {
    title: "Management & Analysis",
    description:
      "CTO, IT Project Manager, Product Manager, Business analyst, Team Lead",
  },
  {
    title: "Marketing & HR",
    description:
      "CMO, Content Creator, PPC, Email Marketer, Traffic manager, HR Business Partner, Recruiter, HRD, Copywriter",
  },
  {
    title: "QA, Infrastructure& support",
    description: "QA Automation, QA Manual,DevOps, Engineer Support Engineer",
  },
];

export default function OutStack() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Stack / Specialization
      </h2>

      <div className="flex space-x-4 overflow-x-auto pb-4 max-w-full">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() =>
              setSelectedIndex(index === selectedIndex ? null : index)
            }
            className="flex-shrink-0 w-72 bg-white rounded-2xl shadow-md cursor-pointer hover:shadow-lg transition">
            {item.image ? (
              selectedIndex === index ? (
                <div className="p-4 h-60 flex flex-col justify-center">
                  <h3 className="text-lg text-primary font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </div>
              ) : (
                <>
                  <div className="p-5">
                    <div className="p-4">
                      <h3 className="text-lg text-primary font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-t-2xl"
                    />
                  </div>
                </>
              )
            ) : (
              <div className="p-4  h-60 flex flex-col justify-center">
                <h3 className="text-lg text-primary font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

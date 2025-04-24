"use client";
import React from "react";
import CardArticale from "@/components/common/CardArticale";
import { useRouter } from "next/navigation";

export default function BehindArticale() {
  const router = useRouter();
  const handleButtonClick = (path: string) => {
    router.push(path);
  };
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <h2 className="text-[45px] text-black md:text-4xl font-bold text-center mb-12">
        Recruitment reads. Refreshed. Refined.
      </h2>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
        <CardArticale
          onClick={() => handleButtonClick("/rercuitment-blog-1")}
          title="Which Nationality Should You Prefer When You Think Outside Europe?"
          imageSrc="/images/articale1.jpg"
        />
        <CardArticale
          title="Should You Rely on an Agency That Charges a High Amount? Things to Consider Before Choosing a Recruitment Partner to Build a Great Team in Europe."
          imageSrc="/images/articale2.jpg"
        />
        <CardArticale
          title="How Fast Can Recruitment-4u Bring Foreign Workers to Europe?
 And how much can we really influence the visa approval timeline?"
          imageSrc="/images/articale3.jpg"
        />
      </div>
    </section>
  );
}

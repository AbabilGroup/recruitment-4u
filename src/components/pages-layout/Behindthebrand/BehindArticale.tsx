import CardArticale from "@/components/common/CardArticale";
import React from "react";

export default function BehindArticale() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <h2 className="text-[45px] text-black md:text-4xl font-bold text-center mb-12">
        Recruitment articles at their best
      </h2>
      <div className="grid mt-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-10">
        <CardArticale
          title="Recruitment articles at their best"
          imageSrc="/images/articale1.jpg"
        />
        <CardArticale
          title="Recruitment articles at their best"
          imageSrc="/images/articale1.jpg"
        />
        <CardArticale
          title="Recruitment articles at their best"
          imageSrc="/images/articale1.jpg"
        />
      </div>
    </section>
  );
}

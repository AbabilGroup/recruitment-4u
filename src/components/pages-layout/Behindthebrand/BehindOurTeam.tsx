import React from "react";
import TeamCard from "@/components/common/TeamCard";

export default function BehindOurTeam() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[45px] text-black md:text-4xl font-bold text-center mb-12">
          Our Team
        </h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <TeamCard
            title="CEO"
            name="Vasco"
            imageSrc="/images/team1.jpg"
            emailLink="H8lXt@example.com"
            linkedinLink="https://www.linkedin.com/in/vasco-oliveira-/"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="CEO"
            name="Vasco"
            imageSrc="/images/team2.jpg"
            emailLink="H8lXt@example.com"
            linkedinLink="https://www.linkedin.com/in/vasco-oliveira-/"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="CEO"
            name="Vasco"
            imageSrc="/images/team3.jpg"
            emailLink="H8lXt@example.com"
            linkedinLink="https://www.linkedin.com/in/vasco-oliveira-/"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="CEO"
            name="Vasco"
            imageSrc="/images/team4.jpg"
            emailLink="H8lXt@example.com"
            linkedinLink="https://www.linkedin.com/in/vasco-oliveira-/"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="CEO"
            name="Vasco"
            imageSrc="/images/team5.jpg"
            emailLink="H8lXt@example.com"
            linkedinLink="https://www.linkedin.com/in/vasco-oliveira-/"
            bgColor="bg-[#009AEE]"
          />
        </div>
      </div>
    </section>
  );
}

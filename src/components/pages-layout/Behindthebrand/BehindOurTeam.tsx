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
            name="Andrei Popescu"
            imageSrc="/images/team1.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Co-Founder"
            name="Luka Jovanović"
            imageSrc="/images/team2.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Project Manager"
            name="Ivana Radić"
            imageSrc="/images/team3.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Frontend Developer"
            name="Matteo Borg"
            imageSrc="/images/team4.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="UI/UX Designer"
            name="Stefan Ionescu"
            imageSrc="/images/team5.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#009AEE]"
          />
          <TeamCard
            title="Backend Developer"
            name="Marko Petrović"
            imageSrc="/images/team6.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Content Manager"
            name="Ivan Kovačević"
            imageSrc="/images/team7.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#FFEA9A]"
          />
          <TeamCard
            title="Graphic Designer"
            name="Emma Camilleri"
            imageSrc="/images/team8.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#9CC8C0]"
          />
          <TeamCard
            title="Director of Marketing"
            name="Elena Marinescu"
            imageSrc="/images/team9.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#D388BE]"
          />
          <TeamCard
            title="Graphic Designer"
            name="Ana Stojanović"
            imageSrc="/images/team10.jpg"
            emailLink="H8lXt@example.com"
            bgColor="bg-[#D388BE]"
          />
        </div>
      </div>
    </section>
  );
}

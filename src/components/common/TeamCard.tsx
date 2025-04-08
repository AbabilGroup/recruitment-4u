// components/TeamCard.tsx
import Image from "next/image";
import { FC } from "react";
import { cn } from "@/lib/utils";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  title: string;
  imageSrc: string;
  emailLink?: string;
  linkedinLink?: string;
  bgColor?: string;
}

const TeamCard: FC<TeamCardProps> = ({
  name,
  title,
  imageSrc,
  emailLink,
  linkedinLink,
  bgColor,
}) => {
  return (
    <div className="w-[200px] max-h-[280px] rounded-xl overflow-hidden shadow-md bg-white">
      {/* Image */}
      <div className="w-full h-[220px] relative">
        <Image
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
      </div>

      {/* Info */}
      <div
        className={cn(
          "p-4 mt-[-50px] rounded-tr-[50px] h-[100px] relative",
          bgColor
        )}>
        <h3 className="font-bold text-lg text-black">{name}</h3>
        <p className="text-sm text-gray-800">{title}</p>

        {/* Icons */}
        <div className="absolute bottom-4 right-4 flex gap-2 text-black">
          {emailLink && (
            <a href={`mailto:${emailLink}`}>
              <FaEnvelope className="hover:text-gray-700" />
            </a>
          )}
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-gray-700" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

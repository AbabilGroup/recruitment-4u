import { FC } from "react";

interface TeamCardProps {
  name: string;
  title: string;
  description?: string;
  emailLink?: string;
  bgColor?: string;
}

const TeamCard: FC<TeamCardProps> = ({
  name,
  title,
  description,
  emailLink,
  bgColor = "bg-blue-500",
}) => {
  return (
    <div
      className={`w-[200px] h-[240px] ${bgColor} text-white rounded-[30px] flex flex-col justify-between  p-5`}>
      <div>
        <h3 className="text-xl font-bold leading-tight">{name}</h3>
        <p className="text-md mt-1">({title})</p>
      </div>

      {description && (
        <div className="text-sm mt-5">
          {description.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}

      <div className="mt-auto text-base font-semibold">
        <a
          href={emailLink ? `mailto:${emailLink}` : "#"}
          className="inline-flex items-center gap-1 hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  );
};

export default TeamCard;

"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "hr", name: "Hrvatski", flag: "https://flagcdn.com/w20/hr.png" },
  { code: "ro", name: "Română", flag: "https://flagcdn.com/w20/ro.png" },
  { code: "sr", name: "Српски", flag: "https://flagcdn.com/w20/rs.png" },
  { code: "bs", name: "Bosanski", flag: "https://flagcdn.com/w20/ba.png" },
  { code: "sl", name: "Slovenščina", flag: "https://flagcdn.com/w20/si.png" },
  { code: "sk", name: "Slovenčina", flag: "https://flagcdn.com/w20/sk.png" },
] as const;

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Get the current language from the URL
  const currentLang = pathname.split("/")[1] as
    | "en"
    | "hr"
    | "ro"
    | "sr"
    | "bs"
    | "sl"
    | "sk";
  const activeLang =
    languages.find((l) => l.code === currentLang) || languages[0];

  const handleLanguageChange = (lang: (typeof languages)[number]["code"]) => {
    if (lang === currentLang) return; // Don't do anything if same language

    // Get the current path without the language prefix
    const pathWithoutLang = pathname.replace(/^\/[a-z]{2}/, "") || "/";

    // Create the new path
    const newPath = `/${lang}${pathWithoutLang}`;

    // Use push instead of replace to maintain history
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center gap-2 bg-white text-primary px-3 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition">
          <Image
            src={activeLang.flag}
            alt={`${activeLang.name} flag`}
            width={20}
            height={16}
            className="object-cover rounded-sm"
          />
          <span>{activeLang.name}</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[150px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              lang.code === currentLang && "opacity-50 cursor-not-allowed"
            )}
            disabled={lang.code === currentLang}>
            <Image
              src={lang.flag}
              alt={`${lang.name} flag`}
              width={20}
              height={16}
              className="object-cover rounded-sm"
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;

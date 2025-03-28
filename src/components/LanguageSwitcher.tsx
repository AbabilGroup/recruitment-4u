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

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w20/gb.png" },
  { code: "fr", name: "Français", flag: "https://flagcdn.com/w20/fr.png" },
  { code: "hr", name: "Hrvatski", flag: "https://flagcdn.com/w20/hr.png" },
  { code: "de", name: "Deutsch", flag: "https://flagcdn.com/w20/de.png" },
] as const;

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (lang: "en" | "fr" | "hr" | "de") => {
    router.push(`/${lang}${pathname.replace(/^\/(en|fr|hr|de)/, "") || "/"}`);
  };

  // Get the current language from the URL
  const currentLang = pathname.split("/")[1] as "en" | "fr" | "hr" | "de";
  const activeLang =
    languages.find((l) => l.code === currentLang) || languages[0];

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
            className="flex items-center gap-2 cursor-pointer">
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

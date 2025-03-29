import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "hr", "ro", "sr", "bs", "mt", "sl", "sk"],
  // Used when no locale matches
  defaultLocale: "en",
});

import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "hr", "ro", "sr", "bg", "bs", "sl", "sk"],
  // Used when no locale matches
  defaultLocale: "en",
});

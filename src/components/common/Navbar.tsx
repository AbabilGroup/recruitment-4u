"use client";
import { Link } from "@/i18n/navigation";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, ChevronDown } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const isPathActive = (pathname: string, href: string, locale: string) => {
  const cleanPathname = pathname
    .replace(new RegExp(`^/${locale}`), "")
    .replace(/\/$/, "");
  const cleanHref = href.replace(/\/$/, "");

  if (href === "/") {
    return cleanPathname === "" || cleanPathname === "/";
  }

  return cleanPathname.startsWith(cleanHref);
};

const Navbar = () => {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll behavior logic remains the same
  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0 || currentScrollY < lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    let timeoutId: NodeJS.Timeout;
    const throttledControlNavbar = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        controlNavbar();
        timeoutId = undefined as unknown as NodeJS.Timeout;
      }, 50);
    };

    window.addEventListener("scroll", throttledControlNavbar);
    return () => {
      window.removeEventListener("scroll", throttledControlNavbar);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("forCompanies"), href: "/for-companies" },
    {
      label: t("solutions"),
      href: "/solutions",
      dropdown: [
        {
          label: t("Navigating Immigration Laws"),
          href: "/navigating-immigration-laws",
        },
        // ... other dropdown items
      ],
    },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 bg-primary text-white backdrop-blur-sm shadow-sm",
        !isVisible && "-translate-y-full",
        "transition-transform duration-300"
      )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link href="/" className="font-bold flex items-center">
            <div className="relative w-[100px] h-[40px] sm:w-[120px] sm:h-[40px] md:w-[180px] md:h-[80px] lg:w-[220px] lg:h-[100px]">
              <Image
                src="logo/Recruitment4u.svg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => {
              const isActive = isPathActive(pathname, item.href, locale);

              return item.dropdown ? (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}>
                      <button
                        className={cn(
                          "relative text-base lg:text-lg font-semibold transition-all duration-200 flex items-center gap-1",
                          isActive
                            ? "text-primary-secondary"
                            : "text-white hover:text-primary-secondary"
                        )}>
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </motion.div>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px] bg-white shadow-lg rounded-md">
                    {item.dropdown.map((subItem) => {
                      const isSubActive = isPathActive(
                        pathname,
                        subItem.href,
                        locale
                      );
                      return (
                        <DropdownMenuItem key={subItem.label}>
                          <Link
                            href={subItem.href}
                            className={cn(
                              "block px-4 py-2 w-full",
                              isSubActive
                                ? "text-primary-secondary font-medium"
                                : "text-primary hover:bg-gray-100"
                            )}>
                            {subItem.label}
                          </Link>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <motion.div
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "text-base lg:text-lg font-semibold transition-all duration-200 relative",
                      "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full",
                      "after:origin-left after:scale-x-0 after:bg-primary-secondary",
                      "after:transition-transform after:duration-300 hover:after:scale-x-100",
                      isActive
                        ? "text-primary-secondary after:scale-x-100"
                        : "text-white hover:text-primary-secondary"
                    )}>
                    {item.label}
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  "bg-primary-secondary text-primary px-4 lg:px-6 py-2 rounded-md text-sm lg:text-base",
                  "hover:bg-primary-secondary/90 transition-colors"
                )}>
                {t("navButton")}
              </motion.button>
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="p-2 hover:bg-white/10">
                  <Menu className="h-7 w-7 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex flex-col h-full w-[280px] sm:w-[350px] bg-primary text-white">
                <VisuallyHidden>
                  <SheetTitle>Navigation Menu</SheetTitle>
                </VisuallyHidden>
                <div className="flex-1 overflow-y-auto">
                  <div className="flex justify-center mt-8 mb-6">
                    <div className="relative w-[120px] h-[40px]">
                      <Image
                        src="logo/Recruitment4u.svg"
                        alt="Logo"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  </div>

                  <SheetDescription className="text-sm text-center text-white mb-8">
                    We connect the right workers with the right employers.
                  </SheetDescription>

                  <div className="flex flex-col gap-6">
                    {navItems.map((item) => {
                      const isActive = isPathActive(
                        pathname,
                        item.href,
                        locale
                      );
                      return item.dropdown ? (
                        <DropdownMenu key={item.label}>
                          <DropdownMenuTrigger asChild>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className={cn(
                                "text-base font-semibold transition-all duration-200 flex items-center gap-1",
                                isActive
                                  ? "text-primary-secondary"
                                  : "text-white hover:text-primary-secondary"
                              )}>
                              {item.label}
                              <ChevronDown className="h-4 w-4" />
                            </motion.button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-[200px] bg-white shadow-lg rounded-md">
                            {item.dropdown.map((subItem) => {
                              const isSubActive = isPathActive(
                                pathname,
                                subItem.href,
                                locale
                              );
                              return (
                                <DropdownMenuItem key={subItem.label}>
                                  <Link
                                    href={subItem.href}
                                    className={cn(
                                      "block px-4 py-2 w-full",
                                      isSubActive
                                        ? "text-primary-secondary font-medium"
                                        : "text-primary hover:bg-gray-100"
                                    )}>
                                    {subItem.label}
                                  </Link>
                                </DropdownMenuItem>
                              );
                            })}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={cn(
                            "text-base font-semibold transition-all duration-200",
                            "relative w-fit after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-full",
                            "after:origin-left after:scale-x-0 after:bg-primary-secondary",
                            "after:transition-transform after:duration-300 hover:after:scale-x-100",
                            isActive
                              ? "text-primary-secondary after:scale-x-100"
                              : "text-white hover:text-primary-secondary"
                          )}>
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className="sticky bottom-0 pb-6 pt-4 bg-primary mt-auto border-t border-white/10">
                  <div className="flex flex-col gap-3">
                    <LanguageSwitcher />
                    <Link href="/contact" className="w-full">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "bg-primary-secondary text-primary px-6 py-2 rounded-md w-full",
                          "hover:bg-primary-secondary/90 transition-colors"
                        )}>
                        {t("navButton")}
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

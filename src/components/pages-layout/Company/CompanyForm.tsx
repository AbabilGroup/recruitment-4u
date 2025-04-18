"use client";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCirclePlus,
  PhoneCall,
} from "lucide-react";
import ContactCard from "@/components/common/ContactCard";

type FormData = {
  company: string;
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function CompanyForm() {
  const [formData, setFormData] = useState<FormData>({
    company: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitted(true); // Set form submission state
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          formData: formData,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        setIsFormSubmitted(false); // Reset form submission state on error
        toast.error(data.error || "Failed to submit form");
        throw new Error(data.error || "Failed to submit form");
      }

      // Reset form on success
      setFormData({
        company: "",
        email: "",
        name: "",
        phone: "",
        message: "",
      });
      setIsFormSubmitted(false); // Reset form submission state
      toast.success("submitted successfully");
    } catch (error) {
      console.error("Submission error:", error);
      setIsFormSubmitted(false); // Reset form submission state on error
      toast.error("Failed to submit form");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div
        className={cn(
          "w-screen bg-primary py-8 sm:py-10 lg:py-12",
          "left-[50%] right-[50%] mx-[-50vw]",
          "relative -mt-24 px-0",
          "overflow-hidden"
        )}>
        <motion.div
          className="container mx-auto px-4 sm:px-6 pb-8 sm:pb-10 lg:pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-white pt-16 sm:pt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}>
            Your Partner
          </motion.h1>
          <motion.div
            className="w-24 sm:w-32 h-1 bg-white/20 mx-auto rounded-full mt-4 mb-6 sm:mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "8rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-5 max-xl:col-span-12">
            <div className=" border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 bg-white ">
              <h5 className="text-2xl sm:text-3xl font-bold text-black">
                Let’s Connect
              </h5>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Mobile"
                  text="+1 (123) 456-7890"
                  icon={<Phone className="w-10 h-10 text-primary" />}
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Office Phone"
                  text="+1 (123) 456-7890"
                  icon={<PhoneCall className="w-10 h-10 text-primary" />}
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Whats App"
                  text="+1 (123) 456-7890"
                  icon={
                    <MessageCirclePlus className="w-10 h-10 text-primary" />
                  }
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="E-mail"
                  text="mHd8w@example.com"
                  icon={<Mail className="w-10 h-10 text-primary" />}
                />
              </div>
              <div className="mt-6 sm:mt-8 space-y-4">
                <ContactCard
                  label="Head Office"
                  text="The One Tower, Fl.24, DUBAI, UAE"
                  icon={<MapPin className="w-10 h-10 text-primary" />}
                />
              </div>
            </div>
          </div>
          <div className="col-span-7 max-xl:col-span-12">
            <motion.div
              className="max-w-4xl mx-auto bg-white rounded-xl border border-gray-200 overflow-hidden "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-6 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3">
                    Request A Business Consultation
                  </h2>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6">
                  <div className="space-y-4">
                    {[
                      { id: "company", label: "Company Name", type: "text" },
                      { id: "name", label: "Name & SurName", type: "text" },
                      { id: "email", label: "Email", type: "email" },
                      {
                        id: "phone",
                        label: "Country Code with Phone Number",
                        type: "tel",
                      },
                    ].map((field) => (
                      <div key={field.id}>
                        <label
                          htmlFor={field.id}
                          className="block text-sm font-medium text-black mb-1.5 sm:mb-2">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={String(
                            formData[field.id as keyof typeof formData]
                          )}
                          onChange={handleChange}
                          className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm sm:text-base text-black"
                          required
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        htmlFor="note"
                        className="block text-sm font-medium text-black mb-1.5 sm:mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="note"
                        name="note"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 text-sm sm:text-base text-black"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}>
                    {isFormSubmitted ? "Submitting..." : "Send"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

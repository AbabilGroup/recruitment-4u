"use client";
// import { toast } from "sonner";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageCirclePlus,
  PhoneCall,
} from "lucide-react";
import { motion } from "framer-motion";
import ContactCard from "@/components/common/ContactCard";
import { toast } from "sonner";
export const ContactForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsFormSubmitted(true);
  // };

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

        throw new Error(data.error || "Failed to submit form");
      }

      // Reset form on success
      setFormData({
        company: "",
        name: "",
        email: "",
        phone: "",
        country: "",
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
    const { name, value, type, checked } = e.target as HTMLInputElement;
    // Update form data based on input type
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="w-full py-6 sm:py-8 lg:py-10 relative">
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
                  text="Str. Sg. Constantin Moise 5 D BUCURESTI, Loc. SECTORUL 6"
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
                    Consult. Plan. Win.
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
                        type: "text",
                      },
                      { id: "country", label: "Country Name", type: "text" },
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
                        htmlFor="message"
                        className="block text-sm font-medium text-black mb-1.5 sm:mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
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
    </div>
  );
};

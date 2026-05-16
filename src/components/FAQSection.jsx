import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import SplitText from "../UI/SplitText";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router";

const faqs = [
  {
    question: "How long does the publishing process take?",
    answer: "The timeline varies based on the services required, but typically a full concept-to-shelf journey takes between 4 to 6 months, ensuring every detail from editing to cover design is perfect."
  },
  {
    question: "Do I retain the full rights to my book?",
    answer: "Absolutely. At SeaWings, we believe your story belongs to you. You retain 100% of your publishing rights and royalties. We are simply the wind beneath your wings to help you fly."
  },
  {
    question: "Can you help with marketing and global distribution?",
    answer: "Yes, we help books soar across global skies. We handle distribution to major retailers like Amazon, Barnes & Noble, and IngramSpark, alongside targeted marketing strategies."
  },
  {
    question: "What genres do you specialize in?",
    answer: "We work with everything from Biographies and Fiction to Children's books and Biblical texts. Our team of expert writers and editors are versatile across all literary landscapes."
  }
];

const FAQItem = ({ faq, isOpen, toggle, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`mb-4 overflow-hidden rounded-[1.5rem] border transition-all duration-300 ${
        isOpen ? "border-blue-500 bg-blue-50/50 shadow-lg" : "border-gray-200 bg-white"
      }`}
    >
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className={`text-lg font-semibold transition-colors ${isOpen ? "text-blue-600" : "text-gray-900"}`}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`rounded-full p-1 ${isOpen ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"}`}
        >
          <ChevronDownIcon className="h-5 w-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-blue-100 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative w-full bg-white px-4 overflow-hidden">
      
      {/* Background Decorative Element (Subtle Watermark) */}
      

      <div className="mx-auto max-w-6xl relative z-10">
        
        {/* Header Section */}
        

        {/* FAQ List */}
        <div className="mx-auto max-w-4xl">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              faq={faq}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            Still have questions? {" "}
            <Link to="" className="font-bold text-blue-500 hover:underline">
              Contact our flight crew today.
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
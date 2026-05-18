import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import SplitText from "../UI/SplitText";
import { ChevronDownIcon } from "lucide-react";
import { Link } from "react-router";

const faqs = [
  {
    question: "What services does Seawings Publications offer?",
    answer: "We provide a complete, end-to-end publishing solution — from ghostwriting and manuscript development to editing, cover design, publishing, and marketing. Our goal is to guide you through every step and transform your idea into a professionally published book."
  },
  {
    question: "Do I keep full ownership of my book?",
    answer: "Yes, you retain 100% ownership and rights to your work. We simply help you prepare, publish, and distribute your book while ensuring you stay in full control of your content and royalties."
  },
  {
    question: "Where will my book be published and distributed?",
    answer: "Your book can be distributed globally across major platforms like Amazon, Barnes & Noble, IngramSpark, Kobo, and Apple Books, ensuring maximum reach to readers worldwide."
  },
  {
    question: "Can you help if I only have an idea and not a finished manuscript?",
    answer: "Absolutely. Our ghostwriting and manuscript development services help turn your ideas into a complete, well-structured book while keeping your vision and voice intact."
  },
  {
    question: "How long does the publishing process take?",
    answer: "The timeline depends on your project scope (writing, editing, design, etc.), but typically it can take a few weeks to a few months. Our team ensures a smooth and efficient process while maintaining high-quality standards."
  },
  {
    question: "Do you help with marketing and promoting my book?",
    answer: "Yes, we offer dedicated marketing and PR services including social media campaigns, branding, and promotional strategies to help your book reach the right audience and gain visibility."
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
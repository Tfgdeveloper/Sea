import { useState } from "react";
import { motion } from "framer-motion";
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import SEO from "../../components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const birdVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.2, type: "spring", bounce: 0.4 } 
    },
    floating: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Time between each child animation
    }
  }
};


const Return = () => {
  return (
    <div>
      <SEO
        title="Return & Refund Policy | Seawings Publications" 
        description="Read Seawings Publications return and refund policy for books and publishing services, including eligibility, process, and conditions."
        keyword="Seawings Publications return policy"
        link="https://www.seawingspublications.com/return"
        
       ></SEO>

    <Header />
    {/* Hero */}
    <section className="relative w-full min-h-[80vh] md:min-h-[60vh] bg-black z-10 flex flex-col items-center justify-center">
                <motion.img 
                src='images/bird1.webp' 
                alt="bird"
                className='z-50 absolute right-0 -bottom-22 w-32 md:w-40'
                variants={birdVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.3 }}
              />
              <motion.img 
                src='images/bird2.webp' 
                alt="bird"
                className='z-50 absolute left-0 -bottom-0 w-32 md:w-40'
                variants={birdVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.3 }}
              />
              {/* Background Video - Fade in slowly */}
              <motion.img
                
                src="/images/hero.webp"
                alt="bg"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              
              <div className='inset-0 absolute h-full bg-gradient-to-b from-white to-transparent'></div>
        
              <div className="max-w-[1600px] mx-auto flex flex-col items-center justify-center px-4 md:px-8 relative z-20">
                
                {/* Left Side: Content */}
                <motion.div 
                  className=' text-center flex flex-col items-center justify-center'
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-[28px] md:text-[72px] font-bold [word-spacing:-14px] leading-tight text-black  "
                  >
                    Refund Policy
                  </motion.h1>
                </motion.div>
                
        
              </div>
    </section>
        
    <section className="  relative w-full bg-white overflow-hidden z-0">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 overflow-hidden">
        
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative z-20 flex flex-col gap-4"
                  >
        
                    {/* Header */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Refund Policy – Seawings Publications LLC
      </h2>

      <p className="text-black text-[18px]">
        Please read and understand the following refund policy carefully to
        avoid any misunderstandings regarding refunds and cancellations. If you have any questions regarding our refund terms, you may contact
        our customer support team for further clarification before placing
        your order. Refunds are only offered in special cases and under the conditions
        outlined below. If approved, all purchases above $15,000 will be refunded in equal
        monthly installments of $5,000.
      </p>

    </div>

    {/* Full Refund */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Full Refund
      </h2>

      <p className="text-black text-[18px]">
        At Seawings Publications LLC, client satisfaction is our priority.
        If your project has already started and you wish to stop the service
        or request a refund, you may contact our support team to discuss the
        current project status and available options.
      </p>

      <p className="text-black text-[18px]">
        Our team will review the progress of your work and guide you through
        the most suitable resolution process.
      </p>
    </div>

    {/* Change of Mind */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Change of Mind
      </h2>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>
          If you decide not to continue your project after placing an order,
          you may request a refund within the first hour of purchase.
        </li>

        <li>
          In all other cases, a 60% processing fee will apply.
        </li>
      </ul>
    </div>

    {/* Incompetent Delivery */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Incompetent Delivery
      </h2>

      <p className="text-black text-[18px]">
        Customers may request a refund only after all available revision and
        correction options have been exhausted.
      </p>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>
          If the delivered work does not meet the documented project
          requirements provided by the customer.
        </li>

        <li>
          We offer unlimited revisions to ensure complete customer
          satisfaction.
        </li>

        <li>
          Our team may re-assign, revise, or completely re-write the work
          when necessary.
        </li>

        <li>
          Customers may also reserve FREE pages of the same value for future
          use.
        </li>
      </ul>

      <p className="text-black text-[18px]">
        If we are still unable to deliver the requested work, a refund may
        be processed through mutual agreement on a reasonable percentage,
        only in cases where the delivery is completely unsatisfactory.
      </p>
    </div>

    {/* Refund Time Frame */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Refund Time Frame
      </h2>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>
          Refund requests must be submitted within 30 days of delivery.
        </li>

        <li>
          Refund claims made after the specified time period will not be
          entertained.
        </li>

        <li>
          Customers are advised to note refund deadlines at the time of
          placing an order.
        </li>
      </ul>
    </div>

    {/* Non Refund Cases */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Cases Where Refunds Will Not Be Issued
      </h2>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>
          Delays caused by minor technical issues such as grammatical errors,
          typing mistakes, word count adjustments, or missing references may
          only qualify for partial refunds or future discounts.
        </li>

        <li>
          The company will not be responsible for delays caused by the
          client.
        </li>

        <li>
          Refunds will not be issued solely on the basis of dissatisfaction
          with writing style.
        </li>

        <li>
          For book marketing or publishing projects, refunds will not be
          issued if the client fails to provide access to required platforms
          such as Amazon, Barnes & Noble, or relevant social media accounts
          needed for campaign execution.
        </li>
      </ul>
    </div>
                    
                    
        
                  </motion.div>
                  
                </div>
    </section>
    <Footer/>
    </div>
  )
}

export default Return

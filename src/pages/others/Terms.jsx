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


const Terms = () => {
  return (
    <div>
      <SEO
        title="Terms & Conditions | Seawings Publications Policies" 
        description="Read the terms and conditions of Seawings Publications including usage rules, service policies, legal rights, and author responsibilities."
        keyword="Seawings Publications terms and conditions"
        link="https://www.seawingspublications.com/terms"
        
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
                    Terms And Conditions
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
        
                   {/* Intro */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Terms & Conditions
      </h2>

      <p className="text-black text-[18px]">
        When you complete an order placement with us i.e. you make the payment,
        then you are considered to have read, understood, and agreed to the
        terms and conditions listed on this page. These terms are a legal
        contract between the client and Seawings Publications LLC. By agreeing
        to order and use the services from Seawings Publications LLC you are
        deemed to be bound by the terms stated below.
      </p>
    </div>

    {/* Original Content */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        We Deliver Original Content Only
      </h2>

      <p className="text-black text-[18px]">
        We guarantee plagiarism-free content. To ensure originality, we provide
        a Copyscape report. Please note that text contained in images, videos,
        or other non-readable media cannot be scanned by Copyscape. Clients may
        choose additional plagiarism checks independently, as such services are
        not included in our standard pricing.
      </p>
    </div>

    {/* Information Usage */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        How We Use Your Information
      </h2>

      <ul className="space-y-4 list-disc pl-6">
        <li className="text-black text-[18px]">
          To personalize your experience and better respond to your individual
          needs.
        </li>

        <li className="text-black text-[18px]">
          To improve our website offerings based on your feedback and usage.
        </li>

        <li className="text-black text-[18px]">
          To improve customer service and respond effectively to support
          requests.
        </li>

        <li className="text-black text-[18px]">
          To process transactions securely without selling or transferring your
          personal information without consent.
        </li>

        <li className="text-black text-[18px]">
          To send periodic emails regarding updates, inquiries, or requested
          services.
        </li>
      </ul>
    </div>

    {/* Ownership */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        We Deliver Content With Complete Ownership
      </h2>

      <p className="text-black text-[18px]">
        Every completed and paid order becomes your property upon delivery. We
        do not require acknowledgments, credits, or mentions for any work
        delivered. You receive complete ownership rights and may publish or use
        the content as you wish.
      </p>
    </div>

    {/* Security */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        How Do We Protect Your Information?
      </h2>

      <p className="text-black text-[18px]">
        We implement security measures at all levels to maintain the safety of
        your personal information. By using SSL encryption, we ensure the
        confidentiality and protection of all shared data. After transaction
        completion, sensitive information such as credit card details or
        financial data is not stored in our database.
      </p>
    </div>

    {/* Cookies */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Why Do We Use Cookies?
      </h2>

      <p className="text-black text-[18px]">
        We use cookies to track advertisements, analyze website traffic, and
        improve user experience. Third-party service providers may assist in
        understanding visitor behavior, but they are only permitted to use the
        information for analytical purposes.
      </p>
    </div>

    {/* Images */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Our Policy For Using Images
      </h2>

      <p className="text-black text-[18px]">
        We respect copyright laws and do not claim ownership of copyrighted
        images. We may provide recommended image links for inspiration, while
        royalty-free images may be used freely. Any use of copyrighted images
        may require payment or permission from the respective owners.
      </p>
    </div>

    {/* Liability */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        Limitation Of Liability
      </h2>

      <p className="text-black text-[18px]">
        Seawings Publications LLC shall not be held liable for any direct or
        indirect loss resulting from the use of our website, products, or
        services. This includes damages caused by viruses, service interruptions,
        or inability to use our platform.
      </p>
    </div>

    {/* Policy Updates */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        We Update Our Policies
      </h2>

      <p className="text-black text-[18px]">
        This privacy policy may be updated from time to time without prior
        notice. Users are encouraged to review this page periodically to stay
        informed about any policy changes.
      </p>
    </div>
                    
                    
        
                  </motion.div>
                  
                </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Terms

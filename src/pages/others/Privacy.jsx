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

const Privacy = () => {
    
  return (
    <div>
      <SEO
        title="Privacy Policy | Seawings Publications Data Protection" 
        description="Read Seawings Publications privacy policy to understand how we collect, use, and protect your personal data while ensuring full security and compliance."
        keyword="Contact Seawings Publications"
        link="https://www.seawingspublications.com/privacy"
        
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
                    Privacy Policy
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
        Privacy Policy – Seawings Publications LLC
      </h2>

      <p className="text-black text-[18px]">
        Effective Date: 31st March 2026
      </p>

      <p className="text-black text-[18px]">
        Seawings Publications LLC (“we,” “our,” or “us”) values your privacy
        and is committed to protecting the personal information you provide
        when using our website or services.
      </p>
    </div>

    {/* Business Info */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        1. Business Information & Contact
      </h2>

      <div className="space-y-2 text-black/80 text-[18px]">
        <p>
          <span className="font-semibold">Company Name:</span>{" "}
          Seawings Publications LLC
        </p>

        <p>
          <span className="font-semibold">Address:</span>{" "}
          12828 Willow Centre Dr Houston TX 77066
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          info@seawingspublications.com
        </p>

        <p>
          <span className="font-semibold">Phone:</span>{" "}
          (737) 220-1691
        </p>
      </div>
    </div>

    {/* Information Collection */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        2. Information We Collect
      </h2>

      <p className="text-black text-[18px]">
        We collect information from you when you register on our site,
        place an order, subscribe to our newsletter, or submit a contact
        form.
      </p>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>Full name</li>
        <li>Email address</li>
        <li>Mailing address</li>
        <li>Phone number</li>
        <li>Payment information</li>
        <li>Project details and publishing requirements</li>
      </ul>

      <p className="text-black text-[18px]">
        You may also visit our website anonymously without providing personal
        information.
      </p>
    </div>

    {/* Usage */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        3. How We Use Your Information
      </h2>

      <p className="text-black text-[18px]">
        Your information may be used for the following purposes:
      </p>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>
          Personalizing your experience and responding to your needs
        </li>

        <li>
          Improving website functionality through feedback and analytics
        </li>

        <li>
          Providing customer support and responding to service requests
        </li>

        <li>
          Processing transactions securely and efficiently
        </li>

        <li>
          Sending updates, inquiries, and relevant email communication
        </li>
      </ul>

      <p className="text-black text-[18px]">
        We do not sell or rent your personal information to third parties.
      </p>
    </div>

    {/* Security */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        4. Payments & Data Security
      </h2>

      <p className="text-black text-[18px]">
        We implement strong security measures to protect your personal and
        payment information.
      </p>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>
          Payments are processed through secure and trusted gateways
        </li>

        <li>
          Data is protected using SSL (Secure Socket Layer) encryption
        </li>

        <li>
          Sensitive financial information is not stored on our servers
        </li>

        <li>
          Access to personal data is limited to authorized personnel only
        </li>
      </ul>
    </div>

    {/* Cookies */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        5. Cookies & Tracking
      </h2>

      <p className="text-black text-[18px]">
        Our website uses cookies and tracking technologies to improve user
        experience and monitor website performance.
      </p>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>Track website traffic and interactions</li>
        <li>Improve functionality and user tools</li>
        <li>Measure advertising effectiveness</li>
      </ul>

      <p className="text-black text-[18px]">
        We may use third-party services such as Google Analytics, Meta Pixel,
        and email communication platforms for analytics and marketing
        purposes.
      </p>

      <p className="text-black text-[18px]">
        You may disable cookies through your browser settings at any time.
      </p>
    </div>

    {/* Information Sharing */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        6. Information Sharing
      </h2>

      <p className="text-black text-[18px]">
        We do not sell, trade, or transfer personally identifiable
        information to outside parties.
      </p>

      <p className="text-black text-[18px]">
        Information may only be shared with trusted partners who assist us
        in operating our website, processing payments, or providing services.
      </p>

      <p className="text-black text-[18px]">
        We may also disclose information when required by law or to protect
        rights, safety, and property.
      </p>
    </div>

    {/* Third Party Links */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        7. Third-Party Links
      </h2>

      <p className="text-black text-[18px]">
        Our website may include links to third-party websites with
        independent privacy policies.
      </p>

      <p className="text-black text-[18px]">
        We are not responsible for the content, practices, or policies of
        these external websites.
      </p>
    </div>

    {/* Scope */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        8. Online Privacy Policy Scope
      </h2>

      <p className="text-black text-[18px]">
        This Privacy Policy applies only to information collected online
        through our website and does not apply to offline interactions.
      </p>
    </div>

    {/* Rights */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        9. Your Rights
      </h2>

      <p className="text-black text-[18px]">
        You have the right to:
      </p>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>Access the personal information we hold about you</li>
        <li>Request corrections or deletion of your information</li>
        <li>Opt-out of marketing communications</li>
      </ul>

      <p className="text-black text-[18px]">
        To exercise these rights, contact us at:
        info@seawingspublications.com
      </p>
    </div>

    {/* Disclaimer */}
    <div className="space-y-4">
      <h2 className="text-[28px] font-bold [word-spacing:-8px] leading-tight text-black ">
        10. Important Disclaimer
      </h2>

      <p className="text-black text-[18px]">
        Seawings Publications LLC provides publishing and related services;
        however, we do not guarantee publishing success, sales, rankings,
        or financial outcomes.
      </p>

      <ul className="space-y-3 text-black text-[18px] list-disc pl-6">
        <li>Distribution depends on platform approvals</li>
        <li>
          Results may vary based on content quality, audience, and market
          conditions
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

export default Privacy

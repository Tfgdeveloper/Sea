import { useState } from "react";
import { motion } from "framer-motion";
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import Popup from '../../components/Popup';
import GradientButton from '../../UI/GradientButton'
import { SecondaryButton } from '../../UI/SecondaryButton'
import ScrollReveal from "../../UI/ScrollReveal";
import ImageMarquee from "../../components/ImageMarquee";
import CountUp from "../../UI/CountUp";
import Card from "../../UI/Card";
import TestimonialSection from "../../components/TestimonialSection";
import { Link } from "react-router";

import FAQSection from '../../components/FAQSection';
import TabsSection from "../../components/TabsSection";
import ContactForm from "../../components/ContactForm";
import { Mail, Phone } from "lucide-react";
import SEO from "../../components/SEO";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const itemVariants2 = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each list item
      },
    },
  };


const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", bounce: 0.3 } }
};


const Contact = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
      <SEO
        title="Contact Seawings Publications | Get in Touch Today" 
        description="Contact Seawings Publications for book publishing, editing, design & marketing services. Reach out to start your publishing journey today."
        keyword="Contact Seawings Publications"
        link="https://www.seawingspublications.com/contact"
        
       ></SEO>
        <Header />
        {/* Hero */}
        <section className="relative w-full min-h-[100vh] md:min-h-[80vh] bg-black z-10 flex flex-col items-center justify-center">
                <motion.img 
                src='images/bird1.webp' 
                className='z-50 absolute right-0 -bottom-15 md:-bottom-22 w-32 md:w-40'
                variants={birdVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.3 }}
              />
              <motion.img 
                src='images/bird2.webp' 
                className='z-50 absolute left-0 -bottom-0 w-32 md:w-40'
                variants={birdVariants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.3 }}
              />
              {/* Background Video - Fade in slowly */}
              <motion.img
                
                src="/images/hero.webp"
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
                    className="text-[36px] md:text-[72px] font-bold [word-spacing:-14px] leading-tight text-black drop-shadow-sm "
                  >
                    Contact Us
                  </motion.h1>
                  
        
                  <motion.p 
                    variants={fadeInUp}
                    className="mt-4 max-w-2xl text-black text-[18px]"
                  >
                    Let’s bring your story to life and help it reach the sky it deserves. Whether you’re ready to publish, looking for expert guidance, or just exploring your options, our team at Seawings Publications is here to help. Reach out to us today, your publishing journey begins with a single message.
                  </motion.p>
        
                  <motion.div 
                    variants={fadeInUp}
                    className='mt-8 flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'
                  >
                    <GradientButton 
                    onClick={openPopup}
                    />
                    <SecondaryButton />
                  </motion.div>
                </motion.div>
        
                {/* Right Side: Form Card */}
                
        
              </div>
        </section>

         {/* About*/}
        <section className="relative w-full bg-white overflow-hidden z-0">
          {/* Animated Bird Image */}
          

          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 items-center justify-between px-4 md:px-8 py-16 relative">
            
            {/* Left Side Image */}
            <motion.div 
              className='md:w-1/2 z-20 '
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                variants={itemVariants}
              className='md:w-1/2 z-20 '
                className="text-center md:text-left  text-[24px] md:text-[36px] font-bold [word-spacing:-14px] leading-tight text-black drop-shadow-sm"
              >
                Your Story Deserves to Soar.

              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-center md:text-left mt-4 max-w-2xl text-black/80 text-[16px]"
              >
                Every great book begins with a simple conversation. Tell us a little about your project, your goals, or the story you’ve always wanted to share. We’ll connect you with the right publishing experts to guide your next step with clarity and care.
              </motion.p>
              <motion.div 
              className='flex flex-col md:flex-row mt-4 gap-4'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="md:w-1/2 bg-[#13B3D3]/20 flex flex-col px-6 py-3 rounded-2xl shadow-lg justify-start items-start gap-2" >  
                <div className="w-auto flex bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] p-2 rounded-full">
                  <Phone className="text-white"/>

                </div>
                <h2 className="text-center md:text-left  text-[20px] md:text-[24px] font-bold [word-spacing:-14px] leading-tight text-black drop-shadow-sm">Phone</h2>
                <p className="text-center md:text-left -mt-3 max-w-2xl text-black/80 text-[16px]">(737) 220-1691</p>
              </div>
              <div className="md:w-1/2 bg-[#13B3D3]/20 flex flex-col px-6 py-3 rounded-2xl shadow-lg justify-start items-start gap-2" >  
                <div className="w-auto flex bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] p-2 rounded-full">
                  <Mail className="text-white"/>

                </div>
                <h2 className="text-center md:text-left  text-[20px] md:text-[24px] font-bold [word-spacing:-14px] leading-tight text-black drop-shadow-sm">Email</h2>
                <p className="text-center md:text-left -mt-3 max-w-2xl text-black/80 text-[16px]">info@seawingspublications.com</p>
              </div>

            </motion.div>
            <motion.div 
              className='flex flex-col md:flex-row mt-4 gap-4'
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-full bg-[#13B3D3]/20 flex flex-col px-6 py-3 rounded-2xl shadow-lg justify-start items-start gap-2" >  
                <div className="w-auto flex bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] p-2 rounded-full">
                  <Phone className="text-white"/>

                </div>
                <h2 className="text-center md:text-left  text-[20px] md:text-[24px] font-bold text-black drop-shadow-sm">Office Address</h2>
                <p className="text-center md:text-left max-w-2xl -mt-3 text-black/80 text-[16px]">12828 Willow Centre Dr Houston TX 77066</p>
              </div>
              

            </motion.div>
              {/* Animated List Items */}
              

              {/* Animated Buttons */}
            
            </motion.div>

            <motion.div 
              className='md:w-1/2 z-20 flex justify-end'
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div 
                whileHover={{ scale: 1.02 }} // Subtle hover effect
                className='w-full md:w-[80%] bg-white/25 backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl'
              >
                <h2 className="text-[24px] font-semibold text-center text-black drop-shadow-sm mb-4">
                  Send Us A Message

                </h2>
                

                <div className='px-8'>
                  <ContactForm />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side Content */}
            
          </div>
        </section>
            
        
       
        
        

        <Footer/>
        {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          closePopup={closePopup}
        />
        )} 
      
    </div>
  )
}

export default Contact

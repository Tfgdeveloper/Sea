import { useState } from "react";
import { motion } from "framer-motion";
import Header from '../../components/Header'
import Footer from '../../components/Footer';
import TextType from "../../UI/TextType";
import GradientButton from "../../UI/GradientButton";
import { useNavigate } from "react-router";
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


const Thankyou = () => {
    const navigate = useNavigate();
  return (
    <div>

      <SEO
        title="Thankyou | Seawings Publications" 
        keyword="Thankyou"
         >
        <script>
          {`
            gtag('event', 'conversion', {
              'send_to': 'AW-18088082704/EROgCJD9sp4cEJD6iLFD',
              'value': 1.0,
              'currency': 'USD'
            });
          `}
        </script>
       </SEO>


    <Header />
    {/* Hero */}
    <section className="relative w-full min-h-[80vh] bg-black z-10 flex flex-col items-center justify-center mb-30">
                <motion.img 
                src='images/bird1.webp' 
                className='z-50 absolute right-0 -bottom-22 w-32 md:w-40'
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
                  <TextType
                    text={["Thank", "You"]}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor
                    cursorCharacter="_"
                    className="text-[72px] font-semibold"
                    deletingSpeed={50}
                    
                    cursorBlinkDuration={0.5}
                    />

                    <motion.p 
                    variants={fadeInUp}
                    className=" max-w-2xl text-black text-[18px] mb-4"   >
                    Your message has been sent successfully. We'll get back to you soon!
                    </motion.p>

                    <GradientButton 
                    text="Back To Home" 
                    onClick={() => navigate("/")}
                    />

                </motion.div>
                
        
              </div>
    </section>
        
   
    <Footer/>
    </div>
  )
}

export default Thankyou

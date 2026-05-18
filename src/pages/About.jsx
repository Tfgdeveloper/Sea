import { useState } from "react";
import { motion } from "framer-motion";
import Header from '../components/Header'
import Footer from '../components/Footer';
import Popup from '../components/Popup';
import GradientButton from '../UI/GradientButton'
import { SecondaryButton } from '../UI/SecondaryButton'
import ScrollReveal from "../UI/ScrollReveal";
import ImageMarquee from "../components/ImageMarquee";
import CountUp from "../UI/CountUp";
import Card from "../UI/Card";
import TestimonialSection from "../components/TestimonialSection";


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

const Chooseus = [
  {
    image: "images/Publishing-&-Distribution.gif",
    title: "Quality Work",
    
  },
  {
    image: "images/Ghostwriting-&-Manuscript.gif",
    title: "Timely Delivery",
    
  },
  {
    image: "images/Cover-Design-&-Illustration.gif",
    title: "Customer Satisfaction",
    
  },
  {
    image: "images/Audiobook.gif",
    title: "100% Ownership",
    
  },
  
];

const About = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => setIsPopupOpen(true);
    const closePopup = () => setIsPopupOpen(false);
  return (
    <div>
        <Header />
        {/* Hero */}
        <section className="relative w-full min-h-[100vh] md:min-h-[80vh] bg-black z-10 flex flex-col items-center justify-center">
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
                  <motion.h1 
                    variants={fadeInUp}
                    className="text-[36px] md:text-[72px] font-semibold [word-spacing:-8px] leading-tight text-black drop-shadow-sm "
                  >
                    About Us
                  </motion.h1>
                  
        
                  <motion.p 
                    variants={fadeInUp}
                    className="mt-4 max-w-2xl text-black text-[18px]"
                  >
                    From concept to creation, Seawings Publications guides authors through a seamless publishing journey built on trust, craftsmanship, and imagination. Every story has a sky it’s meant to reach and Seawings Publications helps it get there.
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
        {/* Services */}
        <section className="  relative w-full bg-white overflow-hidden z-0">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 pt-20 pb-6 overflow-hidden">
        
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative z-20"
                  >
        
                    {/* Heading */}
                    <motion.h2
                      variants={itemVariants2}
                      className="gradient-text text-[34px] md:text-[48px] font-semibold [word-spacing:-8px] text-center leading-tight text-black"
                    >
                      One-Stop Solution for All Your Publishing Needs
                    </motion.h2>
        
                    <ScrollReveal
                    baseOpacity={0.1}
                    enableBlur
                    baseRotation={0}
                    blurStrength={10}
                    
                    >
                    At Seawings Publications, we believe every story deserves to take flight. Our mission is to help authors transform their ideas into beautifully crafted books through professional editing, design, publishing, and global distribution. With creativity and care, we make the publishing process seamless, turning inspiration into a finished book ready to reach readers worldwide. We work closely with every author to ensure their vision shines on every page. From layout and cover design to marketing and platform distribution across Amazon, IngramSpark, Barnes & Noble, Kobo, and Apple Books, Seawings Publications is your trusted partner in every step of the journey. Your story has wings, we help it find the sky it was meant for.
                    </ScrollReveal>
        
                    {/* Cards */}
                    
                    
        
                  </motion.div>
                </div>
        </section>
        {/* Image Marquee */}
        <motion.div 
                  className='relative w-full mb-16'
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
              <ImageMarquee/>
        </motion.div>
        {/* CTA */}
        <section className="relative w-full bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] z-10">
              {/* Animated Bird Image */}
        
              <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:gap-16 items-center justify-between px-4 md:px-8 relative ">
                
                {/* Left Side Image */}
                <motion.div 
                  className='md:w-3/5 z-20 flex flex-col justify-end py-8 text-center md:text-left'
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="text-[36px] md:text-[48px] font-semibold [word-spacing:-8px] leading-tight text-white drop-shadow-sm"
                  >
                    Your Story, Ready to Soar with Seawings
                  </motion.h2>
        
                  <motion.p 
                    variants={itemVariants}
                    className="mt-4 max-w-2xl text-white text-[18px]"
                  >
                    Seawings Publications offers complete book publishing services tailored to every author’s needs. From refining your manuscript and designing a captivating cover to handling publishing, distribution, and marketing, we make the process seamless and strategic. We aim to help your story reach readers with professionalism, precision, and purpose.
                  </motion.p>
                  <motion.div 
                    variants={itemVariants}
                    className='mt-8 flex flex-col md:flex-row items-center gap-8 md:justify-start justify-center gap-4'
                  >
                    <div className="flex flex-col gap-2">
                        <CountUp
                        from={0}
                        to={15}
                        separator=","
                        direction="up"
                        suffix="+"
                        duration={1}
                        className="count-up-text text-[60px] leading-none font-semibold text-white"
                        delay={0}
                        />
                        <h6 className="text-[18px] leading-none font-semibold text-white">
                        Years of Experience
                        </h6>
                    </div>
                     <div className="flex flex-col gap-2">
                        <CountUp
                        from={0}
                        to={1000}
                        separator=","
                        direction="up"
                        suffix="+"
                        duration={1}
                        className="count-up-text text-[60px] leading-none font-semibold text-white"
                        delay={0}
                        />
                        <h6 className="text-[18px] leading-none font-semibold text-white">
                        Books Published
                        </h6>
                    </div>
                     <div className="flex flex-col gap-2">
                        <CountUp
                        from={0}
                        to={100}
                        separator=","
                        direction="up"
                        suffix="+"
                        duration={1}
                        className="count-up-text text-[60px] leading-none font-semibold text-white"
                        delay={0}
                        />
                        <h6 className="text-[18px] leading-none font-semibold text-white">
                        Native Writers
                        </h6>
                    </div>
                  </motion.div>
                  {/* Animated Buttons */}
                  <motion.div 
                    variants={itemVariants}
                    className='mt-8 flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'
                  >
                    <GradientButton 
                    onClick={openPopup}
                    />
                    <SecondaryButton />
                  </motion.div>
                </motion.div>
        
                {/* Right Side Content */}
                <motion.div 
                  className='hidden md:flex liquid-glass-card-2 w-[85%] md:w-[25%] z-0  p-3 '
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <img src='images/books/25.png' alt="Publishing" className='w-full h-auto rounded-[20px]' />
        
                </motion.div>
              </div>
        </section>
        {/* Whychoose */}
        <section className="  relative w-full bg-white overflow-hidden z-10">
                <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 overflow-hidden">
        
                  <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative z-20"
                  >
        
                    {/* Heading */}
                    <motion.h2
                      variants={itemVariants2}
                      className="gradient-text text-[34px] md:text-[48px] font-semibold [word-spacing:-8px] text-center leading-tight text-black"
                    >
                      One-Stop Solution for All Your Publishing Needs
                    </motion.h2>
        
                    <motion.p
                                  variants={itemVariants2}
                                  className="mt-4 max-w-2xl text-black/80 text-[18px] text-center mx-auto"
                                >
                                  
                    No need to worry about the “next step” as our experts are here to guide you from the first draft to publishing your book globally.
                                </motion.p>
        
                    {/* Cards */}
                    
                    
        
                  </motion.div>
                  <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6"
            >
              <div className="mt-6 flex flex-wrap justify-center gap-6 max-w-[1200px]">
              {Chooseus.map((Chooseus, index) => (
                <Card
                  key={index}
                  image={Chooseus.image}
                  title={Chooseus.title}
                  
                />
              ))}
              </div>
            </motion.div>
                </div>
        </section>
        {/* CTA 2 */}
         <section className="relative w-full bg-[#13B3D3]/20 my-10 z-10">
              {/* Animated Bird Image */}
        
              <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 items-center justify-center px-4 md:px-8 relative py-8">
                
                {/* Left Side Image */}
                <motion.div 
                  className='md:w-2/3 max-auto z-20 flex flex-col justify-end'
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <motion.h2 
                    variants={itemVariants}
                    className="gradient-text text-[34px] md:text-[48px] font-semibold text-center [word-spacing:-8px] leading-tight text-white drop-shadow-sm"
                  >
                    Get On Your Publishing Journey Without Delay!
                  </motion.h2>
        
                  <motion.p 
                    variants={itemVariants}
                    className="mt-4 max-w-2xl text-black/80 text-[18px] text-center mx-auto"
                  >
                    Experience seamless book printing services through Amazon Self-Publisher – your ultimate destination for all your printing requirements. Our efficient solutions ensure your book sees the light of day, no matter when you decide to publish.
                  </motion.p>
        
                  {/* Animated Buttons */}
                  <motion.div 
                    variants={itemVariants}
                    className='mt-8 flex flex-col md:flex-row items-center justify-center gap-4'
                  >
                    <GradientButton 
                    onClick={openPopup}
                    />
                    <SecondaryButton />
                  </motion.div>
                </motion.div>
        
                {/* Right Side Content */}
                
              </div>
        </section>
        {/* Testimonial */} 
        <section className="  relative w-full bg-white overflow-hidden z-10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-0 md:py-16 overflow-hidden">

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative z-20"
          >

            {/* Heading */}
            <motion.h2
              variants={itemVariants2}
              className="gradient-text text-[34px] md:text-[48px] font-semibold [word-spacing:-8px] text-center leading-tight text-black"
            >
              Voices That Took Flight with Seawings

            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-black/80 text-[18px] text-center mx-auto"
            >
              See what our clients have shared about their publishing experience and how Seawings helped their stories soar.
            </motion.p>

            {/* Cards */}
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6 z-0"
            >
              <TestimonialSection/>
              
            </motion.div>

          </motion.div>
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

export default About

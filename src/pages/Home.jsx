import React from 'react'
import { motion } from "framer-motion";
import Header from '../components/Header'
import { ChevronRightCircle, ChevronRightCircleIcon, ChevronRightIcon, Section } from 'lucide-react'
import GradientButton from '../UI/GradientButton'
import { SecondaryButton } from '../UI/SecondaryButton'
import ContactForm from '../components/ContactForm'
import ImageCarousel from '../components/ImageCarousel';
import LogosMarquee from '../components/LogosMarquee';

// Animation Variants
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

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", bounce: 0.3 } }
};

const listItems = [
    "Our team of expert writers provides thorough book writing services",
    "Create a compelling story that keeps readers interested.",
    "With our coaching, you can perfect your manuscript.",
    "From beginning to end, receive first-rate service.",
  ];

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each list item
      },
    },
  };


export default function Home() {
  return (
    <div>
      <Header />
       <section className="relative w-full min-h-[100vh] overflow-hidden bg-black">
      {/* Background Video - Fade in slowly */}
      <motion.video
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2 }}
        autoPlay
        muted
        loop
        playsInline
        src="/images/banner-02.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className='inset-0 absolute h-full bg-gradient-to-b from-white to-transparent'></div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-[110px] pb-[50px] relative z-20">
        
        {/* Left Side: Content */}
        <motion.div 
          className='md:w-1/2'
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-[34px] md:text-[52px] font-semibold [word-spacing:-8px] leading-tight text-black drop-shadow-sm"
          >
            Let Your Story Reach the Peak It’s Destined To 
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-black text-[18px]"
          >
            Let us be the wind beneath your wings and take your book to the heights it deserves. From concept to completion, we help books soar across global skies and land in the hands of readers everywhere.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className='mt-8 flex flex-row items-center md:justify-start justify-center gap-4'
          >
            <GradientButton />
            <SecondaryButton />
          </motion.div>
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div 
          className='md:w-1/2 flex justify-end mt-12 md:mt-0'
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }} // Subtle hover effect
            className='w-full md:w-[75%] lg:w-[60%] bg-white/25 backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl'
          >
            <h2 className="text-[24px] font-semibold text-center text-black drop-shadow-sm">
              Sign Up And Get
            </h2>
            <h2 className="text-[34px] md:text-[34px] font-bold text-center text-black drop-shadow-sm mb-4">
              60% Discount
            </h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className='bg-[linear-gradient(135deg,#13B3D3_0%,#2563EB_45%,#171E4B_100%)] w-full py-2 mb-4 origin-left'
            >
              <p className="max-w-2xl text-white text-[14px] text-center leading-tight px-4">
                Start your journey with expert support and unbeatable savings.
              </p>
            </motion.div>

            <div className='px-8'>
              <ContactForm />
            </div>
          </motion.div>
        </motion.div>

      </div>
       </section>

      <section className="relative w-full bg-white ">
      {/* Animated Bird Image */}
      <motion.img 
        src='images/bird1.webp' 
        className='z-50 absolute right-0 -top-10 w-32 md:w-40'
        variants={birdVariants}
        initial="hidden"
        whileInView="visible"
        animate="floating"
        viewport={{ once: true, amount: 0.3 }}
      />

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 items-center justify-between px-4 md:px-8 py-16 relative">
        
        {/* Left Side Image */}
        <motion.div 
          className='md:w-1/2 z-20 flex justify-end'
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src='images/second-fold-publishing.png' alt="Publishing" className='w-full h-auto' />
        </motion.div>

        {/* Right Side Content */}
        <motion.div 
          className='md:w-1/2 z-20'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-[34px] md:text-[48px] font-semibold [word-spacing:-8px] leading-tight text-black drop-shadow-sm"
          >
            Let Your Story Reach the Peak It’s Destined To 
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-4 max-w-2xl text-black/80 text-[18px]"
          >
            Let us be the wind beneath your wings and take your book to the heights it deserves. From concept to completion, we help books soar across global skies and land in the hands of readers everywhere.
          </motion.p>

          {/* Animated List Items */}
          <div className='flex flex-col gap-3 mt-6'>
            {listItems.map((text, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className='flex flex-row gap-3 items-center justify-start'
              >
                <div className='flex-shrink-0 w-6 h-6 bg-[linear-gradient(135deg,#13B3D3_0%,#2563EB_45%,#171E4B_100%)] rounded-full flex items-center justify-center'>
                  <ChevronRightIcon className='w-4 h-4 text-white' />
                </div>
                <p className="text-black/80 text-[18px]"> 
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Buttons */}
          <motion.div 
            variants={itemVariants}
            className='mt-8 flex flex-row items-center md:justify-start justify-center gap-4'
          >
            <GradientButton />
            <SecondaryButton />
          </motion.div>
        </motion.div>
      </div>
      </section>


      <motion.div 
          className='relative w-full bg-[linear-gradient(135deg,#13B3D3_0%,#2563EB_45%,#171E4B_100%)] '
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
      <LogosMarquee speed={20} height={45} gap={40}/>
      </motion.div>

      





      
    </div>
  )
}
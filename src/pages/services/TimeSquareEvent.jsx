import { useState } from "react";
import { motion } from "framer-motion";
import Header from '../../components/Header'
import { ChevronRightCircle, ChevronRightCircleIcon, ChevronRightIcon, Section } from 'lucide-react'
import GradientButton from '../../UI/GradientButton'
import { SecondaryButton } from '../../UI/SecondaryButton'
import ContactForm from '../../components/ContactForm'
import LogosMarquee from '../../components/LogosMarquee';
import TabsSection from '../../components/TabsSection';
import TestimonialSection from '../../components/TestimonialSection';
import Footer from '../../components/Footer';
import Popup from '../../components/Popup';
import Card from "../../UI/Card";
import CountUp from "../../UI/CountUp";
import ServiceCard from "../../UI/ServiceCard";
import { Link } from "react-router";
import SEO from "../../components/SEO";

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
  ];

const Chooseus = [
  {
    number:"01",
    title: "Consult & Book",
    text: "Speak with our team to select your preferred date, time slot, and billboard location in Times Square. We guide you through the booking process step by step.",
    
  },
  {
    number:"02",
    title: "Design & Approve",
    text: "Our creative team designs your billboard artwork and shares it for your review. Once approved, we handle all screen submission and technical requirements",
  },
  {
    number:"03",
    title: "Your Moment Goes Live",
    text: "Your book lights up Times Square. We capture the moment with professional photography and video, then deliver your complete media package within 48 hours",
  },

  
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

    const services = [
  {
    image: "images/336.jpg",
    title: "Billboard Display",
    description: "Your book cover and author name displayed on a high-traffic Times Square digital billboard screen for your scheduled time slot.",
  },
  {
    image: "images/334.jpg",
    title: "Professional Photography",
    description: "A professional photographer captures high-resolution images of your book on the Times Square billboard — ready for press releases and social media.",
    
  },
  
  {
    image: "images/335.jpg",
    title: "Creative Design",
    description: "Our design team creates a striking billboard-format visual of your book — optimized for large-format screens and maximum visual impact.",

  },
  {
    image: "images/337.jpg",
    title: "Video Certificate",
    description: "Receive a video recording and digital certificate of your Times Square feature — shareable proof of your milestone moment for all platforms.",

  },
  
  {
    image: "images/333.jpg",
    title: "Press Release & Social Kit",
    description: "We provide a ready-to-send press release and social media content kit to amplify your Times Square feature across your channels and media contacts.",

  },
];
  


export default function TimeSquareEvent() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
  <div>
    <SEO
        title="Times Square Event Promotion | Seawings Publications" 
        description="Promote your book in Times Square with Seawings Publications and gain global visibility through premium digital billboard advertising."
        keyword="Times Square book promotion"
        link="https://seawingspublications.com/time-square-event"
        
       ></SEO>
    <Header />
    {/* Hero */}
    <section className="relative w-full min-h-[900px] bg-black z-10 flex flex-col items-center justify-center">
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

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 pt-[200px] md:pt-[110px] pb-[50px] relative z-20">
        
        {/* Left Side: Content */}
        <motion.div 
          className='md:w-1/2 text-center md:text-left'
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-[36px] md:text-[52px] font-bold [word-spacing:-14px] leading-tight text-black drop-shadow-sm "
          >
            Times Square Book Billboard Event
          </motion.h1>
          

          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-black text-[18px]"
          >
            Put your book in the spotlight at the crossroads of the world. Seawings Publications makes your story shine on the iconic screens of Times Square, New York City.
          </motion.p>
            {/* Animated List Items */}
          <div className='flex flex-col gap-3 mt-6'>
            {listItems.map((text, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className='flex flex-row gap-3 items-center justify-start'
              >
                <div className='flex-shrink-0 w-6 h-6 bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] rounded-full flex items-center justify-center'>
                  <ChevronRightIcon className='w-4 h-4 text-white' />
                </div>
                <p className="text-black/80 text-[18px]"> 
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            variants={fadeInUp}
            className='mt-8 flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'
          >
            <GradientButton 
            onClick={openPopup}
            />
            <SecondaryButton/>
            
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
              50% Discount
            </h2>
            
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className='bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] w-full py-2 mb-4 origin-left'
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
    {/* About*/}
    <section className="relative w-full bg-white overflow-hidden z-0">
      {/* Animated Bird Image */}
      

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 items-center justify-between px-4 md:px-8 py-16 relative">
        
        {/* Left Side Image */}
        <motion.div 
          className='md:w-1/2 z-20 flex justify-center'
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src='images/times.png' alt="Publishing" className='w-[90%] h-auto rounded-3xl'  />
        </motion.div>

        {/* Right Side Content */}
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
            className="text-center md:text-left  text-[36px] md:text-[48px] font-bold [word-spacing:-14px] leading-tight text-black drop-shadow-sm"
          >
            Your Book. Times Square. The World Watching.
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center md:text-left mt-4 max-w-2xl text-black/80 text-[18px]"
          >
            Imagine your book cover displayed on one of the most iconic advertising locations on the planet — Times Square, New York City. Every day, over 330,000 people pass through this intersection, making it the ultimate stage for your literary debut or launch campaign.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="text-center md:text-left mt-2 max-w-2xl text-black/80 text-[18px]"
          >
            Seawings Publications handles the entire event from creative design and screen booking to professional photography of your billboard moment — giving you the proof, the prestige, and the promotional content your book deserves.
          </motion.p>
          <motion.p 
            variants={itemVariants}
            className="text-center md:text-left mt-2 max-w-2xl text-black/80 text-[18px]"
          >
            This is more than marketing. It is a milestone moment every author remembers — and one that readers, media, and social audiences take notice of.
          </motion.p>

          

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
      </div>
    </section>
    {/* Logo Marquee */}
    <motion.div 
              className='relative w-full bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] '
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
          <LogosMarquee speed={20} height={45} gap={40}/>
    </motion.div>
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
                      className="text-black text-[34px] md:text-[48px] font-bold [word-spacing:-14px] text-center leading-tight "
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
              <div className="mt-6 flex flex-wrap justify-center gap-6 max-w-[1300px]">
              {Chooseus.map((Chooseus, index) => (
                <div className="relative w-[350px] md:w-[400px] rounded-[32px] bg-white px-6 pt-12 pb-4 shadow-xl flex flex-col justify-center items-center md:items-start">
                  
                  <h2 className="absolute top-2 right-2 gradient-text text-[46px] text-white font-medium opacity-25">
                    {Chooseus.number}
                  </h2>
                  <h3 className="text-[26px] font-semibold leading-tight text-[#171717] text-left mt-2">{Chooseus.title}</h3>
                  <p className="w-full text-black/80 text-[18px] text-left mt-2">{Chooseus.text}</p>                  
                </div>
              ))}
              </div>
            </motion.div>
                </div>
    </section>
     {/* CTA */}
    <section className="relative w-full bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] z-10">
                  {/* Animated Bird Image */}
            
                  <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:gap-16 items-center justify-between px-4 md:px-8 relative ">
                    
                    {/* Left Side Image */}
                    <motion.div 
                      className='w-full z-20 flex flex-col py-16 text-center mx-auto'
                      variants={imageVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.h2 
                        variants={itemVariants}
                        className="text-[36px] md:text-[48px] font-bold [word-spacing:-14px] leading-tight text-white drop-shadow-sm"
                      >
                        The Power of Times Square

                      </motion.h2>
            
                      
                      <motion.div 
                        variants={itemVariants}
                        className='mt-8 flex flex-col md:flex-row items-warp gap-8 justify-center gap-4'
                      >
                        <div className="md:w-1/4 flex flex-col gap-2 p-6 bg-white/15 backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl">
                            <CountUp
                            from={0}
                            to={330}
                            separator=","
                            direction="up"
                            suffix="K+"
                            duration={1}
                            className="count-up-text text-[60px] leading-none font-semibold text-white"
                            delay={0}
                            />
                            <span className="text-[16px] leading-tight text-white">
                            Daily foot traffic through Times Square — one of the most visited spots on earth
                            </span>
                        </div>
                        <div className="md:w-1/4 flex flex-col gap-2 p-6 bg-white/15 backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl">
                            <CountUp
                            from={0}
                            to={50}
                            separator=","
                            direction="up"
                            suffix="M+"
                            duration={1}
                            className="count-up-text text-[60px] leading-none font-semibold text-white"
                            delay={0}
                            />
                            <span className="text-[16px] leading-tight text-white">
                            Annual visitors to Times Square from every country in the world
                            </span>
                        </div>
                        <div className="md:w-1/4 flex flex-col gap-2 p-6 bg-white/15 backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl">
                            <CountUp
                            from={0}
                            to={1}
                            separator=","
                            direction="up"
                            prefix="#"
                            duration={1}
                            className="count-up-text text-[60px] leading-none font-semibold text-white"
                            delay={0}
                            />
                            <span className="text-[16px] leading-tight text-white">
                            Most photographed and shared urban location globally — maximum social media reach
                            </span>
                        </div>
                        <div className="md:w-1/4 flex flex-col gap-2 p-6 bg-white/15 backdrop-blur-md border border-white/50 rounded-2xl py-4 shadow-2xl">
                            <CountUp
                            from={0}
                            to={100}
                            separator=","
                            direction="up"
                            suffix="%"
                            duration={1}
                            className="count-up-text text-[60px] leading-none font-semibold text-white"
                            delay={0}
                            />
                            <span className="text-[16px] leading-tight text-white">
                            Authors who featured their book here reported a significant spike in online visibility and sales
                            </span>
                        </div>
                      </motion.div>
                      {/* Animated Buttons */}
                   
                    </motion.div>
                  </div>
    </section>
    {/* Services */}
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
              className=" text-[34px] md:text-[48px] font-bold [word-spacing:-14px] text-center leading-tight text-black"
            >
              One-Stop Solution for All Your Publishing Needs
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-black/80 text-[18px] text-center mx-auto"
            >
              
No need to worry about the “next step” as our experts are here to guide you from the first draft to publishing your book globally.
            </motion.p>

            {/* Cards */}
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6"
            >
              <div className="mt-6 flex flex-wrap justify-center gap-6 max-w-[1200px]">
              {services.map((service, index) => (
                <div className="w-full md:w-[380px] min-h-[280px] rounded-[32px] bg-white p-3 shadow-xl flex flex-col">
      
      {/* Image */}
      <div className="overflow-hidden rounded-[26px]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-45 object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-2 py-4">
        
        <div>
          <h3 className="text-[24px] font-semibold leading-tight text-[#171717]">
            {service.title}
          </h3>

          <p className="mt-2 text-[16px] leading-relaxed text-[#8B8B8B]">
            {service.description}
          </p>
        </div>

        {/* Button */}
        

      </div>
    </div>
              ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
    </section>
    {/* CTA */}
        <section className="relative w-full bg-[linear-gradient(135deg,#13B3D3_0%,#171E4B_100%)] my-20 z-10">
          {/* Animated Bird Image */}
              <img src='images/1.gif' alt=" Publishing" className='hidden md:flex absolute left-0 bottom-0 w-[350px] h-auto rounded-[20px]' />
              <img src='images/2.gif' alt="Publishing" className='hidden md:flex absolute -right-15 -bottom-4 w-[350px] h-auto rounded-[20px]' />
    
          <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 items-center justify-center px-4 md:px-8 py-10 relative">
            {/* Right Side Content */}
            
    
            {/* Left Side Image */}
            <motion.div 
              className='md:w-2/4 z-20 flex flex-col justify-end'
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2 
                variants={itemVariants}
                className="text-[34px] md:text-[48px] font-bold [word-spacing:-14px] leading-tight text-white drop-shadow-sm text-center"
              >
                Begin Your Book Publishing Journey With Us
              </motion.h2>
    
              <motion.p 
                variants={itemVariants}
                className="mt-4 max-w-2xl text-white text-[18px] text-center"
              >
              Got ideas scribbled in your journal? We would love to hear from you and turn them into a polished book
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
    
            
          </div>
        </section>
    {/* Portfolio */}
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
              className=" text-[34px] md:text-[48px] font-bold [word-spacing:-14px] text-center leading-tight text-black"
            >
              Books We've Helped Bring to Life
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-black/80 text-[18px] text-center mx-auto"
            >
              Each book here began as a single idea, and with Seawings Publications, it found its wings. See how stories from passionate authors took flight and reached readers worldwide.
            </motion.p>

            {/* Cards */}
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6"
            >
              <TabsSection/>
              
            </motion.div>

          </motion.div>
        </div>
    </section>
    {/* CTA3 */} 
    <section className="relative w-full bg-[#13B3D3]/20 my-20 z-10">
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
            className=" text-[34px] md:text-[48px] font-bold text-center [word-spacing:-8px] leading-tight text-black drop-shadow-sm"
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
              className=" text-[34px] md:text-[48px] font-bold [word-spacing:-14px] text-center leading-tight text-black"
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
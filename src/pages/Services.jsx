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
import { Link } from "react-router";

import FAQSection from '../components/FAQSection';

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

const services = [
  {
    image: "images/publishing.png",
    title: "Publishing & Distribution",
    description: "At Seawings Publications, we professionally manage every stage of the publishing process, from preparing print-ready files and ISBN registration to worldwide distribution across major platforms like Amazon, IngramSpark, Barnes & Noble, Kobo, and Apple Books. We also optimize pricing, metadata, and category placement to improve your book’s visibility while ensuring you keep full ownership and reach readers worldwide in both print and digital formats.",
    buttonText: "Explore More",
    link: "/publishing-and-distribution",
  },
  {
    image: "images/editing.png",
    title: "Editing & Proofreading",
    description: "At Seawings Publications, our editing and proofreading services are designed to transform your manuscript into a polished, publish-ready book while preserving your unique voice. From structural and line editing to final proofreading, we refine clarity, flow, consistency, and presentation to create a smooth reading experience. Whether it’s a novel, memoir, or non-fiction title, our expert editors ensure your book reflects professionalism, quality, and your original vision.",
    buttonText: "Explore More",
    link: "/editing-&-proofreading",
  },
  {
    image: "images/bookcover.png",
    title: "Cover Design & Illustrations",
    description: "At Seawings Publications, we create professionally designed book covers and illustrations that capture your story’s identity and connect with your audience. Our designers combine creativity with market-focused strategies to craft visually striking covers that match your genre, tone, and message. From concept development to final production, we focus on typography, color balance, layout, and visual storytelling to ensure your book stands out with a polished and memorable appearance. Whether it’s imaginative illustrations for children’s books or sleek, impactful designs for fiction and non-fiction titles, we make sure your book leaves a lasting impression before the first page is even opened.",
    buttonText: "Explore More",
    link: "/coverdesign-&-Illustrations",
  },
  {
    image: "images/ghostwriting.png",
    title: "Ghostwriting & Manuscript",
    description: "At Seawings Publications, we turn your ideas, notes, and concepts into professionally written, publish-ready manuscripts through our expert ghostwriting services. Our team works closely with you to preserve your voice, tone, and message while creating clear, engaging, and audience-focused content. Whether it’s a memoir, novel, business guide, or educational book, we tailor every manuscript to match your vision and industry standards. From structured drafting and revisions to professional feedback, we ensure your story is polished, authentic, and ready to make a lasting impact.",
    buttonText: "Explore More",
    link: "/ghostwriting-&-manuscript",
  },
  {
    image: "images/marketing.png",
    title: "Marketing & PR Campaigns",
    description: "At Seawings Publications, we provide tailored marketing and public relations services designed to increase your book’s visibility and grow your readership. Our strategies include social media campaigns, press releases, author branding, email marketing, and targeted online promotions, all customized to fit your genre and goals. From creating pre-launch excitement to ongoing PR outreach, we focus on building meaningful audience engagement and helping your book connect with the right readers. With a blend of creativity and data-driven strategy, Seawings ensures your story reaches beyond the shelves and makes a lasting impact.",
    buttonText: "Explore More",
    link: "/marketing-&-campaigns",
  },
  {
    image: "images/audio.png",
    title: "Audio Book Publsihing",
    description: "At Seawings Publications, we turn your manuscript into a professionally produced audiobook that brings your story to life with clarity and emotion. Our skilled narrators and sound engineers ensure every word is delivered with impact, creating an immersive listening experience for your audience. We handle the entire process, from selecting the right voice talent and directing narration to editing and mastering high-quality audio files that meet industry standards for platforms like ACX and Findaway. Whether your book is fiction, non-fiction, self-help, or children’s literature, we customize the narration style, tone, and pacing to suit your genre and connect with listeners worldwide.",
    buttonText: "Explore More",
    link: "/audiobook",
  },
  {
    image: "images/times.png",
    title: "Time Square Event",
    description: "At Seawings Publications, we help turn your book launch into a powerful visual moment by showcasing your cover on iconic advertising screens in Times Square, one of the busiest and most recognized intersections in the world. With over 330,000 daily visitors, it offers unmatched visibility for authors looking to make a bold debut or campaign impact. We manage the entire process, from creative design and screen booking to professional photography of your billboard feature, delivering both the prestige and promotional content your book deserves. More than marketing, it becomes a milestone moment that captures attention from readers, media, and social audiences alike.",
    buttonText: "Explore More",
    link: "/time-square-event",
  },
];

const Services = () => {
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
                    className="text-[36px] md:text-[72px] font-bold [word-spacing:-14px] leading-tight text-black drop-shadow-sm "
                  >
                    Our Services
                  </motion.h1>
                  
        
                  <motion.p 
                    variants={fadeInUp}
                    className="mt-4 max-w-2xl text-black text-[18px]"
                  >
                    We take your books to the heights it deserves. From first draft to immaculate formatting, from the book cover design to publishing your book globally, our experts take care of everything for you.
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
              <div className="w-full mt-6 flex flex-col justify-center gap-16 max-w-[1200px]">
              {services.map((service, index) => (
  <div
    key={index}
    className={`flex flex-col items-center gap-8 md:gap-14 ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    }`}
  >
    
    {/* Content */}
    <div className="md:w-2/3 flex flex-col items-center md:items-start justify-center gap-4">
      <h1 className="text-3xl font-semibold">
        {service.title}
      </h1>

      <p>
        {service.description}
      </p>

      <Link to={service.link}>
        <GradientButton />
      </Link>
    </div>

    {/* Image */}
    <div className="md:w-1/3 flex justify-end">
      <img
        src={service.image}
        alt={service.title}
        className="rounded-2xl w-full"
      />
    </div>
  </div>
))}
              </div>
            </motion.div>

          </motion.div>
        </div>
    </section>
    {/* CTA */}
    <section className="relative w-full bg-[#171E4B]  z-10">
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
            className=" text-[34px] md:text-[48px] font-semibold text-center [word-spacing:-8px] leading-tight text-white drop-shadow-sm"
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
    {/* FAQs */} 
    <section className="  relative w-full bg-white overflow-hidden ">
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
              Frequently Asked Questions
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-black/80 text-[18px] text-center mx-auto"
            >
              Everything you need to know. Can't find an answer? Reach out to our team anytime.
            </motion.p>

            {/* Cards */}
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6"
            >
              <FAQSection/>
              
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

export default Services

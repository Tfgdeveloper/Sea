import { useState } from "react";
import { motion } from "framer-motion";
import Header from '../../components/Header'
import { Check, ChevronRightCircle, ChevronRightCircleIcon, ChevronRightIcon, Section } from 'lucide-react'
import GradientButton from '../../UI/GradientButton'
import { SecondaryButton } from '../../UI/SecondaryButton'
import ContactForm from '../../components/ContactForm'
import LogosMarquee from '../../components/LogosMarquee';
import ServiceCard from '../../UI/ServiceCard';
import TabsSection from '../../components/TabsSection';
import SplitText from '../../UI/SplitText';
import TestimonialSection from '../../components/TestimonialSection';
import FAQSection from '../../components/FAQSection';
import Footer from '../../components/Footer';
import Popup from '../../components/Popup';
import Headerlp from "../../components/landing/Headerlp";
import Popupbutton from "../../UI/landing/Popupbutton";
import { CallButton } from "../../UI/landing/CallButton";
import ContactFormlp from "../../components/landing/ContactForm";
import TabsSectionlp from "../../components/landing/TabsSection";
import TabsSectionservices from "../../components/landing/TabsSectionservices";
import TestimonialSectionlp from "../../components/landing/TestimonialSectionlp";
import FAQSectionlp from "../../components/landing/FAQSectionlp";
import ContactForm2 from "../../components/landing/ContactForm2";
import Footerlp from "../../components/landing/Footerlp";

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
    "Relieve yourself of the intricate chore of book formatting, and avail of our professional formatting services.",
    "Craft a compelling book cover that not only lures readers but also amplifies your sales through our tailor-made design services",
    "Effortlessly and globally publish your book across key platforms including Amazon, KDP, Barnes & Noble, and more.",
    "Raise your book's prominence by enhancing its visibility through strategically devised marketing plans, ultimately propelling it to the forefront of literary recognition.",

  ];

const listItems2 = [
    "Our team has over 100 skilled writers, editors, publishers, marketing experts, and project managers who work together to bring your book to life. With more than a decade of experience in the book industry, we have the knowledge to help you succeed as an author.",
    "Our team has over 100 skilled writers, editors, publishers, marketing experts, and project managers who work together to bring your book to life. With more than a decade of experience in the book industry, we have the knowledge to help you succeed as an author.",
    "We support you at every stage of your journey, from the first draft to selling your book. Join us, and let's create your success story together.",

  ];

  const services = [
  {
    image: "images/publishing.webp",
    title: "Publishing & Distribution",
    description: "Simplify the publishing process and make your book available through trusted platforms for global and local reach.",
    buttonText: "Explore Service",
    link: "/publishing-and-distribution",
  },
  {
    image: "images/ghostwriting.webp",
    title: "Ghostwriting & Manuscript",
    description: "Collaborate with skilled writers who can help you shape, refine, or complete your manuscript while you have the creative control.",
    buttonText: "Explore Service",
    link: "/ghostwriting-&-manuscript",
  },
  
  {
    image: "images/editing.webp",
    title: "Editing & Proofreading",
    description: "Ensure clarity, flow, and accuracy with professional editing and proofreading that enhance readability and polish your final draft.",
    buttonText: "Explore Service",
    link: "/editing-&-proofreading",
  },
  {
    image: "images/bookcover.webp",
    title: "Cover Design & Illustrations",
    description: "Get visually striking covers and illustrations crafted to complement your genre, tone, and audience appeal.",
    buttonText: "Explore Service",
    link: "/coverdesign-&-Illustrations",
  },
  
  {
    image: "images/marketing.webp",
    title: "Marketing & PR Campaigns",
    description: "Build awareness through strategic campaigns that help connect your book with its ideal readers across multiple channels.",
    buttonText: "Explore Service",
    link: "/marketing-&-campaigns",
  },
  {
    image: "images/audio.webp",
    title: "Audio Book Publsihing",
    description: "Turn your story into immersive audio formats that engage listeners and expand your audience across popular platforms.",
    buttonText: "Explore Service",
    link: "/audiobook",
  },
  {
    image: "images/times.webp",
    title: "Time Square Event",
    description: "Showcase your book in Times Square with bold promotions that create buzz and attract a wider audience fast.",
    buttonText: "Explore Service",
    link: "/time-square-event",
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

  


export default function PublishingSolution() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
  <div>
    <SEO
        title="Publishing Solutions for Authors | Seawings Publications" 
        description="Professional publishing solutions with global distribution, ISBN setup, formatting, and marketing services for authors worldwide."
        keyword="publishing solutions for authors"
        link="https://seawingspublications.com/publishings-solutions"
        
       ></SEO>
    <Headerlp />
    {/* Hero */}
    <section className="relative w-full min-h-[100vh] bg-black z-10 flex flex-col items-center justify-center">
      {/* Background Video - Fade in slowly */}
      <motion.img
        src="/images/hero2.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      <div className='inset-0 absolute h-full bg-black/75'></div>

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-[100px] relative z-20">
        
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
            className="text-[36px] md:text-[42px] font-bold [word-spacing:-14px] leading-tight text-white drop-shadow-sm "
          >
            Exceptional Book Publishing Services for Aspiring Authors!
          </motion.h1>
          

          <motion.p 
            variants={fadeInUp}
            className="mt-4 max-w-2xl text-white text-[18px] leading-tight font-light tracking-wide"
          >
            Begin your author's adventure today, breathe life into your book, and let our expert support fuel your journey. With our writing, editing, publishing, and global book marketing, we've already helped a million authors reach their literary dreams.
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className='mt-8 flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'
          >
            <button
            onClick={openPopup}
            class="poppins-medium relative overflow-hidden rounded-full 
            border-[2px] border-white px-[25px] py-[10px] text-[18px] 
            text-white transition-all duration-500 ease-in-out group"
            >
            <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="relative z-10 transition-colors duration-500 group-hover:text-[#171D4B]">
             Get Started
            </span>
            </button>
        <a href="tel:+17372201691" 
            class="poppins-medium relative overflow-hidden rounded-full 
            hover:border-[2px] hover:border-white px-[25px] py-[10px] text-[18px] 
            transition-all duration-500 ease-in-out group bg-[#171D4B] text-center"
        >
        <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="relative z-10 text-center transition-colors duration-500 text-white group-hover:text-[#171D4B]">
            (737) 220-1691
            </span>
        </a>
            
          </motion.div>
          <div class="hidden md:flex flex-row gap-[100px] mt-8 mx-6">
            <span className="text-[18px] font-medium text-white">
            05 &nbsp;
            <span className="text-[#FFFF00]">★★★★★</span>
            &nbsp; Rating on
            </span>          </div>
          <div class="hidden md:flex flex-row gap-[20px] mt-8 mx-6 items-center">
            <img src="images/logos/trustpilot.svg" alt="logo" class="h-[25px] md:h-[35px] w-auto"/>
            <img src="images/logos/bark.webp" alt="logo" class="h-[15px] md:h-[25px] w-auto"/>
            <img src="images/logos/good.webp" alt="logo" class="h-[35px] md:h-[50px] w-auto"/>
            <img src="images/logos/clutch.webp" alt="logo" class="h-[25px] md:h-[35px] w-auto"/>
          </div>
        
        </motion.div>

        {/* Right Side: Form Card */}
        <motion.div 
          className='flex items-end justify-end md:w-1/2 mt-20 md:mt-0 '
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.02 }} // Subtle hover effect
            className='md:w-[80%] px-[30px] py-[50px] mx-auto bg-white/60 rounded-[30px] z-50'
          >
            <h2 class="text-[24px] md:text-[28px] leading-tight text-left text-black mb-4">
              Start Your Publishing Journey
            </h2>
            

            <div className=''>
              <ContactFormlp />
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
          className='md:w-1/2 z-20 flex justify-end'
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src='images/about.jpeg' alt="Publishing" className='w-full h-auto rounded-xl' />
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
            className="text-center md:text-left  text-[22px] md:text-[28px] font-bold leading-tight text-[#171D4B] [word-spacing:-8px] leading-tight"
          >
            Pen Your Way to Bestseller Stardom with Our Exclusive Publishing Magic
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center md:text-left mt-4 mt-4 mx-auto text-black/75 text-[18px] pl-[25px] border-l-[3px] rounded-[20px] border-[#171D4B]"
          >
            Begin your path as a writer today and transform your book dreams into a reality. We've assisted more than a million clients around the globe with writing, editing, publishing, and marketing. Our dedication is to see you thrive in the world of books.
          </motion.p>

          {/* Animated List Items */}
          <div className='flex flex-col gap-3 mt-6'>
            {listItems.map((text, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className='flex flex-row gap-3 items-start justify-start'
              >
                <div className="w-12 h-12 mt-2">
                  <Check className='text-[#171D4B]' />
                </div>
                <p className="text-black/80 text-[18px]"> 
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Buttons */}
          <motion.div 
            variants={fadeInUp}
            className='mt-8 flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'
          >
            <button
            onClick={openPopup}
            class="hidden md:inline-flex relative overflow-hidden rounded-full 
            border-[2px] border-[#171D4B] px-[25px] py-[10px] text-[18px] 
            text-[#171D4B] transition-all duration-500 ease-in-out group"
          >
            <span class="absolute inset-0 w-0 bg-[#171D4B] transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="font-semibold relative z-10 transition-colors duration-500 group-hover:text-white">
              Get Started
            </span>
          </button>
            
            <a href="tel:+17372201691" 
            class="hidden md:inline-flex poppins-medium relative overflow-hidden rounded-full 
            border-[2px] border-[#171D4B] px-[25px] py-[10px] text-[18px] 
            transition-all duration-500 ease-in-out group bg-[#171D4B]"
          >
          <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="font-semibold relative z-10 transition-colors duration-500 text-white group-hover:text-[#171D4B]  ">
            (737) 220-1691
            </span>
          </a>
            
          </motion.div>
        </motion.div>
      </div>
    </section>
    {/* Logo Marquee */}
    <motion.div 
          className='relative w-full bg-[#171D4B] '
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
      <LogosMarquee speed={20} height={45} gap={40}/>
    </motion.div>
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
              className=" text-[28px] md:text-[34px] text-center text-[#171D4B] [word-spacing:-6px] text-center leading-tight"
            >
              Our Portfolio
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-slate-600 text-[18px] text-center mx-auto"
            >
              At our core, we are fueled by an unwavering dedication to the enduring success of our clients. We are steadfast in our mission to create substantial and enduring positive change through our endeavors.
            </motion.p>

            {/* Cards */}
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6"
            >
              <TabsSectionlp/>
              
            </motion.div>

          </motion.div>
        </div>
    </section>
    {/* CTA 2 */}
    <section className="relative w-full z-10">
        <img
        src="images/images-cta-img-01.png"
        alt="Hero Background"
        class="absolute inset-0 w-full h-full object-cover"
        fetchpriority="high" />
      {/* Animated Bird Image */}

      <div className="max-w-[1600px] py-[50px]  mx-auto flex flex-col md:flex-row md:gap-16 items-center justify-between px-4 md:px-8 relative ">
        
        {/* Left Side Image */}
        <motion.div 
          className='md:w-1/2 z-20 flex flex-col justify-end py-8 md:py-0 text-center md:text-left'
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            variants={itemVariants}
            className="text-[22px] md:text-[28px] font-bold [word-spacing:-6px] leading-tight text-white drop-shadow-sm"
          >
            Discover the Complete Potential of Your Script with Our Expert Assistance!
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="mt-4 max-w-2xl text-white text-[18px]"
          >
            Enhance your manuscript to transform it into a refined and published book, thanks to our outstanding editing service.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div 
            variants={fadeInUp}
            className='mt-8 flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'
          >
            <button
            onClick={openPopup}
            class="poppins-medium relative overflow-hidden rounded-full 
            border-[2px] border-white px-[25px] py-[10px] text-[18px] 
            text-white transition-all duration-500 ease-in-out group"
            >
            <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="relative z-10 transition-colors duration-500 group-hover:text-[#171D4B]">
             Get Started
            </span>
            </button>
        <a href="tel:+17372201691" 
            class="poppins-medium relative overflow-hidden rounded-full 
            hover:border-[2px] hover:border-white px-[25px] py-[10px] text-[18px] 
            transition-all duration-500 ease-in-out group bg-[#171D4B] text-center"
        >
        <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="relative z-10 text-center transition-colors duration-500 text-white group-hover:text-[#171D4B]">
            (737) 220-1691
            </span>
        </a>
            
          </motion.div>
        </motion.div>

        {/* Right Side Content */}
        <motion.div 
          className='relative flex items-center justify-center md:w-1/2 '
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src="images/books/35.webp" alt="books" class="w-[125px] md:w-[200px] rounded-md "/>
          <img src="images/books/47.webp" alt="books" class="w-[175px] md:w-[250px] -mx-8 rounded-md z-20"/>
          <img src="images/books/60.webp" alt="books" class="w-[125px] md:w-[200px] rounded-md"/>

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
              className=" text-[28px] md:text-[34px] text-center text-[#171D4B] [word-spacing:-6px] text-center leading-tight"
            >
              Start Your Expedition to Best-Selling Authorship
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-slate-600 text-[18px] text-center mx-auto"
            >
              Allow us to transform your concepts and manuscripts into compelling literary works. Our dedicated team is committed to offering the comprehensive support required to realize your ambitions as an author.
            </motion.p>

            {/* Cards */}
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6"
            >
              <TabsSectionservices/>
              
            </motion.div>

          </motion.div>
        </div>
    </section>
    {/* Testimonial */} 
    <section className="  relative w-full bg-[#171E4B] overflow-hidden z-10">
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
              className=" text-[28px] md:text-[34px] font-bold [word-spacing:-6px] text-center leading-tight text-white"
            >
              Clients Testimonials


            </motion.h2>
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6 z-0"
            >
              <TestimonialSectionlp/>
              
            </motion.div>

          </motion.div>
        </div>
    </section>
    {/* About*/}
    <section className="relative w-full bg-white overflow-hidden z-0">
      {/* Animated Bird Image */}
      

      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 items-center justify-between px-4 md:px-8 py-16 relative">
        
       

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
            className="text-center md:text-left  text-[22px] md:text-[28px] font-bold leading-tight text-[#171D4B] [word-spacing:-8px] leading-tight"
          >
            Are You Prepared to Launch Your Literary Masterpiece and Establish Your Presence in the World of Literature?
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-center md:text-left mt-4 mt-4 mx-auto text-black/75 text-[18px] pl-[25px] border-l-[3px] rounded-[20px] border-[#171D4B]"
          >
            Navigating the world of self-publishing, spanning diverse platforms such as Amazon and Kobo, has been streamlined to utmost simplicity through our seamless services.
          </motion.p>

          {/* Animated List Items */}
          <div className='flex flex-col gap-3 mt-6'>
            {listItems2.map((text, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className='flex flex-row gap-3 items-start justify-start'
              >
                <div className="w-12 h-12 mt-2">
                  <Check className='text-[#171D4B]' />
                </div>
                <p className="text-black/80 text-[18px]"> 
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Animated Buttons */}
          <motion.div 
            variants={fadeInUp}
            className='mt-8 flex flex-col md:flex-row items-center md:justify-start justify-center gap-4'
          >
            <button
            onClick={openPopup}
            class="hidden md:inline-flex relative overflow-hidden rounded-full 
            border-[2px] border-[#171D4B] px-[25px] py-[10px] text-[18px] 
            text-[#171D4B] transition-all duration-500 ease-in-out group"
          >
            <span class="absolute inset-0 w-0 bg-[#171D4B] transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="font-semibold relative z-10 transition-colors duration-500 group-hover:text-white">
              Get Started
            </span>
          </button>
            
            <a href="tel:+17372201691" 
            class="hidden md:inline-flex poppins-medium relative overflow-hidden rounded-full 
            border-[2px] border-[#171D4B] px-[25px] py-[10px] text-[18px] 
            transition-all duration-500 ease-in-out group bg-[#171D4B]"
          >
          <span class="absolute inset-0 w-0 bg-white transition-all duration-500 ease-in-out group-hover:w-full"></span>

            <span class="font-semibold relative z-10 transition-colors duration-500 text-white group-hover:text-[#171D4B]  ">
            (737) 220-1691
            </span>
          </a>
            
          </motion.div>
        </motion.div>
         {/* Left Side Image */}
        <motion.div 
          className='md:w-1/2 z-20 flex justify-end'
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img src='images/about2.png' alt="Publishing" className='w-full h-auto rounded-xl' />
        </motion.div>
      </div>
    </section>
    {/* Testimonial */} 
    <section className="  relative w-full bg-[#171E4B] overflow-hidden z-10">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-16 overflow-hidden">

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="relative z-20 h-full"
          >

            {/* Heading */}
            <motion.h2
              variants={itemVariants2}
              className=" text-[28px] md:text-[34px] font-bold [word-spacing:-6px] text-center leading-tight text-white"
            >
              Get On Your Publishing Journey Without Delay!


            </motion.h2>
            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-white/80 text-[18px] text-center mx-auto"
            >
              Experience seamless book printing services through Amazon Self-Publisher – your ultimate destination for all your printing requirements. Our efficient solutions ensure your book sees the light of day, no matter when you decide to publish.
            </motion.p>
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6 z-0"
            >
               <div class="bg-white w-full flex flex-row gap-6 h-180 md:h-auto">
          <div class="md:w-3/4 flex flex-col gap-4 p-6 h-full">
          <h2 class="poppins-semibold text-[24px] md:text-[30px] [#171D4B]">Please Do Not Hesitate To Request An Appointment At Your Earliest Convenience</h2>
          <p class="poppins-regular max-2xl text-black/75 text-[18px]">
             Our dedicated team is here to support you in making a lasting impression and realizing your utmost capabilities.
          </p>
          <ContactForm2/>

          </div>
          <div class="hidden md:inline-flex w-1/4 ">
          <img src="images/books/28.webp" alt="books" class="h-full"/>

        </div>
          </div>
              
            </motion.div>

          </motion.div>
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
              className=" text-[28px] md:text-[34px] font-bold [word-spacing:-14px] text-center leading-tight text-[#171E4B]"
            >
              Voices That Took Flight with Seawings
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              variants={itemVariants2}
              className="mt-4 max-w-2xl text-black/80 text-[18px] text-center mx-auto"
            >
              We offer a wide range of services to meet all your author needs, from writing and editing to formatting, book cover design, publishing, marketing, website development, video book trailers, and more.
            </motion.p>

            {/* Cards */}
            
            <motion.div
              variants={itemVariants2}
              className="mt-6 flex flex-wrap justify-center gap-6"
            >
              <FAQSectionlp/>
              
            </motion.div>

          </motion.div>
        </div>
    </section>
    <Footerlp/>
     {isPopupOpen && (
        <Popup
          isOpen={isPopupOpen}
          closePopup={closePopup}
        />
        )} 
      





      
  </div>
  )
}
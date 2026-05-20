import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const tabsData = [
  {
    id: 1,
    label: "Book Publishing",
    image:"images/services/modern publishing 2.png",
    heading:"Book Publishing",
    description:"You've penned down your thoughts and stories, and now it's time to share them with the world. With our comprehensive self-publishing service, we assist authors like you in transforming your formatted manuscript into a captivating e-book available across major platforms such as Amazon, Barnes & Noble, Kobo, and more. Simply email us your manuscript, and let us handle the rest, ensuring your work reaches the widest audience possible."
  },
  {
    id: 2,
    label: "Book Editing",
    image:"images/services/Frame 4.png",
    heading:"Book Editing",
    description:"Completing your initial draft is a monumental achievement. Now, let our exclusive editing service elevate your manuscript to the next level. Our team of skilled editors collaborates with you, refining your work into a polished, professionally crafted book that you can take pride in. Your dream of becoming a published author is within reach."
  },
  {
    id: 3,
    label: "Book Formatting",
    image:"images/services/modern book formatting 2.png",
    heading:"Book Formatting",
    description:"Your manuscript is ready, and it's time to give it the professional touch it deserves. Entrust our expert designers with the intricate task of formatting your book. While you focus on your creative endeavors, our team will diligently format your manuscript, ensuring it meets industry standards and captivates readers. Share your work with our professional formatting experts, and let's embark on this journey together."
  },
  {
    id: 4,
    label: "Book Proofreading",
    image:"images/services/professional proofreader 2.png",
    heading:"Book Proofreading",
    description:"Congratulations on reaching this pivotal stage in your writing journey. Our skilled designers are prepared to transform your finalized manuscript into a flawlessly formatted book. By engaging our expert formatting service, you free yourself from the burden of technical intricacies, allowing your creativity to flourish. Partner with our experienced professionals, share your manuscript, and let's commence the formatting process today."
  },
  {
    id: 5,
    label: "Ebook Writing",
    image:"images/services/Frame 2.png",
    heading:"Ebook Writing",
    description:"Are you ready to turn your book idea into a bestseller? Our team of professional ghostwriters is dedicated to helping you achieve your goals. From conceptualization to meticulous editing, we collaborate closely with you to ensure your manuscript is refined and ready for publication. Share your creative vision with us, and together, we can bring your story to life."
  },
  {
    id: 6,
    label: "Amazon Publishing",
    image:"images/services/creative designer 2.png",
    heading:"Amazon Publishing",
    description:"Take complete control of your publishing journey by self-publishing your book on prominent platforms such as Amazon, KDP, Barnes & Noble, Kobo, Smashwords, Apple iBookstore, IngramSpark, and Google Books. Simply email us your formatted manuscript, and watch as your literary creation reaches readers around the globe."
  },
  {
    id: 7,
    label: "Book Marketing",
    image:"images/services/Frame 5.png",
    heading:"Book Marketing",
    description:"Get on your journey as a published author with our comprehensive book marketing services. We handle every aspect, from crafting an attention-grabbing title to designing a bespoke book cover, formatting your manuscript to industry standards, writing compelling book descriptions, and devising a strategic book launch plan. Trust our professionals to meticulously curate your book for Amazon, ensuring it reaches your target audience effectively."
  },
  {
    id: 8,
    label: "Book Cover Design",
    image:"images/services/creative designer 2.png",
    heading:"Book Cover Design",
    description:"Your book's cover is its face to the world. Our seasoned team of cover design experts understands the significance of a visually captivating and relevant cover. Whether your book is a culinary masterpiece or a gripping murder mystery, we create covers that not only capture the essence of your story but also resonate with your readers. If you're working on a series, count on us to deliver consistent, polished designs that reflect your brand identity."
  },
  {
    id: 9,
    label: "Author Website Design",
    image:"images/services/elegant author 2.png",
    heading:"Author Website Design",
    description:"Establishing a robust online presence is pivotal in today's digital age. Our dedicated website designers specialize in creating custom author websites tailored to your genre, be it fiction or nonfiction. An author website is more than just a digital space; it's a platform to interact with your readers, promote your latest releases, share character insights, publish short stories, and even sell ebooks. Let us craft an engaging website that aligns perfectly with your literary identity."
  },
  {
    id: 10,
    label: "Book Video Trailer",
    image:"images/services/Frame 6.png",
    heading:"Book Video Trailer",
    description:"In a saturated market, a captivating book trailer can make all the difference. Our team excels in creating visually stunning and persuasive book trailers that set your book apart. These trailers serve as powerful marketing tools, effectively promoting your work and boosting sales. Don't miss the opportunity to captivate your audience – harness the power of our book and video trailer services"
  },
  {
    id: 11,
    label: "Audiobook Narration",
    image:"images/services/Frame 3.png",
    heading:"Audiobook Narration",
    description:"Expand your reach and connect with a broader audience by transforming your written words into dynamic audiobooks. Our audiobook narration services breathe life into your narrative, making your story accessible to listeners in an engaging manner. This service is especially valuable for self-published authors seeking to broaden their horizons. Don't let your compelling story go unheard; allow us to bring it to life through the immersive experience of audiobooks."
  },
];

const TabsSectionservices = () => {
  const [activeTab, setActiveTab] = useState(1);
  const scrollRef = useRef(null);

  const activeContent = tabsData.find((t) => t.id === activeTab);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);

    if (window.innerWidth < 768) {
      const activeBtn = scrollRef.current?.querySelector(
        `[data-id="${tabId}"]`
      );

      if (activeBtn) {
        activeBtn.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4">

        {/* Tabs */}
        <div className="mb-12">
          <div
            ref={scrollRef}
            className="
              flex gap-3 overflow-x-auto md:flex-wrap md:justify-center
              whitespace-nowrap [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                data-id={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`
                  rounded-full border px-6 py-3 text-[18px]
                  transition-all duration-300
                  ${
                    activeTab === tab.id
                      ? "bg-[#171D4B] text-white border-[#171D4B]"
                      : "bg-white text-[#171D4B] border-[#171D4B]"
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            flex flex-col items-center gap-10
            lg:flex-row lg:items-center md:-mt-10
          "
        >
          {/* Image */}
          <div className="w-full lg:w-[38%] flex justify-center">
            <img
              src={activeContent.image}
              alt={activeContent.heading}
              className="
                w-full max-w-[420px]
                object-cover
              "
            />
          </div>

          {/* Text */}
          <div className="w-full lg:w-[62%]">
            <h2 className="text-3xl font-bold text-[#171D4B] mb-4">
              {activeContent.heading}
            </h2>

            <p className="text-[18px] leading-[1.8] text-[#4B5563]">
              {activeContent.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TabsSectionservices;
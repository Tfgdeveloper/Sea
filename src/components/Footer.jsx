import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full  bg-[linear-gradient(135deg,#13B3D3_0%,#2563EB_45%,#171E4B_100%)] pt-8 pb-2 px-4 md:px-8 border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 mb-4 justify-between">
          
          {/* Column 1: Branding */}
          <div className="md:w-[30%] flex flex-col gap-6">
            <img src='images/logowhite.png' className='w-[250px]'/>
            <p className="text-white text-[16px] leading-relaxed max-w-sm">
              Let us be the wind beneath your wings and take your book to the heights it deserves. We help stories soar across global skies.
            </p>
            <div className="w-fit">
              <button className="bg-white text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition-all active:scale-95">
               <span className=' gradient-text'>Schedule Consultation</span> 
              </button>
            </div>
            
          </div>
        <div className='md:w-[45%] flex flex-col md:flex-row gap-4'>
          {/* Column 2: Quicklinks */}
          <div className='md:w-1/3'>
            <h3 className="text-xl font-bold text-white mb-6">Quicklinks</h3>
            <ul className="flex flex-col gap-4">
              {['About', 'Industries', 'FAQs', 'Blogs', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/80 hover:text-white transition-colors text-[16px]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className='md:w-1/3'>
            <h3 className="text-xl font-semibold text-white mb-6">Our Services</h3>
            <ul className="flex flex-col gap-4">
              {['Ghost Writing', 'Editing & Proofreading', 'Book Publishing', 'Book Marketing', 'Cover Design', 'Author Coaching'].map((service) => (
                <li key={service}>
                  <a href={`#${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/80 hover:text-white transition-colors text-[16px]">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className='md:w-1/3'>
            <h3 className="text-xl font-bold text-white mb-6">Contact Info</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex flex-col">
                <span className="text-white text-sm uppercase tracking-wider">Phone</span>
                <a href="tel:8888849931" className="text-white/80 font-medium hover:text-white">(888) 884-9931</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white text-sm uppercase tracking-wider">Email</span>
                <a href="mailto:info@seawings.com" className="text-white/80 font-medium hover:text-white">info@seawings.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-white text-sm uppercase tracking-wider">Office</span>
                <p className="text-white/80 font-medium">11133 Shady Trail, Dallas, TX 75229</p>
              </li>
            </ul>
          </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-sm">
            Copyright © {currentYear} SeaWings.com All Rights Reserved.
          </p>
          <div className="flex gap-6">
             {/* Social icons could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
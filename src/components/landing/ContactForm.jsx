import React, { useState } from "react";
import { useNavigate } from "react-router";

const ContactFormlp = () => {
  const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    // State to hold form input values
    const [formData, setFormData] = useState({
      name: "",
      phone: "",
      email: "",
     
      message: "",
      page_url: window.location.href, 
    });
  
    // Handle input changes
    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Set the loading state to true when the submission starts
    setIsLoading(true);
  
    try {
      // 1) DB Save API
      const dbRes = await fetch(
        "https://leads.authorpublishers.us/api/lead/seAklcubaHUllytXMzMVDBzdVGcJhhz9",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            "Phone Number": formData.phone,
            Message: formData.message,
            // If their API supports extra fields, you can also send:
            // PageUrl: formData.page_url,
          }),
        }
      );
  
      // Try to parse JSON safely (some APIs return empty body)
      let dbData = null;
      try {
        dbData = await dbRes.json();
      } catch (_) {}
  
      if (!dbRes.ok) {
        throw new Error(dbData?.message || `DB API Error: ${dbRes.status}`);
      }
  
      // Success: redirect
      navigate("/thank-you");
    } catch (error) {
      alert("Failed to submit form: " + error.message);
    } finally {
      // Reset the loading state after completion
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 space-x-2">
     
      <input
        type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  placeholder="Enter Your Name"
 
  title="Please enter your full name (first and last name, letters only)"
  className="w-full bg-white/0 border rounded-3xl border-black px-3 py-2
                                placeholder:text-black text-black appearance-none
                                focus:outline-none "
      />

          <input
       type="tel"
  id="phone"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  placeholder="Enter Your Phone Number"
 
  title="Enter a valid US number in this format: +1 123 456 7890"
  
  className="w-full bg-white/0 border rounded-3xl border-black px-3 py-2
                                placeholder:text-black text-black appearance-none
                                focus:outline-none "
      />
     
      <input
        type="email"
  id="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  required
  placeholder="Enter Your Email"
  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  title="Please enter a valid email address"
  className="w-full bg-white/0 border rounded-3xl border-black px-3 py-2
                                placeholder:text-black text-black appearance-none
                                focus:outline-none "
      />

    
    

    
      <textarea
        rows="4"
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  placeholder="Tell us about your book project"
  pattern=".{10,}"
  title="Please enter at least 10 characters"
  className="w-full bg-white/0 border rounded-3xl border-black px-3 py-2
                                placeholder:text-black text-black appearance-none
                                focus:outline-none "
      />

      <button
        type="submit"
        className="w-full bg-[#171D4B] text-white hover:scale-110 font-bold py-3 px-8 rounded-full transition-scale duration-200 whitespace-nowrap"
      disabled={isLoading} // Disable the button when loading
>
  {isLoading ? "Sending..." : "Send"} {/* Display loading text */}
       
      </button>
    </form>
  );
};

export default ContactFormlp;

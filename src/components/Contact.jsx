import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  // Setup WhatsApp config
  const phoneNumber = "918007055216";
  const defaultMessage = "Hello Sunil, I saw your portfolio and I am interested in your artworks.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill all fields.');
      return;
    }
    
    setStatus('Sending...');
    
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('Message sent successfully! 🚀');
        setFormData({ name: '', email: '', message: '' }); // Clear form
        
        // Hide success message after 4 seconds
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      console.log(err);
      setStatus('Error connecting to server.');
    }
  };

  return (
    <div className="py-24 px-6 md:px-12 bg-neutral-50 min-h-screen pt-32">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c241b] mb-4">
            Contact Me
          </h2>
          <div className="w-12 h-[2px] bg-yellow-600/80 mx-auto"></div>
          <p className="mt-6 text-stone-600 font-light max-w-lg mx-auto">
              Interested in acquiring an original artwork or discussing a custom commission? Feel free to reach out.          </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-sm border border-stone-200 mb-10">
          <form onSubmit={handleSubmit} className="space-y-8 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-yellow-600 bg-transparent transition-colors text-sm" 
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-yellow-600 bg-transparent transition-colors text-sm" 
                />
              </div>
            </div>
            <div>
              <textarea 
                rows="4" 
                name="message"
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-yellow-600 bg-transparent transition-colors resize-none text-sm"
              ></textarea>
            </div>
            
            {/* Status Message Display */}
            {status && (
              <div className={`text-sm font-medium ${status.includes('successfully') ? 'text-green-600' : 'text-stone-600'}`}>
                {status}
              </div>
            )}

            <button 
              type="submit" 
              className="w-full bg-[#2c241b] text-white py-4 hover:bg-stone-800 transition-colors tracking-widest uppercase text-xs font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* WhatsApp Button Section */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] bg-stone-300 w-16"></div>
            <span className="text-stone-400 text-sm font-light">OR</span>
            <div className="h-[1px] bg-stone-300 w-16"></div>
          </div>
          
          <a 
            href={waLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-3 rounded-full hover:bg-[#1EBE5D] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-medium tracking-wide shadow-md"
          >
            {/* WhatsApp Icon */}
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"></path>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
import React, { useState, useEffect } from 'react';

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  // Fetch entries from backend on component load
  useEffect(() => {
    fetch('http://localhost:5000/api/guestbook')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.log(err));
  }, []);

  // Handle form submission and send data to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !message) return;

    try {
      const response = await fetch('http://localhost:5000/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, message })
      });
      
      const newEntry = await response.json();
      
      // Update UI immediately with the new entry
      setEntries([newEntry, ...entries]);
      setName('');
      setMessage('');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="py-24 px-6 md:px-12 bg-neutral-50 min-h-screen pt-32">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#2c241b] mb-4">
            Guestbook
          </h2>
          <div className="w-12 h-[2px] bg-yellow-600/80 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="bg-white p-8 shadow-sm border border-stone-200 h-fit">
            <h3 className="text-xl font-serif text-[#2c241b] mb-6">Sign the Guestbook</h3>
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-yellow-600 bg-transparent transition-colors text-sm" 
                />
              </div>
              <div>
                <textarea 
                  rows="3" 
                  placeholder="Your Message" 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border-b border-stone-300 py-2 focus:outline-none focus:border-yellow-600 bg-transparent transition-colors resize-none text-sm"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-[#2c241b] text-white py-4 mt-2 hover:bg-stone-800 transition-colors tracking-widest uppercase text-xs font-medium"
              >
                Submit Entry
              </button>
            </form>
          </div>

          <div className="space-y-6 overflow-y-auto max-h-[500px] pr-2">
            {entries.map((entry) => (
              <div key={entry._id} className="bg-[#EAE8E3] p-6 border-l-4 border-[#2c241b]">
                <p className="font-light text-stone-700 italic mb-4">"{entry.message}"</p>
                <div className="flex justify-between items-center text-xs text-stone-500 font-medium uppercase tracking-wider">
                  <span>- {entry.name}</span>
                  <span>{new Date(entry.date).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
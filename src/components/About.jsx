import React from 'react';

export default function About() {
  return (
    <div className="py-24 px-6 md:px-12 bg-[#F2F1EA] min-h-screen pt-32 text-[#2c241b]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header section */}
        <div className="flex flex-col items-center text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif mb-4 tracking-wide text-[#2c241b]">
            Sunil Suryawanshi
          </h1>
          <p className="text-lg text-[#B0893E] font-medium tracking-widest uppercase mb-6">
            Artist & Creator
          </p>
          <div className="w-24 h-[2px] bg-[#B0893E]"></div>
          <p className="text-sm text-stone-500 font-light mt-6">
            b. 1993 | Sangli, Maharashtra, India
          </p>
        </div>

        {/* Artist statement section */}
        <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 shadow-sm border border-stone-100 mb-20 relative">
          {/* Decorative quote mark */}
          <span className="text-8xl text-[#B0893E] opacity-20 absolute top-4 left-6 font-serif">"</span>
          
          <h2 className="text-2xl font-serif text-[#2c241b] mb-8 relative z-10 text-center">
            Artist Statement
          </h2>
          
          <div className="space-y-6 text-[16px] md:text-[18px] leading-relaxed text-stone-600 font-light text-center relative z-10">
            <p>
              As I grew up in the countryside, from childhood I experienced
              nature very closely and was attracted to the natural and historical
              beauty around me. This early connection sparked my deep
              interest in historical temples, ancient buildings, and raw nature—
              elements that heavily reflect in my drawings.
            </p>
            <p>
              I spend countless hours exploring these places in meticulous
              detail. That is precisely why I chose the pen and ink medium; it
              allows me to capture the finest textures with a striking contrast of
              black and white.
            </p>
          </div>
        </div>

        {/* Experience & Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Education card */}
          <div className="bg-white p-8 border-t-4 border-[#B0893E] shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-serif text-[#2c241b] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B0893E]"></span> Education
            </h2>
            <ul className="space-y-4 text-[14px] text-stone-600 font-light">
              <li className="flex flex-col"><span className="font-medium text-stone-800">Master of Fine Arts</span> <span className="text-xs text-[#B0893E] mt-1">2017 - 2018</span></li>
              <li className="flex flex-col"><span className="font-medium text-stone-800">Bachelor of Fine Arts</span> <span className="text-xs text-[#B0893E] mt-1">2015 - 2016</span></li>
              <li className="flex flex-col"><span className="font-medium text-stone-800">Art Teacher Diploma</span> <span className="text-xs text-[#B0893E] mt-1">2012 - 2013</span></li>
              <li className="flex flex-col"><span className="font-medium text-stone-800">HSC</span> <span className="text-xs text-[#B0893E] mt-1">2011 - 2012</span></li>
            </ul>
          </div>

          {/* Group Shows card */}
          <div className="bg-white p-8 border-t-4 border-[#2c241b] shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-serif text-[#2c241b] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#2c241b]"></span> Group Shows
            </h2>
            <ul className="space-y-4 text-[14px] text-stone-600 font-light">
              <li className="flex flex-col">Darpan Art Gallery, Pune <span className="text-xs text-stone-400 mt-1">2017</span></li>
              <li className="flex flex-col">Kalavishwa Group Exhibition, Pune <span className="text-xs text-stone-400 mt-1">2017</span></li>
              <li className="flex flex-col">Tulika Art Gallery, Pune <span className="text-xs text-stone-400 mt-1">2017</span></li>
              <li className="flex flex-col">Yashvantrao Chavan Art Gallery, Pune <span className="text-xs text-stone-400 mt-1">2016</span></li>
              <li className="flex flex-col">Balgandharva Art Gallery, Pune <span className="text-xs text-stone-400 mt-1">2015</span></li>
              <li className="flex flex-col">Tulika Art Gallery, Pune <span className="text-xs text-stone-400 mt-1">2015</span></li>
            </ul>
          </div>

          {/* Selections card */}
          <div className="bg-white p-8 border-t-4 border-[#B0893E] shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-serif text-[#2c241b] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B0893E]"></span> Selections
            </h2>
            <ul className="space-y-4 text-[14px] text-stone-600 font-light">
              <li className="flex flex-col">Lokmanya Tilak All India Art Exhibition <span className="text-xs text-[#B0893E] mt-1">2017</span></li>
              <li className="flex flex-col">Kalavishwa Competition <span className="text-xs text-[#B0893E] mt-1">2017</span></li>
              <li className="flex flex-col">SNDT Drawing Competition <span className="text-xs text-[#B0893E] mt-1">2017</span></li>
              <li className="flex flex-col">State Art Competition <span className="text-xs text-[#B0893E] mt-1">2017</span></li>
              
              {/* Splitted multi-year selections into single years */}
              <li className="flex flex-col">Dinkar Thopte Competition <span className="text-xs text-[#B0893E] mt-1">2016</span></li>
              <li className="flex flex-col">Dinkar Thopte Competition <span className="text-xs text-[#B0893E] mt-1">2015</span></li>
              <li className="flex flex-col">State Art Competition <span className="text-xs text-[#B0893E] mt-1">2015</span></li>
              <li className="flex flex-col">State Art Competition <span className="text-xs text-[#B0893E] mt-1">2014</span></li>
              <li className="flex flex-col">Pune Biennale <span className="text-xs text-[#B0893E] mt-1">2014</span></li>
            </ul>
          </div>

          {/* Awards card */}
          <div className="bg-white p-8 border-t-4 border-[#2c241b] shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-2">
            <h2 className="text-xl font-serif text-[#2c241b] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#2c241b]"></span> Awards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-[14px] text-stone-600 font-light">
                <li className="flex flex-col">Sai Kala Mahavidyalay On The Spot Landscape Competition Award <span className="text-xs text-stone-400 mt-1">2018</span></li>
                <li className="flex flex-col">Sai Kala Mahavidyalay On The Spot Landscape Competition Award <span className="text-xs text-stone-400 mt-1">2017</span></li>
              </ul>
              <ul className="space-y-4 text-[14px] text-stone-600 font-light">
                <li className="flex flex-col">SNDT Drawing Competition Award <span className="text-xs text-stone-400 mt-1">2017</span></li>
                
                {/* Splitted multi-year awards into single years */}
                <li className="flex flex-col">Bharati Vidyapeeth College of Fine Art Annual Art Exhibition Award <span className="text-xs text-stone-400 mt-1">2015</span></li>
                <li className="flex flex-col">Bharati Vidyapeeth College of Fine Art Annual Art Exhibition Award <span className="text-xs text-stone-400 mt-1">2014</span></li>
              </ul>
            </div>
          </div>

          {/* Workshops card */}
          <div className="bg-white p-8 border-t-4 border-[#B0893E] shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-serif text-[#2c241b] mb-6 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B0893E]"></span> Workshops
            </h2>
            <ul className="space-y-4 text-[14px] text-stone-600 font-light">
              <li className="flex flex-col">Tifa Working Studio Workshop for Kochi Biennale <span className="text-xs text-[#B0893E] mt-1">2016</span></li>
              <li className="flex flex-col">Etching and Aquatint Workshop Organized by Bharti Vidyapeeth College of Fine Art <span className="text-xs text-[#B0893E] mt-1">2014</span></li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
}
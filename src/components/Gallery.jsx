export default function Gallery() {
  

  const artworks = [
    { id: 1, title: "Untitled", medium: "Pen and ink on canvas", size: "24\" x 30\"", imgUrl: "/gallery/p1.jpeg" },
    { id: 2, title: "Untitled", medium: "Pen and ink on canvas", size: "24\" x 24\"", imgUrl: "/gallery/p2.jpeg" },
    { id: 3, title: "Untitled", medium: "Pen and ink on canvas", size: "24\" x 30\"", imgUrl: "/gallery/p3.jpeg" },
    { id: 4, title: "Untitled", medium: "Pen and ink on canvas", size: "18\" x 24\"", imgUrl: "/gallery/p4.jpeg" },
    { id: 5, title: "Untitled", medium: "Pen and ink on canvas", size: "18\" x 24\"", imgUrl: "/gallery/p5.jpeg" },
    { id: 6, title: "Untitled", medium: "Pen and ink on canvas", size: "24\" x 20\"", imgUrl: "/gallery/p6.jpeg" },
    { id: 7, title: "Untitled", medium: "Pen and ink on canvas", size: "18\" x 24\"", imgUrl: "/gallery/p7.jpeg" },
    { id: 8, title: "Untitled", medium: "Pen and ink on canvas", size: "15\" x 20\"", imgUrl: "/gallery/p8.jpeg" }
  ];

    return (
   
    <div id="gallery" className="py-24 px-6 md:px-12 bg-[#EAE8E3]">
      

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-serif text-[#2c241b] mb-4">
          Featured Artworks
        </h2>
        <div className="w-16 h-[2px] bg-yellow-600/60 mx-auto"></div>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 max-w-7xl mx-auto space-y-6">
        
        {artworks.map((art) => (
          <div 
            key={art.id} 
            className="break-inside-avoid relative group overflow-hidden bg-white shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
          >
            
            <img 
              src={art.imgUrl} 
              alt="Sunil Suryawanshi original pen and ink artwork" 
              className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
            />
            
          
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
              
              <h3 className="text-white text-2xl md:text-3xl font-serif tracking-wide mb-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {art.title}
              </h3>
              
              <p className="text-gray-300 text-sm md:text-base font-sans font-light tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                {art.medium} <span className="text-yellow-500 mx-2">|</span> {art.size}
              </p>
              
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
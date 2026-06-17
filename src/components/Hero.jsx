export default function Hero() {
  return (
    <div 
      className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/gallery/main.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        <img
          src="./gallery/Sunil.jpeg"
          alt="Sunil Suryawanshi original pen and ink artwork"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-neutral-300 shadow-2xl object-cover mb-4"
        />

        
        <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-wide">
          Sunil Suryawanshi
        </h1>
        
        <p className="mt-2 text-lg md:text-xl text-neutral-300 font-light">
           Fine Artist (Maharashtra)
        </p>

      </div>
    </div>
  );
}
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#2c241b] text-white py-4 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center shadow-md">
      
      <div className="mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-2xl font-serif tracking-widest uppercase">Sunil Suryawanshi</h1>
        <p className="text-xs text-neutral-400">Fine Art Portfolio</p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 text-sm font-light uppercase">
        <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
        <Link to="/guestbook" className="hover:text-yellow-500 transition-colors">Guestbook</Link>
        <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
        
        
      </div>

    </nav>
  );
}
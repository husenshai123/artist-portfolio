import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#2c241b] text-white/80 py-10 px-6 md:px-12 text-sm font-light mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Artist Copyright */}
        <div className="text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Sunil Suryawanshi. All rights reserved.</p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex gap-6 uppercase tracking-wider text-xs">
          <Link to="/" className="hover:text-yellow-500 transition-colors">Home</Link>
          <Link to="/guestbook" className="hover:text-yellow-500 transition-colors">Guestbook</Link>
          <Link to="/contact" className="hover:text-yellow-500 transition-colors">Contact</Link>
        </div>

        {/* Right Side: Tera Developer Credit 🔥 */}
        <div className="text-center md:text-right text-xs text-white/50">
          <p>
            Designed & Developed by{' '}
            <a 
                href="https://www.linkedin.com/in/husen-shaikh-71708737b" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-600 hover:text-yellow-500 transition-colors font-medium tracking-wide"
>
              Husen Aslam Shaikh
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact'; 
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';

function App(){
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-neutral-50 text-neutral-900">
        <Navbar /> 
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Gallery />
              <About />
            </main>
          } />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/contact" element={<Contact />} /> 
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
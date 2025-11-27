import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#pricing', label: 'Pricing' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="text-3xl font-bold text-white">KaziFlow</a>
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-lg text-gray-300 hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300">Sign Up</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/30 backdrop-blur-xl">
          <nav className="flex flex-col items-center space-y-4 py-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl text-gray-300 hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
             <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300 text-xl mt-4">Sign Up</button>
          </nav>
        </div>
      )}
    </header>
  );
}
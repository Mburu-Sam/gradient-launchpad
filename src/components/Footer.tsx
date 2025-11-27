import { Twitter, Linkedin, Github } from 'lucide-react';

const socialLinks = [
  { icon: Twitter, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Github, href: '#' },
];

const footerLinks = [
    { href: '#', label: 'About Us' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#', label: 'Privacy Policy' },
    { href: '#', label: 'Terms of Service' },
    { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
                <h3 className="text-2xl font-bold text-white mb-2">KaziFlow</h3>
                <p>&copy; 2025 KaziFlow. All rights reserved.</p>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 md:mb-0">
                {footerLinks.map(link => (
                    <a key={link.label} href={link.href} className="hover:text-white transition-colors">
                        {link.label}
                    </a>
                ))}
            </nav>
            <div className="flex justify-center space-x-6">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} className="hover:text-white transition-colors">
                        <link.icon size={24} />
                    </a>
                ))}
            </div>
        </div>
      </div>
    </footer>
  );
}
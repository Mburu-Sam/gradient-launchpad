import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="bg-gray-900">
      <Toaster richColors position="top-center" />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
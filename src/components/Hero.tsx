import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/847428a0-97e6-4d0a-8ff1-bcd9719d6f88/hero-background-on6vn0q-1764230372918.webp')" }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 tracking-tight"
        >
          Streamline Your Workflow with KaziFlow
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8"
        >
          The ultimate SaaS platform designed for African businesses to enhance productivity, foster collaboration, and drive growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transform hover:scale-105 transition-all duration-300">
            Get Started for Free
          </button>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function Contact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Subscription successful! Welcome to the KaziFlow community.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Get in Touch</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Have questions or want to learn more? Drop us a line.</p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Contact Us</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" id="name" placeholder="Your Name" required className="w-full bg-white/10 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" id="email" placeholder="Your Email" required className="w-full bg-white/10 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" placeholder="Your Message" rows={4} required className="w-full bg-white/10 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300">Send Message</button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">Get the latest updates on features, tutorials, and special offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                    <label htmlFor="newsletter-email" className="sr-only">Email</label>
                    <input type="email" id="newsletter-email" placeholder="Enter your email" required className="w-full bg-white/10 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <button type="submit" className="w-full bg-white/20 text-white py-3 rounded-lg font-semibold hover:bg-white/30 transition-all duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
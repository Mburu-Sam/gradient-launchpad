import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: 'KaziFlow has revolutionized how our team collaborates. The project management tools are intuitive and have significantly boosted our productivity.',
    name: 'Amina Yusuf',
    title: 'CEO, Zuri Innovations',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/847428a0-97e6-4d0a-8ff1-bcd9719d6f88/avatar1-y4g6r1g-1764230380699.webp',
  },
  {
    quote: 'As a marketing agency, we juggle multiple clients. KaziFlow helps us stay organized and deliver results on time, every time.',
    name: 'Chinedu Okoro',
    title: 'Marketing Director, Asante Creative',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/847428a0-97e6-4d0a-8ff1-bcd9719d6f88/avatar2-vis34he-1764230387774.webp',
  },
  {
    quote: 'The learning curve was surprisingly gentle. My team was up and running in a day, and the support has been fantastic.',
    name: 'Lerato Mokoena',
    title: 'Lead Developer, Imani Tech',
    avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/847428a0-97e6-4d0a-8ff1-bcd9719d6f88/avatar3-ob7ilyk-1764230394719.webp',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Loved by Teams Across Africa</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Don't just take our word for it. Here's what our customers have to say.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-lg"
            >
              <p className="text-gray-300 text-lg mb-6">'{testimonial.quote}'</p>
              <div className="flex items-center">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover mr-4" />
                <div>
                  <p className="font-bold text-white text-lg">{testimonial.name}</p>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
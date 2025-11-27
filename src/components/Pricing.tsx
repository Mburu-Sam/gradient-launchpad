import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Harambee (Starter)',
    price: 'Free',
    features: ['Up to 5 users', 'Basic task management', 'Community support'],
    cta: 'Start for Free',
    popular: false,
  },
  {
    name: 'Jenga (Business)',
    price: '$49',
    features: [
      'Up to 25 users',
      'Advanced project tracking',
      'Priority email support',
      'Team collaboration tools',
    ],
    cta: 'Choose Plan',
    popular: true,
  },
  {
    name: 'Soko (Enterprise)',
    price: 'Custom',
    features: [
      'Unlimited users',
      'Dedicated account manager',
      '24/7 premium support',
      'Custom integrations',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">Flexible Pricing for Teams of All Sizes</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Choose a plan that fits your needs and budget. All plans are designed to scale with your business.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <motion.div 
                key={tier.name} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl flex flex-col ${tier.popular ? 'border-indigo-500' : ''}`}>
              {tier.popular && <span className="absolute top-0 right-8 -mt-4 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full">POPULAR</span>}
              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-4xl font-extrabold text-white mb-6">{tier.price}<span className="text-lg font-normal text-gray-400">{tier.price !== 'Free' && tier.price !== 'Custom' ? '/month' : ''}</span></p>
              <ul className="space-y-4 text-gray-300 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckCircle className="text-green-400 mr-3" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${tier.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
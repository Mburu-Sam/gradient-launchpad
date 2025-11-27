import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

const stats = [
  { value: '10k+', label: 'Active Users', icon: Users },
  { value: '250+', label: 'Partner Companies', icon: Briefcase },
  { value: '45%', label: 'Productivity Increase', icon: TrendingUp },
];

const StatCard = ({ stat }) => (
    <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md p-8 rounded-2xl text-center shadow-lg"
    >
        <stat.icon className="mx-auto text-indigo-400 mb-4" size={48} />
        <p className="text-4xl font-bold text-white">{stat.value}</p>
        <p className="text-lg text-gray-300 mt-2">{stat.label}</p>
  </motion.div>
);


export default function Stats() {
  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
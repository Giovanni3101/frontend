import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export function ProjectCard({
  title,
  description,
  image,
  category,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-green-600 font-semibold">{category}</span>
        <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <Link to={link}>
          <button className="mt-4 inline-flex items-center text-green-600 hover:text-green-800">
            En savoir plus
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </Link>
      </div>
    </motion.div>
  );
}

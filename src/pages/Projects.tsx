import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard';
import photoagri from '../img/istockphoto-1500695136-170667a.webp';
import energy from '../img/23f9f94f2fafda98a1e63c07b58ae78a.jpg';
import entre from '../img/PHOTO8.jpg';

export function Projects() {
  const projects = [
    {
      title: 'Agriculture Durable',
      description:
        "Projet d'agriculture moderne pour améliorer la production locale.",
      image: photoagri,
      category: 'Agriculture',
      link: '/projects/agriculture',
    },
    {
      title: 'Énergie Solaire',
      description:
        "Installation de panneaux solaires pour fournir de l'électricité aux communautés rurales.",
      image: energy,
      category: 'Énergie',
      link: '/projects/energie-renouvelable',
    },
    {
      title: 'Formation en entrepreneuriat ',
      description:
        'Programme de formation des jeunes en entrepreneuriat pour un developpement',
      image: entre,
      category: 'Education',
      link: '/projects/formation-professionnelle',
    },
  ];

  return (
    <div className="pt-24 pb-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Projets</h1>
          <p className="text-xl text-gray-600">
            Découvrez nos initiatives pour un développement durable en RDC
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

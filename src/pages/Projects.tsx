import { motion } from "framer-motion";
import { ProjectCard } from "../components/ProjectCard";
import photoagri from "../img/istockphoto-1500695136-170667a.webp";
import energy from "../img/23f9f94f2fafda98a1e63c07b58ae78a.jpg";
import entre from "../img/PHOTO8.jpg";
import village from "../img/village5.jpg"; 
import startup from "../img/PHOTO12.jpg";
import concours from "../img/concours4.jpg";

export function Projects() {
  const projects = [
    {
      title: "Agriculture Durable",
      description:
        "Projet d'agriculture moderne pour améliorer la production locale et assurer la sécurité alimentaire.",
      image: photoagri,
      category: "Agriculture",
      link: "/projects/agriculture",
    },
    {
      title: "Investir dans l'education des jeunes africains",
      description:
        "Organisation des concours en developpement des logiciels.",
      image: concours,
      category: "Éducation",
      link: "/projects/concours",
    },
    {
      title: "Énergie Solaire",
      description:
        "Installation de panneaux solaires pour fournir de l'électricité aux communautés rurales.",
      image: energy,
      category: "Énergie",
      link: "/projects/energie-renouvelable",
    },
    {
      title: "Soutien à l'Entrepreneuriat",
      description:
        "Programme de formation et accompagnement des jeunes entrepreneurs pour un impact durable.",
      image: entre,
      category: "Éducation & Économie",
      link: "/projects/formation-professionnelle",
    },
    {
      title: "Construction d’un Village Écologique",
      description:
        "Développement d’un village autosuffisant avec des infrastructures modernes et durables.",
      image: village,
      category: "Urbanisme & Habitat",
      link: "/projects/construction-village",
    },
    {
      title: "Développement de Startups Locales",
      description:
        "Soutien aux jeunes startups technologiques et industrielles pour booster l’innovation locale.",
      image: startup,
      category: "Innovation & Économie",
      link: "/projects/startups",
    }, 
  ];
  return (
    <div className="pt-32 pb-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Projets</h1>
          <p className="text-xl text-gray-600">
            Découvrez nos initiatives pour un développement en RDC
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
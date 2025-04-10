import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Comments } from '../../components/Comment';
import { ProjectCard } from '../../components/ProjectCard';
import p1 from '../../img/concours1.jpg';
import p2 from '../../img/concours2.jpg'
import p3 from '../../img/concours3.jpg'
import p4 from '../../img/concours4.jpg'
import energy from "../../img/23f9f94f2fafda98a1e63c07b58ae78a.jpg";
import entre from "../../img/PHOTO8.jpg"

export function Web() {
  const projects = [
    {
      title: 'Énergie Solaire',
      description: "Installation de panneaux solaires pour fournir de l'électricité aux communautés rurales.",
      image: energy,
      category: 'Énergie',
      link: '/projects/energie-renouvelable',
    },
    {
      title: 'Formation en entrepreneuriat ',
      description:
        'Programme de formation des jeunes en entrepreneuriat pour le developpement de la ville',
      image: entre,
      category: 'Education',
      link: '/projects/formation-professionnelle'
    },
  ];

  return (
    <div className='pt-20 mt-10 bg-gray-300 form'>
      <div className='md:grid md:grid-cols-2'>
        <div className='md:max-h-[80vh]'>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className='md:px-8'>
              <img src={p4} alt="concours" className='w-full mr-[-100px]' />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className='md:mx-8 overflow-x-auto py-4'>
              <div className='flex space-x-4'>
                <img src={p1} alt="concours" className='md:min-w-48 md:min-h-48 min-w-[80%] h-48 text-white flex items-center justify-center shadow-md' />
                <img src={p2} alt="concours" className='md:min-w-48 md:min-h-48 min-w-[80%] h-48 text-white flex items-center justify-center shadow-md' />
                <img src={p3} alt="concours" className='md:min-w-48 md:min-h-48 min-w-[80%] h-48 text-white flex items-center justify-center shadow-md' />
              </div>
            </div>
          </motion.div>
        </div>
        <div className='md:mx-10 mb-[-40px]'>
          <section className="bg-green-100" id="about">
            <div className="md:min-h-[80vh] px-6 mx-auto py-4 sm:px-6 lg:px-8 bg-green-100 md:border-4 border-green-600">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="lg:text-center text-base text-green-600 font-semibold tracking-wide uppercase border-double">
                  Notre Impact
                </h2>
                <p className="lg:text-center mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  concours en develloppement des logiciels
                </p>
                <p className='md:mt-14 mt-6'>
                  MVWAssociation est une association des jeunes conscients, ambitieux près pour le changement positif et intégral de toute la communauté de congolaise et surtout de la communauté de la ville de GOMA avec quatre départements; la science et technologie, l'art, l'humanisme et la politique
                  MVWAssociation est une association des jeunes conscients, ambitieux près pour le changement positif et intégral de toute la communauté de congolaise et surtout de la communauté de la ville de GOMA avec quatre départements; la science et technologie, l'art, l'humanisme et la politique
                  MVWAssociation est une association des jeunes conscients, ambitieux près pour le changement positif et intégral de toute la communauté de congolaise et surtout de la
                </p>
              </motion.div>
            </div>
          </section>
        </div>

      </div>
      <section className="md:mb-20 pb-20 items-center bg-green-900">
        <div className="max-w-7xl max-w-7xl mx-auto">
          <div className="m-10 space-y-2 px-2 md:space-y-0 md:grid md:gap-x-4 md:gap-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className=""
            >
              <h3 className="text-2xl text-green-600 mt-6 border-b border-b-4 mb-6 text-center pb-3 pt-6">AUTRES PROJETS</h3>
            </motion.div>
          </div>

          <div className="md:mx-40 mx-4 grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to='/projects'>
              <button
                className="w-1/2 bg-green-600 mx-auto mt-10 mb-[-30px] text-white flex justify-center align-center text-center px-3 py-2 rounded-md hover:bg-green-700"
              >
                Voir plus
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="pb-12 pt-12 md:mt-[-80px]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Comments projectId="concours"/>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
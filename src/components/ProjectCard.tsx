import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { useState } from 'react';

Modal.setAppElement('#root');

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
  const [modalIsOpen, setModalIsOpen] = useState(false);

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

      {/* Bouton qui ouvre le modal */}
      <div className="p-6">
        <button
          onClick={() => setModalIsOpen(true)}
          className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700"
        >
          PARTICIPER
        </button>

        {/* Modal d'alerte avec options */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Choisissez une action</h2>
            <p className="text-gray-600 mb-4">Souhaitez-vous vous abonner à notre newsletter ou faire un don ?</p>

            <div className="flex justify-between">
              <Link to="/#newsletter">
                <button className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-600">
                  S'abonner
                </button>
              </Link>
              <Link to="/donate">
                <button className="bg-green-900 text-white px-4 py-2 rounded-md hover:bg-green-400">
                  Faire un don
                </button>
              </Link>
            </div>

            <button
              onClick={() => setModalIsOpen(false)}
              className="mt-8 block w-full text-center text-white hover:text-gray-700 bg-red-500 p-2 rounded-lg"
            >
              Annuler
            </button>
          </div>
        </Modal>
      </div>
    </motion.div>
  );
}
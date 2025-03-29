import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import {
  Leaf,
  Sun,
  Wind,
  Book,
  Activity,
  Badge,
  Heart,
  Star,
  Loader,
} from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { PartnerCard } from '../components/PartnerCard';
import { NewsletterForm } from '../components/NewsletterForm';
import { Chat } from '../components/Chat';
import photoagri from '../img/istockphoto-1500695136-170667a.webp';
import photo10 from '../img/PHOTO17.png';
import values from '../img/GettyImages-682151958.jpg';
import energy from '../img/23f9f94f2fafda98a1e63c07b58ae78a.jpg';
import entre from '../img/PHOTO8.jpg';
import FILLE2 from "../img/fille.jpg"
import BRO1 from "../img/kev.jpg"
// 061475162988-web-tete-3dm0ek4nrtcistznyl0mps.jpeg
// 30551-mi-1200x630-black-entrepreneur.webp
// GettyImages-682151958.jpg

export function Home() {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true });

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
        'Programme de formation des jeunes en entrepreneuriat pour les un developpement des micro entreprises de la ville.',
      image: entre,
      category: 'Education',
      link: '/projects/formation-professionnelle',
    },
  ];

  const partners = [
    {
      name: 'EcoTech Solutions',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: "Partenaire pour les solutions d'énergie renouvelable",
      linkPartner: 'https://gitutechnology.onrender.com',
    },
    {
      name: 'Green Future',
      logo: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: "Organisation de protection de l'environnement",
      linkPartner: 'https://greenfuture.com',
    },
    {
      name: 'Agri Innovation',
      logo: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Expert en agriculture moderne et durable',
      linkPartner: 'https://agriinnovation.com',
    },
  ];

  const testimonials = [
    {
      name: "Kethia mwenge",
      location: "Kalemie, Tanganyika",
      story:
        "Grâce à Impact Eco Groupe, notre village a désormais accès à l’eau potable et à l’éducation pour nos enfants. Nous avons retrouvé l’espoir !",
      image: FILLE2,
    },
    {
      name: "isaac shema",
      location: "Matadi, Kongo-centrale",
      story:
        "J’ai reçu un soutien pour lancer mon petit commerce. Aujourd’hui, je peux subvenir aux besoins de ma famille. Merci !",
      image: BRO1,
    },
    {
      name: "Nathy Mahamba",
      location: "goma, nord-kivu",
      story:
        "Nos enfants peuvent enfin aller à l’école sans marcher des kilomètres. Un immense merci pour cette aide précieuse !",
      image: FILLE2,
    },
    {
      name: "Kevin Mulemberi",
      location: "ariwara, haut-uelé",
      story:
        "Grâce à Impact Eco Groupe, notre village a désormais accès à l’eau potable et à l’éducation pour nos enfants. Nous avons retrouvé l’espoir !",
      image: BRO1,
    },
    {
      name: "Giovanni MHS",
      location: "rutsuru, nord-kivu",
      story:
        "J’ai reçu un soutien pour lancer mon petit commerce. Aujourd’hui, je peux subvenir aux besoins de ma famille. Merci !",
      image: BRO1,
    },
    {
      name: "Faty kambasu",
      location: "walikale, nord-kivu",
      story:
        "Nos enfants peuvent enfin aller à l’école sans marcher des kilomètres. Un immense merci pour cette aide précieuse !",
      image: FILLE2,
    },
    {
      name: "Giovanni MHS",
      location: "rutsuru, nord-kivu",
      story:
        "J’ai reçu un soutien pour lancer mon petit commerce. Aujourd’hui, je peux subvenir aux besoins de ma famille. Merci !",
      image: BRO1,
    },
    {
      name: "Faty kambasu",
      location: "walikale, nord-kivu",
      story:
        "Nos enfants peuvent enfin aller à l’école sans marcher des kilomètres. Un immense merci pour cette aide précieuse !",
      image: FILLE2,
    },
    {
      name: "Giovanni MHS",
      location: "rutsuru, nord-kivu",
      story:
        "J’ai reçu un soutien pour lancer mon petit commerce. Aujourd’hui, je peux subvenir aux besoins de ma famille. Merci !",
      image: BRO1,
    },
    {
      name: "Faty kambasu",
      location: "walikale, nord-kivu",
      story:
        "Nos enfants peuvent enfin aller à l’école sans marcher des kilomètres. Un immense merci pour cette aide précieuse !",
      image: FILLE2,
    },
  ];
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Nettoyer l'intervalle au démontage
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide(); // Éviter les doublons
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const images = [
    "../src/img/wp2916561.webp",
    "../src/img/30551-mi-1200x630-black-entrepreneur.webp",
    "../src/img/concours2.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  const backgroundSlider = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  }

  backgroundSlider()
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-16 items-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="mt-10 text-lg text-gray-900 sm:text-4xl md:text-6xl">
              <span className="block text-white">Innovation Durable en</span>
              <span className="block text-green-600 font-extrabold">
                République Démocratique du Congo
              </span>
            </h1>
            <p className="styleTexte relative rounded-full border-2 p-4 mt-8 mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Ensemble, construisons un avenir durable à travers des projets
              innovants en agriculture moderne, transformation écologique et
              développement socio-économique.
            </p>
            <div className="mt-6 mx-auto sm:flex sm:justify-center md:mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="rounded-md shadow"
              >
                <a
                  href="#projects"
                  className="bpp flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
                >
                  Découvrir nos projets
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3"
              >
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Nous contacter
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* About section */}
      <section className="min-h-screen grid md:grid-cols-2 items-center bg-gray-100">
        <div className="mx-auto px-2 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl text-green-600 mt-6">Qui sommes-nous ?</h3>
            <p className="mt-5 mb-10 text-black ">
              Nous sommes un cabinet de développement engagé dans la
              construction d’un avenir plus prospère et durable en RDC. Nous
              mobilisons les ressources et les partenariats nécessaires pour
              l’implémentation de projets socio-économiques durables en
              République Démocratique du Congo.
            </p>
            <div className="">
              <img src={photo10} alt="about" className="w-120 md:h-96" />
            </div>
          </motion.div>
        </div>
        <div className="border-l-8 border-green-800 space-y-4 m-14 px-2 md:space-y-0 md:grid md:gap-x-8 md:gap-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-24 w-12 rounded-md bg-gray-400 text-white">
              <Heart className="h-6 w-6 text-green-900" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-green-800">
              Engagés pour l’Afrique
            </p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              En tant que catalyseur de projets de développement, nous sommes
              profondément engagés pour le développement socio-économique
              durable de l’Afrique.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-24 w-12 rounded-md bg-gray-400 text-white">
              <Star className="h-6 w-6 text-green-900" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-green-800">
              Pour un avenir durable
            </p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              Notre mission est d’identifier les défis et opportunités
              économiques locales, et de mettre en place des projets de
              développement innovants. développement développement
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute flex items-center justify-center h-24 w-12 rounded-md bg-gray-400 text-white">
              <Loader className="h-6 w-6 text-green-900" />
            </div>
            <p className="ml-16 text-lg leading-6 font-medium text-green-800">
              Pour une RDC plus prospère
            </p>
            <p className="mt-2 ml-16 text-base text-gray-500">
              Nous collaborons avec les organisations internationales et
              mobilisons les ressources nécessaires pour la mise en œuvre de
              projets socio-économiques durables en RDC.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-12 bg-white border-t-2 border-b-2 border-dashed border-green-600"
        id="about"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:text-center"
          >
            <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase border-double">
              Notre Impact
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Un Développement Durable pour la RDC
            </p>
          </motion.div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Leaf className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Agriculture Moderne
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Nous formons les agriculteurs aux techniques agricoles
                  durables afin d’améliorer la productivité de leurs sols.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Sun className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Énergie Renouvelable
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Nous promouvons l’utilisation des énergies renouvelables pour
                  un avenir énergétique plus durable en RDC.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Wind className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Entrepreneuriat
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Nous formons et soutenons les entrepreneurs locaux qui œuvrent
                  à résoudre les problèmes de la communauté.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Book className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Education et la formation
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Nous contribuons à l’amélioration de l’éducation et de la
                  formation des jeunes dans la région du Kasaï-Central.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Badge className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Partenariats
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Nous travaillons avec des organisations internationales pour
                  apporter des expertises aux projets locaux et promouvoir le
                  développement durable en RDC.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="relative"
              >
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                  <Activity className="h-6 w-6" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Conseil stratégique
                </p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Nous fournissons des conseils stratégiques pour développer
                  l’économie locale et attirer des investissements en RDC{' '}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values setction */}
      <section className="grid md:grid-cols-2 items-center bg-green-900">
        <div className="max-w-7xl max-w-7xl mx-auto">
          <div className="m-10 space-y-2 px-2 md:space-y-0 md:grid md:gap-x-4 md:gap-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <h3 className="text-2xl text-green-600 mt-6 border-b border-b-4 mb-6 text-center pb-3">
                NOS VALEURS
              </h3>
              <div className="bg-white p-4 rounded-full absolute flex items-center justify-center text-white">
                <Heart className="h-6 w-6 text-black" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-600">
                Engagés pour l’Afrique
              </p>
              <p className="mt-2 ml-16 text-base text-white">
                En tant que catalyseur de projets de développement, nous sommes
                profondément engagés pour le développement socio-économique
                durable de l’Afrique.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-full absolute flex items-center justify-center bg-gray-400 text-white">
                <Star className="h-6 w-6 text-black" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-600">
                Pour un avenir durable
              </p>
              <p className="mt-2 ml-16 text-base text-white">
                Notre mission est d’identifier les défis et opportunités
                économiques locales, et de mettre en place des projets de
                développement innovants. développement
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative"
            >
              <div className="bg-white p-4 rounded-full absolute flex items-center justify-center bg-gray-400 text-white">
                <Loader className="h-6 w-6 text-black" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-600">
                Pour une RDC plus prospère
              </p>
              <p className="mt-2 ml-16 text-base text-white">
                Nous collaborons avec les organisations internationales et
                mobilisons les ressources nécessaires pour la mise en œuvre de
                projets socio-économiques durables en RDC.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="mx-auto px-2 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className="md:mt-10 mb-10">
              <img src={values} alt="about" className="w-120 md:h-96" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        className="py-12 bg-gray-50 border-t-2 border-dashed border-green-600"
        id="projects"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900">
              Nos Projets
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Découvrez nos initiatives pour un avenir plus durable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partner py-12 bg-white" id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-white">
              Nos Partenaires
            </h2>
            <p className="mt-4 text-lg text-white">
              Ensemble pour un impact durable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <PartnerCard key={index} {...partner} />
            ))}
          </div>
        </div>
      </section>

      <div className="w-full">
        {isMobile ? (
          <div className="p-8 bg-green-50">
            <div>
              <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase border-double">
                Temoignage
              </h2>
              <p className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Decouvrez quelques temoignages
              </p>
            </div>
              <div className="max-w-xl pl-6 pr-6 pt-6 pb-6 bg-white shadow-lg mt-5">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='flex space-x-6 align-center justify-center border-tl-full border-bl-full'>
                    <div className=''>
                      <img
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        className="rounded-full border-4 border-green-500"
                      />
                    </div>
                    <div className=''>
                      <h3 className="mt-4 text-lg font-bold text-black border-b">
                        {testimonials[index].name}
                      </h3>
                      <p className="text-sm text-green-600">{testimonials[index].location}</p>
                      <p className="mt-3 text-gray-800 italic">"{testimonials[index].story}"</p>
                    </div>
                  </div>
                </motion.div>
              </div>
          </div>
        ) : (

          <div className='bg-green-50 pt-8'>
            <h2 className="text-center text-base text-green-600 font-semibold tracking-wide uppercase border-double">
              Temoignage
            </h2>
            <p className="text-center mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Decouvrez quelques temoignages
            </p>
            <AnimatePresence mode="wait">
              <div className="relative max-w-3xl mt-10 mx-auto p-6 bg-white shadow-lg rounded-tl-full rounded-bl-full" onMouseEnter={stopAutoSlide}
                onMouseLeave={startAutoSlide}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className='flex space-x-6 align-center justify-center border-tl-full border-bl-full'>
                    <div>
                      <img
                        src={testimonials[index].image}
                        alt={testimonials[index].name}
                        className="w-[300px] h-[200px] mx-auto rounded-full border-4 border-green-500"
                      />
                    </div>
                    <div>
                      <h3 className="mt-4 text-lg font-bold text-black border-b">
                        {testimonials[index].name}
                      </h3>
                      <p className="text-sm text-green-600">{testimonials[index].location}</p>
                      <p className="mt-3 text-gray-800 italic">"{testimonials[index].story}"</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatePresence>

          </div>

        )}
      </div>


      {/* Newsletter Section */}
      <section className="py-12 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterForm />
          </div>
        </motion.div>
      </section>
      <Chat />
    </div>
  );
}

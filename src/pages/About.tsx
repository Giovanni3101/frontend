import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Target,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Calendar,
  User,

} from 'lucide-react';

import t1 from '../img/t-3.png';
import t2 from '../img/t-5.jpg';
import t3 from '../img/t-3.png';
import foret from '../img/foret.jpg';
import foret1 from '../img/PORI.webp';
import group from '../img/GettyImages-682151958.jpg'
import back from '../img/enfant.jpg';
import reb from '../img/reb.jpg';
import reb2 from '../img/reb2.jpg';
import reb3 from '../img/REB3.jpg';
import vision from '../img/30551-mi-1200x630-black-entrepreneur.webp'
import values from '../img/GettyImages-682151958.jpg';
import { Chat } from "../components/Chat";

export function About() {
  const stats = [
    { label: 'Projets réalisés', value: '50+' },
    { label: 'Communautés impactées', value: '100+' },
    { label: 'Partenaires', value: '25+' },
    { label: "Années d'expérience", value: '10+' },
  ];

  const moment = [
    {
      id: 1,
      title: "Lancement du programme de reboisement",
      excerpt: "Organisation d'un forum économique à Génève en partenariat avec la chambre de commerce de Génève",
      date: "15 Mars 2024",
      image: reb,
    },
    {
      id: 2,
      title: "Organisation d'un forum",
      excerpt: "Organisation d'un forum économique à Génève en partenariat avec la chambre de commerce de Génève",
      date: "12 Mars 2024",
      image: reb2,
    },
    {
      id: 3,
      title: "Énergies renouvelables : un avenir prometteur",
      excerpt: "Les perspectives de développement des énergies renouvelables en RDC...",
      date: "12 Mars 2024",
      image: reb3,
    },
  ];

  const team = [
    {
      name: 'Dr. Jean Mukendi',
      role: 'Directeur Général',
      image: t1,
      bio: "Expert en développement durable avec plus de 15 ans d'expérience",
    },
    {
      name: 'Marie Kabongo',
      role: 'Directrice des Projets',
      image: t2,
      bio: 'Spécialiste en gestion de projets environnementaux',
    },
    {
      name: 'Esther Kasongo',
      role: 'Responsable Innovation',
      image: t3,
      bio: "Innovateur en solutions durables pour l'Afrique",
    },
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description:
        "Nous visons l'excellence dans tous nos projets et initiatives.",
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'Nous croyons en la force de la collaboration et du partenariat.',
    },
    {
      icon: Target,
      title: 'Impact',
      description:
        "Nous mesurons notre succès par l'impact positif sur les communautés.",
    },
    {
      icon: Clock,
      title: 'Durabilité',
      description:
        'Nous créons des solutions durables pour les générations futures.',
    },
  ];

  return (

    <div className="">
      <section className="relative h-[80vh] bg-cover bg-center bg-contain" style={{ backgroundImage: `url(${back})` }}>
        <div className="absolute inset-0 bg-black opacity-50">
        </div>
        <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center text-white pt-20"
          >
            <h2 className="relative text-4xl font-bold sm:text-5xl mb-4">
              Notre Impact Social
            </h2>
            <p className="relative text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
              En tant qu'entreprise responsable, nous mettons un point d'honneur à transformer nos actions en solutions concrètes et durables. Découvrez comment nous contribuons à un avenir plus radieux et prospère.
            </p>

            <a
              href="/projects"
              className="relative inline-block bg-green-500 text-white px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-green-600 transition duration-300"
            >
              Découvrez-nous
            </a>
          </motion.div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:grid md:grid-cols-2"
          >
            <h1 className="my-auto text-cneter text-4xl font-bold text-green-600 sm:text-5xl">
              Notre Histoire
            </h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Depuis notre création, nous œuvrons pour un développement durable et inclusif en République Démocratique du Congo. Nous avons grandi
              avec l'engagement de transformer nos défis locaux en solutions innovantes et accessibles pour tous.
            </p>
          </motion.div>
        </div>
      </section>

      < section className="grid md:grid-cols-2 items-center bg-white-900" >
        <div className="mx-auto px-2 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center"
          >
            <div className="md:mt-10 mb-10">
              <img src={foret} alt="about" className="" />
            </div>
          </motion.div>
        </div>
        <div className="max-w-7xl max-w-7xl mx-auto">
          <div className="m-10 space-y-2 px-2 md:space-y-0 md:grid md:gap-x-4 md:gap-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              Dès le début, nous avons compris que pour avoir un véritable impact, il fallait allier innovation et respect des traditions. C’est ainsi
              que nos premières initiatives ont ciblé des solutions écologiques et durables. L'une de nos premières actions a été le lancement de
              projets de reboisement pour contrer la déforestation qui menaçait notre écosystème. Grâce à la collaboration avec les communautés
              locales, ces initiatives ont permis de restaurer des hectares de forêt, tout en créant des opportunités économiques et éducatives pour
              des milliers de familles.
            </motion.div>
          </div>
        </div>
      </section >

      < section className="mt-[-80px] grid md:grid-cols-2 items-center bg-white-900" >
        <div className="max-w-7xl max-w-7xl mx-auto">
          <div className="m-10 space-y-2 px-2 md:space-y-0 md:grid md:gap-x-4 md:gap-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              L’histoire de notre entreprise commence à un moment où la République Démocratique du Congo était confrontée à des défis majeurs sur
              le plan économique, environnemental et social. Avec une volonté commune de redonner à notre communauté et de créer des solutions
              pérennes, nous avons fondé impact eco group en 2012. Nous avons démarré modestement, mais avec une vision
              ambitieuse : celle de construire une entreprise résolument tournée vers l'avenir et en phase avec les besoins réels du terrain.

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
              <img src={foret1} alt="about" className="" />
            </div>
          </motion.div>
        </div>
      </section>

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
                <Award className="h-6 w-6 text-black" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-600">
                Excelence
              </p>
              <p className="mt-2 ml-16 text-base text-white">
                Nous visons l'excellence dans tous nos projets et initiatives.
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
                <Clock className="h-6 w-6 text-black" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-600">
                Durabilité
              </p>
              <p className="mt-2 ml-16 text-base text-white">
                Des experts passionnés par le développement durable
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
                <Users className="h-6 w-6 text-black" />
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-green-600">
                Collaboration
              </p>
              <p className="mt-2 ml-16 text-base text-white">
                Nous croyons en la force de la collaboration et du partenariat.
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
              <img src={group} alt="about" className="w-120 md:h-" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision de l'avenir */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900" >Notre Vision</h2>
        <div className='md:flex m-6 md:space-x-10'>
          <img src={vision} alt="" className='mx-auto w-[640px] rounded-[20px]'/>
        <p className="py-2 px-2 border-2 rounded-[20px] mt-4 text-black mx-auto bg-green-50 text-center justify-center md:py-24 md:px-6">
          Nous envisageons un avenir où chaque Congolais, quelle que soit sa situation, a accès à un environnement sain, à des opportunités
          économiques et à des solutions durables. Notre mission va au-delà de la simple création d'emplois : nous cherchons à éduquer,
          autonomiser et offrir à chacun les moyens de participer activement à la construction d'un avenir meilleur. Nous croyons fermement
          que l’innovation locale est la clé pour relever les défis mondiaux.
        </p>
        </div>
      </div>

      {/* Moments clés */}
      <div className="pb-12 pt-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Moments clés</h1>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {moment.map((mom) => (
              <motion.article
                key={mom.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={mom.image}
                    alt={mom.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h2 className="mt-2 text-xl font-bold text-gray-900">
                    {mom.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{mom.excerpt}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <User className="h-4 w-4 mr-1" />
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{mom.date}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      < section className="py-12 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-green-600">
                  {stat.value}
                </div>
                <div className="mt-2 text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Team Section */}
      < section className="py-12 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Notre Équipe</h2>
            <p className="mt-4 text-xl text-gray-600">
              Des experts passionnés par le développement durable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relll w-48 h-48 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="aboutimgstyle rounded-full object-cover w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-green-600">{member.role}</p>
                <div className="flex space-x-2 justify-center mt-2">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-green-600 transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-green-600 transition-colors"
                  >
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-green-600 transition-colors"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-green-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
                <p className="mt-2 text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <Chat />
      </section >
    </div >
  );
}
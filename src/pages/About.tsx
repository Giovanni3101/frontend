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
} from 'lucide-react';
import t1 from '../img/t-3.png';
import t2 from '../img/t-5.jpg';
import t3 from '../img/t-3.png';
import { Chat } from '../components/Chat';

export function About() {
  const stats = [
    { label: 'Projets réalisés', value: '50+' },
    { label: 'Communautés impactées', value: '100+' },
    { label: 'Partenaires', value: '25+' },
    { label: "Années d'expérience", value: '10+' },
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
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Notre Histoire
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Depuis notre création, nous œuvrons pour un développement durable
              et inclusif en République Démocratique du Congo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
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
      </section>

      {/* Values Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs</h2>
            <p className="mt-4 text-xl text-gray-600">
              Les principes qui guident nos actions et décisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center">
                  <value.icon className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white">
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
      </section>
    </div>
  );
}

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import energie from '../img/23f9f94f2fafda98a1e63c07b58ae78a.jpg';
import forum from '../img/PHOTO13.jpg';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export function Blog() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "L'agriculture durable en RDC : défis et opportunités",
      excerpt: "Analyse des pratiques agricoles durables et leur impact sur le développement local...",
      date: "15 Mars 2024",
      author: "Jean Mukendi",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Agriculture"
    },
    {
      id: 2,
      title: "Organisation d'un forum",
      excerpt: "Organisation d'un forum économique à Génève en partenariat avec la chambre de commerce de Génève",
      date: "12 Mars 2024",
      author: "Kevin Mulemberi",
      image: forum,
      category: "Forum"
    },
    {
      id: 2,
      title: "Énergies renouvelables : un avenir prometteur",
      excerpt: "Les perspectives de développement des énergies renouvelables en RDC...",
      date: "12 Mars 2024",
      author: "Marie Kabongo",
      image: energie,
      category: "Énergie"
    },
    {
      id: 3,
      title: "Innovation sociale et développement communautaire",
      excerpt: "Comment l'innovation sociale transforme les communautés locales...",
      date: "10 Mars 2024",
      author: "Esther Kasongo",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      category: "Innovation"
    }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Actualités et insights sur le développement 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:gap-20 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-sm text-green-600 font-semibold">
                  {post.category}
                </span>
                <h2 className="mt-2 text-xl font-bold text-gray-900">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <User className="h-4 w-4 mr-1" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <button className="mt-4 inline-flex items-center text-green-600 hover:text-green-800">
                  Lire la suite
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
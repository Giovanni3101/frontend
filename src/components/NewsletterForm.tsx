// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { Send } from 'lucide-react';

// export function NewsletterForm() {
//   const [email, setEmail] = useState('');
//   const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Simulate newsletter subscription
//     setStatus('success');
//     setEmail('');
//     setTimeout(() => setStatus('idle'), 3000);
//   };

//   return (
//     <div className="bg-green-50 p-8 rounded-lg">
//       <h3 className="text-2xl font-bold text-gray-900 mb-4">Restez informé</h3>
//       <p className="text-gray-600 mb-6">
//         Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
//         sur nos projets.
//       </p>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="grid md:flex gap-4">
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Votre adresse email"
//             className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
//             required
//           />
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             type="submit"
//             className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
//           >
//             <Send className="h-4 w-4 mr-2" />
//             S'inscrire
//           </motion.button>
//         </div>
//         {status === 'success' && (
//           <motion.p
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-green-600"
//           >
//             Merci de votre inscription !
//           </motion.p>
//         )}
//       </form>
//     </div>
//   );
// }

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { API_BASE_URL } from '../components/config/api';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          adminEmail: 'giovannimahasano@gmail.com'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'inscription');
      }

      toast.success('Inscription réussie à la newsletter !');
      setEmail('');
    } catch (error) {
      toast.error('Erreur lors de l\'inscription à la newsletter');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Restez informé</h3>
      <p className="text-gray-600 mb-6">
        Inscrivez-vous à notre newsletter pour recevoir les dernières actualités
        sur nos projets.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:flex gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre adresse email"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center disabled:opacity-50"
          >
            <Send className="h-4 w-4 mr-2" />
            {isLoading ? 'Inscription...' : 'S\'inscrire'}
          </motion.button>
        </div>
      </form>
    </div>
  );
}

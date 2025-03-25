import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate newsletter subscription
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
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
            className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center"
          >
            <Send className="h-4 w-4 mr-2" />
            S'inscrire
          </motion.button>
        </div>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600"
          >
            Merci de votre inscription !
          </motion.p>
        )}
      </form>
    </div>
  );
}

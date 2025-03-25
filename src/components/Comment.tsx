import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function Comments() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [messageData, setMessageData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setMessageData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message submitted:', messageData);
    setMessageData({ email: '', message: '' });
    setStatus('success');
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="bg-green-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Laissez nous un commentaire
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid flex gap-2">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adresse mail"
            value={messageData.email}
            onChange={handleChange}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
          <textarea
            id="message"
            name="message"
            placeholder="Entrez ici votre commentaire"
            value={messageData.message}
            onChange={handleChange}
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
            Envoyer
          </motion.button>
        </div>
        {status === 'success' && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600"
          >
            Merci pour votre commentaire !
          </motion.p>
        )}
      </form>
    </div>
  );
}

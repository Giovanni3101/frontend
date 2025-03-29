import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { API_BASE_URL, API_ENDPOINTS } from '../components/config/api';
import { Map } from './Map'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    firstName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.contact}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'giovannimahasano@gmail.com',
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message');
      }

      toast.success('Message envoyé avec succès !');
      setFormData({
        name: '',
        firstName: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message');
      console.error('Erreur:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center md:ml-32 md:mr-32">
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        onSubmit={handleSubmit}
        className="space-y-1 mx-auto w-full bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Votre prénom"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
            Sujet
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Sujet de votre message"
            value={formData.subject}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center disabled:opacity-50 mt-6"
        >
          <Send className="h-4 w-4 mr-2" />
          {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
        </motion.button>
      </motion.form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9 }}
        className=""
      >
        <Map/>
        {/* <img src="https://maps.app.goo.gl/rAU745ETEysq1sDY8" alt="" /> */}
      </motion.div>
    </div>
  );
}
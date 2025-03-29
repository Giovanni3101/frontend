import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { API_BASE_URL } from '../components/config/api';

interface Comment {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
}

// interface CommentsProps {
//   projectId: string;
// }

// export function Comments({ projectId }: CommentsProps) {
export function Comments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          // projectId,
          adminEmail: 'giovannimahasano@gmail.com'
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du commentaire');
      }

      const newComment = await response.json();
      setComments([...comments, newComment]);
      setFormData({ name: '', email: '', message: '' });
      toast.success('Commentaire ajouté avec succès !');
    } catch (error) {
      toast.error('Erreur lors de l\'ajout du commentaire');
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
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Laissez un commentaire
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center justify-center disabled:opacity-50"
        >
          <Send className="h-4 w-4 mr-2" />
          {isLoading ? 'Envoi...' : 'Envoyer'}
        </motion.button>
      </form>

      <div className="mt-8 space-y-4">
        <h4 className="text-xl font-semibold text-gray-900 mb-4">Commentaires</h4>
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 p-4 rounded-lg"
          >
            <div className="flex items-center mb-2">
              <User className="h-5 w-5 text-gray-400 mr-2" />
              <span className="font-medium text-gray-900">{comment.name}</span>
            </div>
            <p className="text-gray-600">{comment.message}</p>
            <div className="mt-2 text-sm text-gray-500">
              {new Date(comment.createdAt).toLocaleDateString()}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Trash2, User } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Message {
  _id: string;
  content: string;
  userId: {
    email: string;
  };
  createdAt: string;
}

export function MessagesPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://serverisigsite.onrender.com/api/messages', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Erreur lors de la récupération des messages');
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      toast.error('Erreur lors du chargement des messages');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteMessage = async (messageId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://serverisigsite.onrender.com/api/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Erreur lors de la suppression');
      setMessages(messages.filter(message => message._id !== messageId));
      toast.success('Message supprimé avec succès');
    } catch (error) {
      toast.error('Erreur lors de la suppression du message');
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      <div className="grid gap-4">
        {messages.map((message) => (
          <motion.div
            key={message._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-900">
                  {message.userId.email}
                </span>
              </div>
              <button
                onClick={() => handleDeleteMessage(message._id)}
                className="text-red-600 hover:text-red-900"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-start">
              <MessageSquare className="h-5 w-5 text-gray-400 mr-2 mt-1" />
              <p className="text-gray-600">{message.content}</p>
            </div>
            <div className="mt-2 text-right">
              <span className="text-xs text-gray-500">
                {new Date(message.createdAt).toLocaleString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
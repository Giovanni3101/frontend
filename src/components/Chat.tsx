import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X, ChevronRight, User } from 'lucide-react';
import { useChatStore } from '../stores/chatStore';
import { useAuthStore } from '../stores/authStore';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { toast } from 'react-hot-toast';

export function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [guestName, setGuestName] = useState('');
  const { messages, sendMessage, fetchMessages, isLoading } = useChatStore();
  const { user } = useAuthStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isChatOpen) {
      fetchMessages();
    }
  }, [isChatOpen, fetchMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const userName = user ? user.email : guestName || 'Invité';
      await sendMessage(message, userName);
      setMessage('');
      toast.success('Message envoyé');
    } catch (error) {
      toast.error('Erreur lors de l\'envoi du message');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700"
      >
        {isChatOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </motion.button>

      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl border border-gray-200"
        >
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold">Chat avec nous</h3>
            <p className="text-sm text-gray-500">
              Nous sommes là pour vous aider!
            </p>
          </div>
          <div className="h-64 p-4 overflow-y-auto">
            {isLoading ? (
              <div className="text-center text-gray-500">Chargement...</div>
            ) : messages.length === 0 ? (
              <div className="text-center text-gray-500 text-sm">
                Commencez une conversation...
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg._id}
                  className={`mb-4 ${
                    msg.userId === (user?._id || 'guest')
                      ? 'ml-auto text-right'
                      : 'mr-auto'
                  }`}
                >
                  <div className="text-xs text-gray-500 mb-1">
                    {msg.userName || 'Anonyme'}
                  </div>
                  <div
                    className={`inline-block p-3 rounded-lg ${
                      msg.userId === (user?._id || 'guest')
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100'
                    }`}
                  >
                    {msg.content}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {format(new Date(msg.createdAt), 'PPp', { locale: fr })}
                  </div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200">
            {!user && (
              <input
                type="text"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="Votre nom (optionnel)"
                className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      )}
    </div>
  );
}
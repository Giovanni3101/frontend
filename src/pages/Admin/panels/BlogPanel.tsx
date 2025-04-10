import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Trash2, Edit2, Check, X, Plus, Image } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  image: string;
  published: boolean;
  createdAt: string;
}

export function BlogPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    published: false
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://serverisigsite.onrender.com/api/blog', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Erreur lors de la récupération des articles');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      toast.error('Erreur lors du chargement des articles');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://serverisigsite.onrender.com/api/blog', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Erreur lors de la création');
      
      const newPost = await response.json();
      setPosts([newPost, ...posts]);
      setIsCreating(false);
      setFormData({ title: '', content: '', image: '', published: false });
      toast.success('Article créé avec succès');
    } catch (error) {
      toast.error('Erreur lors de la création de l\'article');
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://serverisigsite.onrender.com/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) throw new Error('Erreur lors du téléchargement');
      
      const { url } = await response.json();
      setFormData(prev => ({ ...prev, image: url }));
      toast.success('Image téléchargée avec succès');
    } catch (error) {
      toast.error('Erreur lors du téléchargement de l\'image');
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Articles du blog</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsCreating(true)}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nouvel article
        </motion.button>
      </div>

      {isCreating && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Titre</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Image</label>
              <div className="mt-1 flex items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                />
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="h-10 w-10 object-cover ml-2 rounded" />
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Contenu</label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={6}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={formData.published}
                onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">Publier immédiatement</label>
            </div>

            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setIsCreating(false)}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Annuler
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Créer
              </button>
            </div>
          </form>
        </motion.div>
      )}

      <div className="grid gap-4">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-gray-400 mr-2" />
                <h3 className="text-lg font-medium text-gray-900">
                  {post.title}
                </h3>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditingPost(post._id)}
                  className="text-blue-600 hover:text-blue-900"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
                      // Handle delete
                    }
                  }}
                  className="text-red-600 hover:text-red-900"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
            {post.image && (
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded mb-2" />
            )}
            <p className="text-gray-600">{post.content}</p>
            <div className="mt-2 flex justify-between items-center">
              <span className={`px-2 py-1 text-xs rounded-full ${
                post.published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
              }`}>
                {post.published ? 'Publié' : 'Brouillon'}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(post.createdAt).toLocaleString()}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
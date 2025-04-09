import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Trash2, Edit2, Check, X } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
}

export function BlogPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<string | null>(null);
  const [editForm, setEditForm] = useState({ title: '', content: '' });

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

  const handleDeletePost = async (postId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://serverisigsite.onrender.com/api/blog/${postId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (!response.ok) throw new Error('Erreur lors de la suppression');
      setPosts(posts.filter(post => post._id !== postId));
      toast.success('Article supprimé avec succès');
    } catch (error) {
      toast.error('Erreur lors de la suppression de l\'article');
    }
  };

  const handleEditPost = async (postId: string) => {
    const post = posts.find(p => p._id === postId);
    if (post) {
      setEditingPost(postId);
      setEditForm({ title: post.title, content: post.content });
    }
  };

  const handleSaveEdit = async (postId: string) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://serverisigsite.onrender.com/api/blog/${postId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editForm)
      });
      if (!response.ok) throw new Error('Erreur lors de la modification');
      
      setPosts(posts.map(post => 
        post._id === postId ? { ...post, ...editForm } : post
      ));
      setEditingPost(null);
      toast.success('Article modifié avec succès');
    } catch (error) {
      toast.error('Erreur lors de la modification de l\'article');
    }
  };

  if (isLoading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Articles du blog</h2>
      <div className="grid gap-4">
        {posts.map((post) => (
          <motion.div
            key={post._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-lg shadow"
          >
            {editingPost === post._id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editForm.title}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  className="w-full p-2 border rounded"
                />
                <textarea
                  value={editForm.content}
                  onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                  className="w-full p-2 border rounded"
                  rows={4}
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleSaveEdit(post._id)}
                    className="text-green-600 hover:text-green-900"
                  >
                    <Check className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setEditingPost(null)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 text-gray-400 mr-2" />
                    <h3 className="text-lg font-medium text-gray-900">
                      {post.title}
                    </h3>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEditPost(post._id)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
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
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Settings, Mail, Globe, Phone } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface Settings {
  siteName: string;
  email: string;
  phone: string;
  address: string;
}

export function SettingsPanel() {
  const [settings, setSettings] = useState<Settings>({
    siteName: 'Impact Eco Group',
    email: 'contact@impactecogroup.com',
    phone: '+243 973 456 789',
    address: 'Commune de Goma, RDC'
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('https://serverisigsite.onrender.com/api/settings', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(settings)
      });
      
      if (!response.ok) throw new Error('Erreur lors de la sauvegarde');
      
      setIsEditing(false);
      toast.success('Paramètres mis à jour avec succès');
    } catch (error) {
      toast.error('Erreur lors de la mise à jour des paramètres');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Paramètres</h2>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nom du site
            </label>
            <input
              type="text"
              value={settings.siteName}
              onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
              disabled={!isEditing}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email de contact
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={settings.email}
                onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                disabled={!isEditing}
                className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={settings.phone}
                onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                disabled={!isEditing}
                className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Adresse
            </label>
            <div className="relative">
              <Globe className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                disabled={!isEditing}
                className="w-full pl-10 p-2 border rounded focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            {isEditing ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Annuler
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Sauvegarder
                </motion.button>
              </>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Modifier
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
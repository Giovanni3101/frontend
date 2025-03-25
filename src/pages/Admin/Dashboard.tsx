import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, FileText, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '../../stores/authStore';
import { UsersPanel } from './panels/UsersPanel';
import { BlogPanel } from './panels/BlogPanel';
import { SettingsPanel } from './panels/SettingsPanel';
import { MessagesPanel } from './panels/MessagesPanel';

const panels = [
  { id: 'users', label: 'Utilisateurs', icon: Users, component: UsersPanel },
  { id: 'messages', label: 'Messages', icon: MessageSquare, component: MessagesPanel },
  { id: 'blog', label: 'Blog', icon: FileText, component: BlogPanel },
  { id: 'settings', label: 'Paramètres', icon: Settings, component: SettingsPanel },
];

export function AdminDashboard() {
  const [activePanel, setActivePanel] = useState('users');
  const { logout } = useAuthStore();
  const ActivePanelComponent = panels.find(p => p.id === activePanel)?.component;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="w-64 bg-white shadow-lg"
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">Administration</h2>
        </div>
        <nav className="mt-6">
          {panels.map((panel) => (
            <button
              key={panel.id}
              onClick={() => setActivePanel(panel.id)}
              className={`w-full flex items-center px-6 py-3 text-left ${
                activePanel === panel.id
                  ? 'bg-green-50 text-green-600 border-r-4 border-green-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <panel.icon className="h-5 w-5 mr-3" />
              {panel.label}
            </button>
          ))}
          <button
            onClick={logout}
            className="w-full flex items-center px-6 py-3 text-left text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Déconnexion
          </button>
        </nav>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {ActivePanelComponent && <ActivePanelComponent />}
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../img/LOGO.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/news', label: 'Actualités' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-lg shadow-md fixed z-10 p-3 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center m-10">
              <img src={logo} alt="logo impact eco group" className="w-32" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isActive(item.path)
                    ? 'text-green-600 border-b-4 border-green-600'
                    : 'text-gray-600 hover:text-green-600 b'
                } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/Donate">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
              >
                Faire un don
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 w-12"
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, y: 0 }}
                className="md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-10 w-10" />
                ) : (
                  <Menu className="h-10 w-10" />
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 12 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0, z: -20 }}
          className="md:hidden absolute bg-white w-4/5 mt-3 right-3 min-h-screen classe"
        >
          <div className="class px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 ${
                  isActive(item.path)
                    ? 'text-green-600 border-b-4 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/Donate" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full text-left bg-green-600 text-white px-3 py-2 rounded-md hover:bg-green-700">
                Faire un don
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

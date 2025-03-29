import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, LogIn, UserPlus, LogOut } from 'lucide-react';
import { useAuthStore } from '../stores/authStore';
import logo from '../img/LOGO.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À propos' },
    { path: '/projects', label: 'Projets' },
    { path: '/news', label: 'Actualités' },
    { path: '/contact', label: 'Contact' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white/10 backdrop-blur-lg shadow-md fixed z-10 w-full">
      <section className="bg-gray-800 text-white top-0 left-0 w-full z-50">
        <div className='flex'>
          <div className="overflow-hidden ">
            <div className="whitespace-nowrap animate-marquee-slow">
              <p className="inline-block px-8 py-2 text-sm font-light leading-relaxed tracking-normal">
              || Organisation du forum economique à Génève en Partenariat avec la chambre de commerce de Génève et la Haute ecole de Génève
              </p>
              <p className="inline-block px-8 py-2 text-sm font-light leading-relaxed tracking-normal">
                || Lancement d'un programme de formation destiné aux jeunes entrepreneurs, ouvrant des portes vers des opportunités économiques durables.
              </p>
              <p className="inline-block px-8 py-2 text-sm font-light leading-relaxed tracking-normal">
                || Grâce à vos dons et soutiens, nous avons doublé notre impact en 2023, un témoignage puissant de l'engagement collectif pour un avenir meilleur.
              </p>
            </div>
          </div>
          <div>
            {user ? (
              <div className="flex items-center space-x-2 my-2">
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                  >
                    Admin Panel
                  </Link>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center px-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                >
                  <LogOut className="h-3 w-3 mr-1" />
                  <p className='text-[15px]'>Déconnexion</p>
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center my-2 mr-2 space-x-2 mr-2">
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
                  >
                    <LogIn className="h-3 w-3 mr-1" />
                    <p className='text-[15px]'>Connexion</p>
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <UserPlus className="h-3 w-3 mr-1" />
                    <p className='text-[15px]'>Inscription</p>
                  </motion.button>
                </Link>
              </div>
            )}
          </div>
        </div>

      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center m-10">
              <img src={logo} alt="logo impact eco group" className="w-32" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${isActive(item.path)
                  ? 'text-green-600 border-b-4 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
                  } transition-colors duration-200`}
              >
                {item.label}
              </Link>
            ))}

            {/* {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="text-gray-600 hover:text-green-600 transition-colors duration-200"
                  >
                    Admin Panel
                  </Link>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="flex items-center px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </motion.button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50"
                  >
                    <LogIn className="h-4 w-4 mr-2" />
                    Connexion
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Inscription
                  </motion.button>
                </Link>
              </div>
            )} */}

            <Link to="/donate">
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
          className="md:hidden absolute mt-[-1px] bg-white w-4/5 mt-3 right-3 min-h-screen classe"
        >
          <div className="class px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block px-3 py-2 ${isActive(item.path)
                  ? 'text-green-600 border-b-4 border-green-600'
                  : 'text-gray-600 hover:text-green-600'
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            {/* {user ? (
              <>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className="block px-3 py-2 text-gray-600 hover:text-green-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Panel
                  </Link>
                )}
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-2 py-2 text-red-600 hover:bg-red-50"
                >
                  <LogOut className="h-3 w-3 inline mr-1" />
                  <p className='text-[15px]'>Déconnexion</p>

                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-600 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="h-4 w-4 inline mr-2" />
                  Connexion
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-gray-600 hover:text-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <UserPlus className="h-4 w-4 inline mr-2" />
                  Inscription
                </Link>
              </>
            )} */}

            <Link to="/donate" onClick={() => setIsMenuOpen(false)}>
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

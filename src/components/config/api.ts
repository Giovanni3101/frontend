// Configuration des points de terminaison de l'API
// export const API_BASE_URL = 'https://serverisigsite.onrender.com';
// export const SOCKET_URL = 'https://serverisigsite.onrender.com';
export const API_BASE_URL = 'http://l';
export const SOCKET_URL = 'http://serverisigsite.onrender.com';

// Points de terminaison de l'API
export const API_ENDPOINTS = {
  auth: {
    login: '/api/users/login',
    register: '/api/users/register',
  },
  messages: '/api/messages',
  blog: '/api/blog',
  contact: '/api/contact',
  users: '/api/users',
};
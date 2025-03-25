import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Blog } from './pages/Blog';
import { Donate } from './pages/Donate';
import { ContactForm } from './components/ContactForm';
import { Agriculture } from './pages/Projects/Agriculture';
import { Energie } from './pages/Projects/Energie';
import { Formation } from './pages/Projects/Formation';
import { Admin } from './pages/Admin';
import { LoginForm } from './components/auth/LoginForm';
import { RegisterForm } from './components/auth/RegisterForm';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/news" element={<Blog />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/projects/agriculture" element={<Agriculture />} />
              <Route
                path="/projects/energie-renouvelable"
                element={<Energie />}
              />
              <Route
                path="/projects/formation-professionnelle"
                element={<Formation />}
              />
              <Route path="/admin" element={<Admin />} />
              <Route path='/login' element={<LoginForm />} />
              <Route path='/register' element={<RegisterForm />} />
              <Route
                path="/contact"
                element={
                  <div className="bgcontact pt-24 pb-12 min-h-screen md:mt-10">
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                      <h1 className="text-3xl font-bold text-center mb-8 mt-10 text-green-400">
                        Contactez-nous
                      </h1>
                      <ContactForm />
                    </div>
                  </div>
                }
              />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import ScrollToTop from './components/ScrollToTop';
import Skills from './components/Skills';
import React from 'react';
import About from './components/About';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div initial="hidden" animate="show">
      <ScrollToTop />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;

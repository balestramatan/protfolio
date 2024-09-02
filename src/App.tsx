import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Hero from './components/Hero/Hero';
import NotFound from './components/NotFound/NotFound';
import Projects from './components/Projects/Projects';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      { path: '/', element: <Hero /> },
      { path: 'about', element: <About /> },
      { path: 'projects', element: <Projects /> },
      { path: 'contacts', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

const App: React.FC = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;

import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import SolutionsUnmanned from './pages/SolutionsUnmanned';
import SolutionsNavera from './pages/SolutionsNavera';
import SolutionsSimulator from './pages/SolutionsSimulator';
import RND from './pages/RND';
import Capabilities from './pages/Capabilities';
import Contact from './pages/Contact';
import { PageRoutes } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PageRoutes.ABOUT} element={<About />} />
          <Route path={PageRoutes.SOLUTIONS_UNMANNED} element={<SolutionsUnmanned />} />
          <Route path={PageRoutes.SOLUTIONS_NAVERA} element={<SolutionsNavera />} />
          <Route path={PageRoutes.SOLUTIONS_SIMULATOR} element={<SolutionsSimulator />} />
          <Route path={PageRoutes.RND} element={<RND />} />
          <Route path={PageRoutes.CAPABILITIES} element={<Capabilities />} />
          <Route path={PageRoutes.CONTACT} element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import ProjectItem from './pages/ProjectItem/ProjectItem';
import Error from './pages/Error/Error';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { works } from './assets/datas/works';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/" element={<Projects />} />
        {works.map((item) => (
          <Route
            key={item.id}
            path={`/projets/${item.id}`}
            element={<ProjectItem { ...item } />}
          />
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
)
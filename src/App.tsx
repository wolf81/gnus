import './App.css'
import { Footer } from './components/layout/Footer';
import { Nav } from './components/layout/Nav';
import { PageBackground } from './components/layout/PageBackground';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <PageBackground />
      <Nav />        

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App

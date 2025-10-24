import './App.css'
import { Route, Routes } from 'react-router-dom'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import MainLayout from './components/layout/MainLayout'
import Nav from './components/layout/Nav'
import HowItWorksPage from './pages/HowItWorksPage'
import Footer from './components/layout/Footer'

export default function App() {
  return (
    <MainLayout>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </MainLayout>
  )
}
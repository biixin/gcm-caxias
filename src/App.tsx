import { useState } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/home/HomePage';
import AnalyticsPage from './components/analytics/AnalyticsPage';
import ExplorePage from './components/explore/ExplorePage';
import SISPPage from './components/sisp/SISPPage';
import IntelligencePage from './components/intelligence/IntelligencePage';
import TestDataPage from './components/test/TestDataPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="pt-16">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'analytics' && <AnalyticsPage />}
        {currentPage === 'explore' && <ExplorePage onNavigate={handleNavigate} />}
        {currentPage === 'sisp' && <SISPPage />}
        {currentPage === 'intelligence' && <IntelligencePage />}
        {currentPage === 'test' && <TestDataPage />}
      </main>
    </div>
  );
}

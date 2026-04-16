import Header from './components/Header';
import Introduction from './components/Introduction';
import DataImportance from './components/DataImportance';
import Dashboard from './components/Dashboard';
import InterpretiveAnalysis from './components/InterpretiveAnalysis';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Introduction />
        <DataImportance />
        <Dashboard />
        <InterpretiveAnalysis />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}

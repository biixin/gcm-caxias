import HeroBanner from './HeroBanner';
import InstitutionalPresentation from './InstitutionalPresentation';
import InfoCards from './InfoCards';
import InstitutionIntegration from './InstitutionIntegration';
import HowItWorks from './HowItWorks';
import Footer from '../Footer';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <HeroBanner onNavigate={onNavigate} />
      <InstitutionalPresentation />
      <InfoCards />
      <InstitutionIntegration />
      <HowItWorks />
      <Footer />
    </div>
  );
}

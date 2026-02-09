import ProfessionalBackground from './src/components/Background';
import Details from './src/components/Details';
import FAQs from './src/components/FAQ';
import Footer from './src/components/Footer';
import GetStarted from './src/components/GetStarted';
import TherapyHero from './src/components/HeroSection1';
import FulfillingLife from './src/components/HeroSection2';
import Introduction from './src/components/Introduction';
import MyOffice from './src/components/MyOffice';
import Navbar from './src/components/Navbar';
import NotAlone from './src/components/NotAlone';
import MySpecialties from './src/components/Specialties';

export default function Home() {
  return (
    <div>
      <Navbar />
      <TherapyHero />
      <FulfillingLife />
      <MySpecialties />
      <NotAlone />
      <Introduction />
      <MyOffice />
      <FAQs />
      <ProfessionalBackground />
      <GetStarted />
      <Details />
      <Footer />
    </div>
  );
}
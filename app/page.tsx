import ProfessionalBackground from './src/components/Background';
import Details from './src/components/Details';
import FAQs from './src/components/FAQ';
import Footer from './src/components/Footer';
import GetStarted from './src/components/GetStarted';
import TherapyHero from './src/components/HeroSection1';
import FulfillingLife from './src/components/HeroSection2';
import Introduction from './src/components/Introduction';
import Navbar from './src/components/Navbar';
import NotAlone from './src/components/NotAlone';
import MySpecialties from './src/components/Specialties';

export default function Home() {
  return (
    <div className='bg-[#fbf6f1]'>
      <Navbar />
      <TherapyHero />
      <FulfillingLife />
      <MySpecialties />
      <NotAlone />
      <Introduction />
      <FAQs />
      <ProfessionalBackground />
      <GetStarted />
      <Details />
      <Footer />
    </div>
  );
}
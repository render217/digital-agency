import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ScreenSize from '@/components/ScreenSize';
import Brand from '@/components/Brand';
import Features from '@/components/Features';
import Achievements from '@/components/Achievements';
import Portofolio from './components/Portofolio';
import Testimonals from './components/Testimonals';
import Cta from '@/components/Cta';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Brand />
        <Features />
        <Achievements />
        <Portofolio />
        <Testimonals />
        <Cta />
      </main>
      <Footer />
      <ScreenSize />
    </div>
  );
}

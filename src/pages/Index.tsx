import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Templates } from '@/components/Templates';
import { Features } from '@/components/Features';
import { Dashboard } from '@/components/Dashboard';
import { Pricing } from '@/components/Pricing';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Templates />
      <Features />
      <Dashboard />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;

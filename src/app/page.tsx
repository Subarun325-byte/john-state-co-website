import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import SearchSection from '@/components/sections/SearchSection';

const FeaturedProperties = dynamic(() => import('@/components/sections/FeaturedProperties'));
const CategoriesSection = dynamic(() => import('@/components/sections/CategoriesSection'));
const AboutSection = dynamic(() => import('@/components/sections/AboutSection'));
const InvestmentSection = dynamic(() => import('@/components/sections/InvestmentSection'));
const AgentsSection = dynamic(() => import('@/components/sections/AgentsSection'));
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'));
const BlogSection = dynamic(() => import('@/components/sections/BlogSection'));
const CTASection = dynamic(() => import('@/components/sections/CTASection'));
const Footer = dynamic(() => import('@/components/layout/Footer'));
const LoadingScreen = dynamic(() => import('@/components/LoadingScreen'));

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <SearchSection />
        <FeaturedProperties />
        <CategoriesSection />
        <AboutSection />
        <InvestmentSection />
        <AgentsSection />
        <TestimonialsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

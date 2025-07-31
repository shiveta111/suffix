'use client';

import TopStrip from '@/components/TopStrip';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ClientDeliverySection from '@/components/ClientDeliverySection';
import PurposeSection from '@/components/PurposeSection';
import TechAndCollaborationSection from '@/components/TechAndCollaborationSection';
import TrustedPartnershipsSection from '@/components/TrustedPartnershipsSection';
import SecurityFramework from '@/components/SecurityFramework';
import CertifiedSecurity from '@/components/CertifiedSecurity';
import BlogEventsSection from '@/components/BlogEventsSection';
import TailoredBFSISection from '@/components/TailoredBFSISection';
import InsightsBlogSection from '@/components/InsightsBlogSection';
import Footer from '@/components/Footer';


export default function HomePage() {
  return (
    <main>
      <TopStrip />
      <Navbar />
      <HeroSection />
      <ClientDeliverySection />
      <PurposeSection />
      <TechAndCollaborationSection />
      <TrustedPartnershipsSection />
      <SecurityFramework />
      <CertifiedSecurity />
      <BlogEventsSection />
      <TailoredBFSISection />
      <InsightsBlogSection />
      <Footer />
    </main>
  );
}

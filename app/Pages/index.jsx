import AboutSection from '@/Components/Home/AboutSection';
import GallerySection from '@/Components/Home/Galleryection';
import HeroSection from '@/Components/Home/HeroSection';
import OurPurpose from '@/Components/Home/OurPurpose';
import QuoteSection from '@/Components/Home/QuoteSection';
import SafetySection from '@/Components/Home/SaftySection';
import SubscriptionSection from '@/Components/Home/SubscriptionSection';
import TestimonialSection from '@/Components/Home/TestimonialSection';
import WhatWeDo from '@/Components/Home/WhatWeDo';
import React from 'react'

function Index() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <OurPurpose />
      <WhatWeDo />
      <GallerySection />
      <SubscriptionSection />
      <TestimonialSection />
      <SafetySection />
      <QuoteSection />
    </div>
  )
}

export default Index;

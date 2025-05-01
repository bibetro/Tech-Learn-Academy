'use client';
import { motion } from 'framer-motion';
import ReviewsSection from '@/components/ReviewsSection';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CourseSection from '@/components/CourseSection';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <CourseSection />
      <ReviewsSection />
    </div>
  );
}

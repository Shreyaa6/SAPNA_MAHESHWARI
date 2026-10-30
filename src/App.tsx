import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorksSection } from './components/WorksSection';
import { ReviewsAndServices } from './components/ReviewsAndServices';
import { About } from './components/About';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';
import { GuideModal } from './components/GuideModal';

export function App() {
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const handleOpenGuide = () => {
    setIsGuideOpen(true);
  };

  const handleBookClick = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#ebe5d8] text-[#2c2825] font-sans antialiased selection:bg-[#ec5395] selection:text-white">
      {/* Sticky Navbar visible at all times */}
      <Navbar onOpenGuide={handleOpenGuide} onBookClick={handleBookClick} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Exactly identical Hero Section starting flush right below navbar */}
        <Hero onOpenGuide={handleOpenGuide} onBookClick={handleBookClick} />

        {/* 2. Works Section: Looping reels & photos in vertical mix */}
        <WorksSection onBookClick={handleBookClick} />

        {/* 3. Reviews & Services: Exactly matching user reference with tilted cards & looping ribbon */}
        <ReviewsAndServices onBookClick={handleBookClick} />

        {/* 4. About Sapna Maheshwari */}
        <About />

        {/* 5. Booking & Consultation Form */}
        <BookingForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Guide Tour Modal */}
      <GuideModal
        isOpen={isGuideOpen}
        onClose={() => setIsGuideOpen(false)}
        onBookClick={handleBookClick}
      />
    </div>
  );
}

export default App;

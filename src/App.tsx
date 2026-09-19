import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMatrix } from './components/SkillMatrix';
import { Projects } from './components/Projects';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';
import { PROJECTS, SKILL_CATEGORIES } from './data/portfolioData';

export function App() {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  const [typedText, setTypedText] = useState<string>('');

  // Default profile image (uses local image copied into public folder or fallback)
  const [profileImage] = useState<string>('/profile_photo.png');

  // Typing animation for Hero Section
  useEffect(() => {
    const fullText = "Mahasiswa Computer Science · Aspiring Cloud & Software Engineer";
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyEmailToClipboard = () => {
    const email = 'urrahmantaufiq00@gmail.com';
    navigator.clipboard.writeText(email);
    showToast('Email (urrahmantaufiq00@gmail.com) berhasil disalin ke clipboard!');
  };

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = '/Taufiqurrahman_Hamdan_Al_Ayubi_CV.pdf';
    link.download = 'Taufiqurrahman Hamdan Al Ayubi - CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Mengunduh CV Taufiqurrahman Hamdan Al Ayubi (PDF)...');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#211C1A] font-sans antialiased selection:bg-[#2563EB] selection:text-white scroll-smooth">
      {/* Navigation Header */}
      <Navbar
        profileImage={profileImage}
        onOpenCvModal={() => setShowCvModal(true)}
      />

      {/* Hero Section */}
      <Hero
        profileImage={profileImage}
        typedText={typedText}
        onCopyEmail={copyEmailToClipboard}
      />

      {/* About & Skill Matrix Section */}
      <SkillMatrix
        profileImage={profileImage}
        skillCategories={SKILL_CATEGORIES}
      />

      {/* Featured Projects & Architecture Visualizer */}
      <Projects projects={PROJECTS} />

      {/* Interactive Architecture Explorer */}
      <ArchitectureExplorer />

      {/* Contact & Availability Section */}
      <Contact
        profileImage={profileImage}
        onCopyEmail={copyEmailToClipboard}
      />

      {/* Footer */}
      <Footer />

      {/* CV Preview & Download Modal */}
      <CvModal
        isOpen={showCvModal}
        onClose={() => setShowCvModal(false)}
        onDownload={handleDownloadCv}
      />

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}

export default App;

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { SkillMatrix } from './components/SkillMatrix';
import { Projects } from './components/Projects';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';
import { MobileBottomNav } from './components/MobileBottomNav';
import { PROJECTS } from './data/portfolioData';
import { BIODATA } from './data/cvData';
import { SECTION_IDS } from './constants/sections';
import { useActiveSection } from './hooks/useActiveSection';

export function App() {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  const [profileImage] = useState<string>('/profile_photo.png?v=3');
  const activeSection = useActiveSection(SECTION_IDS);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(BIODATA.email);
    showToast('Email disalin ke clipboard.');
  };

  const copyCredential = (id: string) => {
    navigator.clipboard.writeText(id);
    showToast('ID sertifikat disalin.');
  };

  const handleDownloadCv = () => {
    showToast('CV berhasil diunduh.');
  };

  return (
    <div className="min-h-screen w-full max-w-[100vw] overflow-x-clip bg-paper text-ink antialiased selection:bg-accent selection:text-surface has-mobile-nav">
      <Navbar onOpenCvModal={() => setShowCvModal(true)} activeSection={activeSection} />

      <main>
        <Hero profileImage={profileImage} onOpenCv={() => setShowCvModal(true)} />

        <MarqueeStrip />

        <SkillMatrix onCopyCredential={copyCredential} />

        <Projects projects={PROJECTS} />

        <ArchitectureExplorer />

        <ContactSection
          onCopyEmail={copyEmailToClipboard}
          onOpenCv={() => setShowCvModal(true)}
        />
      </main>

      <Footer onOpenCv={() => setShowCvModal(true)} />

      <MobileBottomNav activeSection={activeSection} />

      <CvModal
        isOpen={showCvModal}
        onClose={() => setShowCvModal(false)}
        onDownload={handleDownloadCv}
      />

      <Toast message={toastMessage} />
    </div>
  );
}

export default App;

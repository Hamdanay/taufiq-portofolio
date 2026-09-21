import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMatrix } from './components/SkillMatrix';
import { Projects } from './components/Projects';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';
import { PROJECTS } from './data/portfolioData';
import { BIODATA } from './data/cvData';

export function App() {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  const [profileImage] = useState<string>('/profile_photo.png?v=3');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(BIODATA.email);
    showToast('Email disalin ke clipboard.');
  };

  const handleDownloadCv = () => {
    showToast('CV berhasil diunduh.');
  };

  return (
    <div className="min-h-screen bg-paper text-ink antialiased selection:bg-accent selection:text-paper">
      <Navbar onOpenCvModal={() => setShowCvModal(true)} />

      <main>
        <Hero
          profileImage={profileImage}
          onCopyEmail={copyEmailToClipboard}
          onOpenCv={() => setShowCvModal(true)}
        />

        <SkillMatrix />

        <Projects projects={PROJECTS} />

        <ArchitectureExplorer />
      </main>

      <Footer onOpenCv={() => setShowCvModal(true)} />

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

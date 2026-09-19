import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillMatrix } from './components/SkillMatrix';
import { Projects } from './components/Projects';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { Toast } from './components/Toast';
import { PROJECTS } from './data/portfolioData';
import { BIODATA, CV_PDF_FILENAME, CV_PDF_PATH } from './data/cvData';

export function App() {
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  const [profileImage] = useState<string>('/profile_photo.png');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(BIODATA.email);
    showToast('Email disalin ke clipboard.');
  };

  const handleDownloadCv = () => {
    const link = document.createElement('a');
    link.href = CV_PDF_PATH;
    link.download = CV_PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast('Mengunduh CV…');
  };

  return (
    <div className="min-h-screen bg-paper text-ink antialiased selection:bg-accent selection:text-white">
      <Navbar onOpenCvModal={() => setShowCvModal(true)} />

      <main>
        <Hero profileImage={profileImage} onCopyEmail={copyEmailToClipboard} />

        <SkillMatrix />

        <Projects projects={PROJECTS} />

        <ArchitectureExplorer />

        <Contact onCopyEmail={copyEmailToClipboard} />
      </main>

      <Footer />

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

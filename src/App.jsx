import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Cases from './components/cases/Cases';
import Blog from './components/blog/Blog';
import Team from './components/team/Team';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';
import Modal from './components/modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => { setShowModal(true); };
  const closeModal = () => { setShowModal(false); };

  useEffect(() => {
    document.body.style.overflowY = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Feedback openModal={openModal} />
      </main>
      <Footer />
      {showModal && (
        <Modal onModalClose={closeModal}>
          <p>Thank you!<br />
            Your form submission has been received.<br />
            Back to our site
          </p>
        </Modal>
      )}
    </>
  );
}

export default App;

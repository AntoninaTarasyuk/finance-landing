import './App.css';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Cases from './components/cases/Cases';
import Blog from './components/blog/Blog';
import Team from './components/team/Team';
import Feedback from './components/feedback/Feedback';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Cases />
        <Blog />
        <Team />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}

export default App;

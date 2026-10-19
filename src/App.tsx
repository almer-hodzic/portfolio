import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <SelectedWork />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

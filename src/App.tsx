import { Diagnosis } from "./components/Diagnosis";
import { FinalCta } from "./components/FinalCta";
import { FloatingButtons } from "./components/FloatingButtons";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Purpose } from "./components/Purpose";
import { Results } from "./components/Results";
import { Solutions } from "./components/Solutions";
import { Testimonials } from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diagnosis />
        <Solutions />
        <Process />
        <Results />
        <Testimonials />
        <Purpose />
        <FinalCta />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}

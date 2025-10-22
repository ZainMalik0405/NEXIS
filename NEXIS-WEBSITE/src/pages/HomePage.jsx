import Hero from "../components/Hero";
import About from "../components/About";
import CoreValues from "../components/CoreValues";
import ResearchAreas from "../components/ResearchAreas";
import NewsletterSection from "../components/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <CoreValues />
      <NewsletterSection />
      <ResearchAreas />
    </>
  );
}

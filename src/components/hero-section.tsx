import { portfolioData } from '@/data/portfolio';

export function HeroSection() {
  const { personal } = portfolioData;
  // Ensure personal data is available
  if (!personal) {
    return null;
  }
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I&apos;m {personal.name}</h1>
        <p>{personal.title}</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}

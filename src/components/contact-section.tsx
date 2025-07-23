import { portfolioData } from "@/data/portfolio";

export function ContactSection() {
  const { contact, personal } = portfolioData;

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">{contact.title}</h2>
        <div className="grid-2">
          <div className="card">
            <h3>{contact.getInTouch.title}</h3>
            <p>{contact.getInTouch.description}</p>
            <div style={{marginTop: '1rem'}}>
              
            </div>
          </div>
          <div className="card">
            <h3>{contact.downloadCV.title}</h3>
            <p>{contact.downloadCV.description}</p>
            <div style={{marginTop: '1rem'}}>
              <a href={contact.downloadCV.url} className="btn btn-primary">Download CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { portfolioData } from "@/data/portfolio";

export function AboutSection() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">{about.title}</h2>
        <div className="grid-2">
          <div className="animate-fade-in-left">
            {about.description.map((paragraph, index) => (
              <p key={index} className="text-lg mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="card animate-fade-in-right">
            <h3>What I Do</h3>
            <ul style={{listStyle: 'none', padding: 0}}>
              {about.whatIDo.map((item, index) => (
                <li key={index} className="skill-item">
                  <span className={`retro-icon ${item.icon}`}></span>
                  <span className="skill-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

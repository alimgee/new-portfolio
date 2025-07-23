import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">{skills.title}</h2>
        <div className="grid-4">
          {skills.categories.map((category, index) => (
            <div key={index} className="card">
              <span className={`retro-icon ${category.icon}`}></span>
              <h3>{category.title}</h3>
              <p>{category.technologies}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

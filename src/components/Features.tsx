const features = [
  {
    variant: "edu",
    icon: "🎓",
    title: "Educación Continua",
    body: "Organizamos congresos, talleres y cursos de actualización con los más reconocidos expertos nacionales e internacionales en endoscopía ginecológica.",
  },
  {
    variant: "innov",
    icon: "🔬",
    title: "Innovación Quirúrgica",
    body: "Promovemos la adopción de las últimas técnicas laparoscópicas e histeroscópicas, respaldadas por evidencia científica de primer nivel.",
  },
  {
    variant: "etica",
    icon: "⚖️",
    title: "Ética y Calidad",
    body: "Establecemos y difundimos los más altos estándares éticos y de calidad para la práctica de la cirugía mínimamente invasiva en el Perú.",
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="section-header fade-in">
          <div className="eyebrow">
            <span className="line" /> Nuestros Pilares <span className="line" />
          </div>
          <h2>Comprometidos con la Excelencia</h2>
          <p>
            Tres pilares fundamentales guían nuestra misión de elevar la cirugía ginecológica
            mínimamente invasiva en todo el Perú.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card fade-in">
              <div className={`feature-icon ${f.variant}`}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

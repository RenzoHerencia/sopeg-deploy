export default function Welcome() {
  return (
    <section className="welcome">
      <div className="container">
        <div className="welcome-grid">
          {/* Illustration */}
          <div className="welcome-image fade-in">
            <div className="welcome-image-inner">
              <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="60" cy="60" r="50" stroke="white" strokeWidth="1.5" opacity="0.4" />
                <circle cx="60" cy="60" r="35" stroke="white" strokeWidth="1.5" opacity="0.6" />
                <path
                  d="M60 25 C60 25 75 40 75 60 C75 75 65 85 60 95 C55 85 45 75 45 60 C45 40 60 25 60 25Z"
                  stroke="white"
                  strokeWidth="1.5"
                  fill="none"
                  opacity="0.7"
                />
                <line x1="25" y1="60" x2="95" y2="60" stroke="white" strokeWidth="1" opacity="0.5" />
                <circle cx="60" cy="60" r="6" fill="white" opacity="0.8" />
              </svg>
              <div className="welcome-image-caption">Innovación Quirúrgica</div>
            </div>
          </div>

          {/* Content */}
          <div className="welcome-content fade-in">
            <div className="eyebrow">
              <span className="line" /> Quiénes Somos
            </div>
            <h2>Líderes en Cirugía Mínimamente Invasiva Ginecológica</h2>
            <p>
              La Sociedad Peruana de Endoscopía Ginecológica (SOPEG) es la principal organización
              científica del Perú dedicada a promover el avance de la cirugía laparoscópica e
              histeroscópica en ginecología.
            </p>
            <p>
              Desde nuestra fundación, hemos reunido a los más destacados especialistas del país
              para compartir conocimiento, actualizar protocolos y elevar los estándares de atención
              a la mujer.
            </p>
            <blockquote>
              &ldquo;La endoscopía ginecológica representa el futuro de la cirugía de mínimo acceso,
              con menor dolor, recuperación más rápida y mejores resultados para nuestras pacientes.&rdquo;
            </blockquote>
            <a href="https://sopeg.org.pe/presentacion/" className="btn btn-primary">
              Leer Más
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

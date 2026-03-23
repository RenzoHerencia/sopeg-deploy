export default function Board() {
  return (
    <section className="board">
      <div className="container">
        <div className="section-header fade-in">
          <div className="eyebrow">
            <span className="line" /> Liderazgo <span className="line" />
          </div>
          <h2>Consejo Directivo 2024 — 2025</h2>
          <p>
            Profesionales comprometidos con la misión de elevar los estándares de la endoscopía
            ginecológica en el Perú.
          </p>
        </div>

        <div className="board-visual fade-in">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <h3>Gestión con Visión de Futuro</h3>
          <p>
            Nuestro consejo directivo guía la sociedad hacia nuevos horizontes en educación,
            investigación e innovación quirúrgica.
          </p>
          <a href="https://sopeg.org.pe/consejo-directivo/" className="btn btn-dark">
            Conocer al Consejo
            <svg className="btn-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function CongressBanner() {
  return (
    <section className="congress-banner">
      <div className="container">
        <div className="congress-content">
          {/* Left: text */}
          <div className="congress-text fade-in">
            <div className="eyebrow">
              <span className="line" /> Próximo Evento
            </div>
            <h2>Congreso Nacional de Endoscopía Ginecológica 2026</h2>
            <p>
              El evento científico más importante del Perú en cirugía mínimamente invasiva.
              Conferencistas internacionales, talleres prácticos y las últimas tendencias en
              endoscopía ginecológica.
            </p>
            <a href="https://sopeg.org.pe/" className="btn btn-outline">
              Más Información
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right: card */}
          <div className="congress-card fade-in">
            <div className="hero-badge">Próximamente 2026</div>
            <h3>XIV Congreso Nacional SOPEG</h3>
            <p>Lima, Perú — Sede por confirmar</p>

            <div className="detail-items">
              <div className="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Fecha por confirmar · 2026
              </div>
              <div className="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Lima, Perú
              </div>
              <div className="detail-item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                Conferencistas Nacionales e Internacionales
              </div>
            </div>

            <a href="https://sopeg.org.pe/socio/" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Pre-registrarse
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

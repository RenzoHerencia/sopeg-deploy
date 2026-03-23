const benefits = [
  "Acceso a congresos y cursos con tarifas preferenciales",
  "Biblioteca digital con publicaciones y protocolos actualizados",
  "Red de contacto con más de 500 especialistas en el país",
  "Certificados de participación y educación médica continua",
  "Acceso a la plataforma de videos educativos exclusivos",
  "Representación gremial ante organismos de salud nacionales",
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Membership() {
  return (
    <section className="membership">
      <div className="container">
        <div className="membership-grid">
          {/* Content */}
          <div className="membership-content fade-in">
            <div
              className="eyebrow"
              style={{
                color: "var(--teal)",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontSize: "0.78rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  width: 28,
                  height: 2,
                  background: "var(--teal)",
                  borderRadius: 2,
                  display: "inline-block",
                }}
              />
              Membresía
            </div>
            <h2>Únete a la Comunidad SOPEG</h2>
            <p>
              Forma parte de la sociedad científica más importante de endoscopía ginecológica en
              el Perú. Accede a recursos exclusivos, eventos y una red de colegas de primer nivel.
            </p>

            <ul className="benefit-list">
              {benefits.map((b) => (
                <li key={b}>
                  <CheckIcon />
                  {b}
                </li>
              ))}
            </ul>

            <a href="https://sopeg.org.pe/socio/" className="btn btn-primary">
              Solicitar Membresía
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Member card visual */}
          <div className="membership-visual fade-in">
            <div className="member-card-visual">
              <div className="card-header">
                <div className="card-logo">SOPEG</div>
                <div className="card-badge">Socio Activo</div>
              </div>
              <div className="card-info">
                <label>Nombre del Especialista</label>
                <div className="name">Dr. / Dra. Nombre Apellido</div>
                <div className="specialty">Ginecología y Obstetricia — Endoscopía Ginecológica</div>
              </div>
              {/* <div className="member-card-chip" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

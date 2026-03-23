import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Image
              src="https://sopeg.org.pe/wp-content/uploads/2026/02/sopeg-calado.png"
              alt="Sello SOPEG — Sociedad Peruana de Endoscopía Ginecológica"
              width={96}
              height={96}
              style={{ width: "96px", height: "96px", marginBottom: "12px", opacity: 0.85 }}
            />
            <div
              className="logo-text-sub"
              style={{
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.68rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                fontWeight: 500,
                marginBottom: 16,
              }}
            >
              Sociedad Peruana de Endoscopía Ginecológica
            </div>
            <p>
              Promoviendo la innovación y la excelencia en cirugía mínimamente invasiva para el
              bienestar de las mujeres en el Perú.
            </p>
            <div className="footer-social">
              <a
                href="https://www.facebook.com/sociedadperuanadeendoscopiaginecologica"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/sopeg_peru" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4>Navegación</h4>
            <ul className="footer-links">
              <li><a href="https://sopeg.org.pe/">Inicio</a></li>
              <li><a href="https://sopeg.org.pe/presentacion/">Presentación</a></li>
              <li><a href="https://sopeg.org.pe/historia/">Historia</a></li>
              <li><a href="https://sopeg.org.pe/consejo-directivo/">Consejo Directivo</a></li>
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4>Recursos</h4>
            <ul className="footer-links">
              <li><a href="https://sopeg.org.pe/videos2025/">Videos 2025</a></li>
              <li><a href="https://sopeg.org.pe/videos-2024/">Videos 2024</a></li>
              <li><a href="https://sopeg.org.pe/memoria-2024-2025/">Memoria 2024–2025</a></li>
              <li>
                <a href="https://sopeg.org.pe/wp-content/uploads/2026/02/ESTATUTO_SOPEG.pdf">
                  Estatuto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4>Contacto</h4>
            <ul className="footer-links">
              <li><a href="mailto:sopeg2022@gmail.com">sopeg2022@gmail.com</a></li>
              <li><a href="https://wa.me/51988543153">+51 988 543 153</a></li>
              <li><a href="https://sopeg.org.pe/socio/">Ficha de Membresía</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © 2026 Sociedad Peruana de Endoscopía Ginecológica (SOPEG). Todos los derechos
            reservados.
          </span>
          <span>Lima, Perú</span>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      {/* ── Photo panel (right half) ── */}
      <div className="hero-image-wrap">
        {/*
          Photo: "Cirujanos realizando operación médica" by Navy Medicine
          Source: https://unsplash.com/photos/ekHx4rajBTA — Unsplash free license
          crop=top keeps the surgical team faces in frame; the wide aspect fills the panel.
        */}
        <Image
          src="https://images.unsplash.com/photo-1758206523660-3ef5a51f1113?w=1600&q=85&fit=crop&crop=top"
          alt="Equipo quirúrgico realizando procedimiento de endoscopía ginecológica"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          className="hero-image"
        />
        {/* Left-to-right fade: blends photo into the gradient background */}
        <div className="hero-image-overlay" />
      </div>

      {/* ── Text content ── */}
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot" />
            Sociedad Científica Especializada
          </div>
          <h1>
            Excelencia en <em>Endoscopía Ginecológica</em> para el Perú
          </h1>
          <p>
            Unimos a los mejores especialistas en cirugía mínimamente invasiva para elevar los
            estándares de atención, impulsar la investigación y proteger la salud de la mujer peruana.
          </p>
          <div className="hero-buttons">
            <a href="https://sopeg.org.pe/socio/" className="btn btn-primary">
              Únete como Socia/o
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="https://sopeg.org.pe/presentacion/" className="btn btn-outline">
              Conocer SOPEG
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

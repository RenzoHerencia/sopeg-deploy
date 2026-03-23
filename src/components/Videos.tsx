import Image from "next/image";

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);

const videos = [
  {
    tag: "Técnicas Quirúrgicas",
    title: "Laparoscopía avanzada en endometriosis profunda: abordaje paso a paso",
    img: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=640&q=75&auto=format&fit=crop",
    alt: "Sala de operaciones para cirugía laparoscópica",
  },
  {
    tag: "Endometriosis",
    title: "Manejo histeroscópico de la endometriosis uterina: nuevas perspectivas",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=640&q=75&auto=format&fit=crop",
    alt: "Instrumental quirúrgico de endoscopía ginecológica",
  },
  {
    tag: "Congreso 2025",
    title: "Conferencia magistral: Innovaciones en cirugía robótica ginecológica",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=640&q=75&auto=format&fit=crop",
    alt: "Médico especialista en cirugía robótica ginecológica",
  },
];

export default function Videos() {
  return (
    <section className="videos">
      <div className="container">
        <div className="section-header fade-in">
          <div className="eyebrow">
            <span className="line" /> Recursos Educativos <span className="line" />
          </div>
          <h2>Biblioteca de Videos Científicos</h2>
          <p>
            Accede a nuestra colección de más de 110 videos educativos con procedimientos
            quirúrgicos, conferencias y talleres dictados por expertos nacionales e internacionales.
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((v) => (
            <div key={v.title} className="video-card fade-in">
              <div className="video-thumb">
                <Image
                  src={v.img}
                  alt={v.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
                <div className="play-btn">
                  <PlayIcon />
                </div>
              </div>
              <div className="video-info">
                <div className="tag">{v.tag}</div>
                <h3>{v.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a href="https://sopeg.org.pe/videos2025/" className="btn btn-dark">
            Ver Todos los Videos
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

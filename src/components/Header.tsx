"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
      <div className="container">
        <a href="https://sopeg.org.pe/" className="logo-group">
          <Image
            src="https://sopeg.org.pe/wp-content/uploads/2026/02/SOPEG.png"
            alt="SOPEG — Sociedad Peruana de Endoscopía Ginecológica"
            height={64}
            width={220}
            style={{ height: "64px", width: "auto" }}
            priority
          />
        </a>

        <nav className={`main-nav${menuOpen ? " open" : ""}`} id="mainNav">
          <a href="https://sopeg.org.pe/presentacion/">Nosotros</a>
          <a href="https://sopeg.org.pe/historia/">Historia</a>
          <a href="https://sopeg.org.pe/consejo-directivo/">Directivos</a>
          <a href="https://sopeg.org.pe/videos2025/">Videos</a>
          <a href="https://sopeg.org.pe/socio/" className="nav-cta">
            Ser Socio
          </a>
        </nav>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Abrir menú"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

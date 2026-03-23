import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOPEG — Sociedad Peruana de Endoscopía Ginecológica",
  description:
    "Sociedad Peruana de Endoscopía Ginecológica — promoviendo la innovación y la excelencia en cirugía mínimamente invasiva.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

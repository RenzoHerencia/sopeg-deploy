const stats = [
  { number: "25+", label: "Años de Trayectoria" },
  { number: "500+", label: "Socios Activos" },
  { number: "50+", label: "Eventos Científicos" },
  { number: "110+", label: "Videos Educativos" },
];

export default function StatsBar() {
  return (
    <div className="stats-bar">
      <div className="container">
        <div className="stats-inner">
          {stats.map((s) => (
            <div key={s.label} className="stat-item">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

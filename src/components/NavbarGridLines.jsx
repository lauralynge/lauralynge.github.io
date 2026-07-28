import "./GridLines.css";

export default function NavbarGridLines({ cols = 8 }) {
  const cells = [];

  for (let c = 1; c <= cols; c++) {
    cells.push(
      <div
        key={`nav-${c}`}
        className="grid-line-cell"
        style={{
          gridColumn: c,
          gridRow: 1,
          borderRight: c === cols ? "none" : undefined,
        }}
      />
    );
  }

  return (
    <div className="grid-lines navbar-lines">
      {cells}
    </div>
  );
}

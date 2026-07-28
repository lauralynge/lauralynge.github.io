import "./GridLines.css";

export default function GridLines({ cols = 8, rows = 6 }) {
  const cells = [];
  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      cells.push(
        <div
          key={`${r}-${c}`}
          className="grid-line-cell"
          style={{
            gridColumn: c,
            gridRow: r,
            borderRight: c === cols ? "none" : undefined,
            borderBottom: r === rows ? "none" : undefined,
          }}
        />,
      );
    }
  }
  return (
    <div
      className="grid-lines"
      style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}
    >
      {cells}
    </div>
  );
}

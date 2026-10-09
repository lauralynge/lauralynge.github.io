import "./GridLines.css";

// skipAreas: tekstfelter som [kolonneStart, kolonneSlut, række].
// De lodrette linjer inde i et tekstfelt skjules, så teksten ikke krydses.
export default function GridLines({ cols = 8, rows = 6, skipAreas = [] }) {
  const cells = [];

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      // Fx "Digital" i kolonne 3 / 6 → skjul højre kant på celle 3 og 4
      const skip = skipAreas.some(
        ([colStart, colEnd, row]) =>
          r === row && c >= colStart && c <= colEnd - 2,
      );

      cells.push(
        <div
          key={`${r}-${c}`}
          className={`grid-line-cell ${skip ? "no-lines" : ""}`}
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
      style={{ gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
    >
      {cells}
    </div>
  );
}

import "./GridLines.css";

export default function GridLines({ cols = 8, rows = 6 }) {
  const cells = [];

  for (let r = 1; r <= rows; r++) {
    for (let c = 1; c <= cols; c++) {
      // Skip linjer bag "Digital" (gridColumn 3–6, gridRow 1)
      const skipDigital = r === 1 && c >= 3 && c <= 4;

       // Designer: gridColumn 4–7, gridRow 2
      const skipDesigner = r === 2 && c >= 4 && c <= 5;

        // Developer: gridColumn 2–5, gridRow 3
      const skipDeveloper = r === 3 && c >= 2 && c <= 3;
      
      // Intro text: gridColumn 6–8, gridRow 3
      const skipIntro = r === 3 && c >= 6 && c <= 6;

      const skip = skipDigital || skipDesigner || skipDeveloper || skipIntro;

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
      style={{ gridTemplateRows: `repeat(${rows}, 1fr)` }}
    >
      {cells}
    </div>
  );
}

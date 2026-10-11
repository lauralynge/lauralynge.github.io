import WipeReveal from "./WipeReveal";
import "./AboutGallery.css";

// Billedfelter i "Når jeg ikke designer" – to rækker, hvor det brede felt skifter side.
// image: null = ingen billede endnu (vises med blå baggrund)
const ROWS = [
  [
    { title: "Le Mans", image: "/images/about/le-mans.jpg", wide: true },
    { title: "Caminoen", image: "/images/about/caminoen.jpg" },
  ],
  [
    { title: "Camping", image: "/images/about/camping.jpg" },
    { title: "Interrail", image: null, wide: true },
  ],
];

export default function AboutGallery() {
  return (
    <div className="about-gallery">
      {ROWS.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`about-gallery-row about-gallery-row-${rowIndex + 1}`}
        >
          {row.map((tile, i) => (
            <WipeReveal
              key={tile.title}
              className={`about-tile ${tile.wide ? "is-wide" : ""}`}
              delay={i * 150}
              once
            >
              {tile.image && <img src={tile.image} alt="" />}
              <h3 className="about-tile-title">{tile.title}</h3>
            </WipeReveal>
          ))}
        </div>
      ))}
    </div>
  );
}

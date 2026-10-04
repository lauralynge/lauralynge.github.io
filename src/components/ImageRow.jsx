import "./ImageRow.css";

// Filendelser, der skal vises som video i stedet for billede
const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

export default function ImageRow({ images }) {
  return (
    <div className={`image-row image-row-${images.length}`}>
      {/* Vis video eller billede afhængigt af filtypen */}
      {images.map((src, i) =>
        isVideo(src) ? (
          <video key={i} src={src} autoPlay loop muted playsInline />
        ) : (
          <img key={i} src={src} alt="" />
        ),
      )}
    </div>
  );
}

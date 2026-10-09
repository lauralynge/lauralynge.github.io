import "./ImageRow.css";
import LazyVideo from "./LazyVideo";

// Filendelser, der skal vises som video i stedet for billede
const isVideo = (src) => /\.(mp4|webm)$/i.test(src);

export default function ImageRow({ images }) {
  return (
    <div className={`image-row image-row-${images.length}`}>
      {/* Vis video eller billede afhængigt af filtypen */}
      {images.map((src, i) =>
        isVideo(src) ? (
          <LazyVideo key={i} src={src} />
        ) : (
          <img key={i} src={src} alt="" loading="lazy" decoding="async" />
        ),
      )}
    </div>
  );
}

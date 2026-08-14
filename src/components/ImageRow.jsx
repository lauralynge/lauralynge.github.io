import "./ImageRow.css";

export default function ImageRow({ images }) {
  return (
    <div className={`image-row image-row-${images.length}`}>
      {images.map((src, i) => (
        <img key={i} src={src} alt="" />
      ))}
    </div>
  );
}

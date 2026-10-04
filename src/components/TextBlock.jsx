import "./TextBlock.css";

// Tekstsektion, der vises mellem billedrækkerne på casesiden
export default function TextBlock({ heading, body }) {
  return (
    <div className="text-block">
      {heading && <h4>{heading}</h4>}
      {body && <p>{body}</p>}
    </div>
  );
}

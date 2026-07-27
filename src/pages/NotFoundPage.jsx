import { Link } from "react-router";

function NotFoundPage() {
  return (
    <div className="page narrow">
      <p className="eyebrow">404</p>
      <h1>Siden blev ikke fundet</h1>
      <p className="lead">
        Linket peger på en side, der ikke findes i portfolioen.
      </p>
      <Link className="button" to="/">
        Gå til forsiden
      </Link>
    </div>
  );
}

export default NotFoundPage;

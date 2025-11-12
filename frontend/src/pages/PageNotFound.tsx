import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PageNotFound.css";

function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound d-flex flex-column justify-content-center align-items-center text-center">
      <h2 className="mb-3 text-dark">Oups ! Page non trouvée</h2>
      <p className="text-muted mb-4">
        La page que vous recherchez n’existe pas, a été déplacée ou supprimée.
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary px-4 py-2 rounded-pill shadow-sm"
      >
        Retour à l’accueil
      </button>

      {/* Image décorative optionnelle */}
      <div className="mt-5">
        <img
          src="/images/404error1.svg"
          alt="404 Illustration"
          className="img-fluid notfound-img"
        />
      </div>
    </div>
  );
}

export default PageNotFound;

import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div>
      <h2>Oops...</h2>
      <button>
        <Link to="/">Go back to Home!</Link>
      </button>
    </div>
  );
};

export default ErrorPage;

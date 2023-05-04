import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div>
      <h1 className="fw-bold fs-1 text-danger">404</h1>
      <p className="font-bold text-2xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="font-semibold text-xl">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;

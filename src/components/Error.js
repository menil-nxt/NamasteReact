import React from "react";
import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Oops...</h1>

      <h1>
        {err.status} : {err.statusText} 🧐
      </h1>
      <h2>Something Went Wrong!!!!</h2>
    </div>
  );
};

export default Error;

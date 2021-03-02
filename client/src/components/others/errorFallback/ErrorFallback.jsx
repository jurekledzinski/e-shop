import React from "react";

import "./ErrorFallback.scss";

const ErrorFallback = () => {
  return (
    <div role="alert" className="alert">
      <span className="alert__icon">
        <i className="fas fa-exclamation"></i>
      </span>
      <p className="alert__text1">Oops, something went wrong :(</p>
      <p className="alert__text2">
        We are working on it, we'll get it fixed as soon as we can.
      </p>
    </div>
  );
};

export default ErrorFallback;

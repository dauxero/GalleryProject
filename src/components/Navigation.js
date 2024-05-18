import React from "react";
import { Link } from "react-router-dom";
import { ComponenteUno } from "./ComponenteUno";
import { ComponenteDos } from "./ComponenteDos";
import { ComponenteTres } from "./ComponenteTres";

const Navigation = () => {
  return (
    <div>
      <Link to="/ComponenteUno">
        <figure>
          <ComponenteUno />
          <figcaption></figcaption>
        </figure>
      </Link>
      <Link to="/ComponenteDos">
        <figure>
          <ComponenteDos />
          <figcaption></figcaption>
        </figure>
      </Link>
      <Link to="/ComponenteTres">
        <figure>
          <ComponenteTres />
          <figcaption></figcaption>
        </figure>
      </Link>
    </div>
  );
};

export default Navigation;

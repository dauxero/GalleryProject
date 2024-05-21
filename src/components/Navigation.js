import React from "react";
import { Link } from "react-router-dom";
import { ComponenteUno } from "./ComponenteUno";
import { ComponenteDos } from "./ComponenteDos";
import { ComponenteTres } from "./ComponenteTres";
import { ComponenteCuatro } from "./ComponenteCuatro";
import { ComponenteCinco } from "./ComponenteCinco";
import { ComponenteSeis } from "./ComponenteSeis";
import { ComponenteSiete } from "./ComponenteSiete";
import { ComponenteOcho } from "./ComponenteOcho";
import { ComponenteNueve } from "./ComponenteNueve";
import { ComponenteDiez } from "./ComponenteDiez";

const Navigation = () => {
  return (
    <>
      <div className="flex w-20 gap-4 items-center justify-center mt-4 mx-auto ">
        <Link to="/ComponenteUno">
          <figure>
            <ComponenteUno />
            <figcaption>imagen 1</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteDos">
          <figure>
            <ComponenteDos />
            <figcaption>imagen 2</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteTres">
          <figure>
            <ComponenteTres />
            <figcaption>imagen 3</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteCuatro">
          <figure>
            <ComponenteCuatro />
            <figcaption>imagen 4</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteCinco">
          <figure>
            <ComponenteCinco />
            <figcaption>imagen 5</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteSeis">
          <figure>
            <ComponenteSeis />
            <figcaption>imagen 6</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteSiete">
          <figure>
            <ComponenteSiete />
            <figcaption>imagen 7</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteOcho">
          <figure>
            <ComponenteOcho />
            <figcaption>imagen 8</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteNueve">
          <figure>
            <ComponenteNueve />
            <figcaption>imagen 9</figcaption>
          </figure>
        </Link>
        <Link to="/ComponenteDiez">
          <figure>
            <ComponenteDiez />
            <figcaption>imagen 10</figcaption>
          </figure>
        </Link>
      </div>
    </>
  );
};

export default Navigation;

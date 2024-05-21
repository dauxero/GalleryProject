import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComponenteUno } from "./components/ComponenteUno";
import { ComponenteDos } from "./components/ComponenteDos";
import { ComponenteTres } from "./components/ComponenteTres";
import { ComponenteCuatro } from "./components/ComponenteCuatro";
import { ComponenteCinco } from "./components/ComponenteCinco";
import { ComponenteSeis } from "./components/ComponenteSeis";
import { ComponenteSiete } from "./components/ComponenteSiete";
import { ComponenteOcho } from "./components/ComponenteOcho";
import { ComponenteNueve } from "./components/ComponenteNueve";
import { ComponenteDiez } from "./components/ComponenteDiez";
import Navigation from "./components/Navigation";
import { Titulo } from "./components/Titulo";
function App() {
  return (
    <>
      <main className="bg-gradient-to-r from-cyan-500 to-blue-500 h-screen p-10 ">
        <Titulo />
        <Router>
          <Routes>
            <Route path="/ComponenteUno" Component={ComponenteUno} />
            <Route path="/ComponenteDos" Component={ComponenteDos} />
            <Route path="/ComponenteTres" Component={ComponenteTres} />
            <Route path="/ComponenteCuatro" Component={ComponenteCuatro} />
            <Route path="/ComponenteCinco" Component={ComponenteCinco} />
            <Route path="/ComponenteSeis" Component={ComponenteSeis} />
            <Route path="/ComponenteSiete" Component={ComponenteSiete} />
            <Route path="/ComponenteOcho" Component={ComponenteOcho} />
            <Route path="/ComponenteNueve" Component={ComponenteNueve} />
            <Route path="/ComponenteDiez" Component={ComponenteDiez} />
          </Routes>
          <Navigation />
        </Router>
      </main>
    </>
  );
}

export default App;

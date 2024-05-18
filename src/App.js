import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ComponenteUno } from "./components/ComponenteUno";
import { ComponenteDos } from "./components/ComponenteDos";
import { ComponenteTres } from "./components/ComponenteTres";
import Navigation from "./components/Navigation";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/ComponenteUno" Component={ComponenteUno} />
          <Route path="/ComponenteDos" Component={ComponenteDos} />
          <Route path="/ComponenteTres" Component={ComponenteTres} />
        </Routes>
        <Navigation />
      </Router>
    </>
  );
}

export default App;

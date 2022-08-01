import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";

import Navbar from "components/navigation/Navbar";
import Characters from "components/characters/Characters";
import CharacterDetails from "components/characters/CharacterDetails";
import Episodes from "pages/Episodes";
import Location from "pages/Location";

export const Home = () => {
  return (
    <div>
      <Characters />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/characters" element={<Characters />} />
        <Route path="/character/:id" element={<CharacterDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CharacterDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

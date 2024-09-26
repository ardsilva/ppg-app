import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import { ShowDetails } from "./Molecules/ShowDetails/ShowDetails";
import { Home } from "./Molecules/Home/Home";
import { EpisodeDetails } from "./Molecules/EpisodeDetails/EpisodeDetailts";
import { ShowProvider } from "./context/ShowContext";


export default function App() {
  
  return (
    <ShowProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show" element={<ShowDetails />} />
          <Route path="/episode" element={<EpisodeDetails />} />
        </Routes>
      </Router>
    </ShowProvider>
  );
}


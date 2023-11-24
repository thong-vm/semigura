import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Sensor from "./pages/sensor/Sensor";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sensor" element={<Sensor />} />
      </Routes>
    </Router>
  );
}

export default App;

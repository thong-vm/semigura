import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Sensor from "./pages/sensor/Sensor";
import Login from "./pages/login/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sensor" element={<Sensor />} />
      </Routes>
    </Router>
  );
}

export default App;

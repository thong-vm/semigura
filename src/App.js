import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Layout from "./pages/layout/Layout";
import * as ROUTES from "./constants/routes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.LOGIN.PATH} element={<Login />} />
        <Route path={ROUTES.LAYOUT.PATH} element={<Layout />} />
      </Routes>
    </Router>
  );
}

export default App;

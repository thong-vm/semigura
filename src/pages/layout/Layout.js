import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "../home/Home";
import Sensor from "../sensor/Sensor";
import Sidebar from "../../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import LocalStorage from "../../services/localStorage/localStorage";
import * as ROUTES from "../../constants/routes";
import "./Layout.css";
function Layout() {
  const navigate = useNavigate();
  const [isTokenValid, setTokenValid] = useState(false);
  const token = LocalStorage.get("token");
  const isTokenExpired = (token) => {
    return !token || token === "";
  };

  useEffect(() => {
    const checkToken = async () => {
      if (isTokenExpired(await token)) {
        navigate(ROUTES.LOGIN);
      } else {
        setTokenValid(true);
      }
    };

    checkToken();
  }, [navigate, token]);

  return (
    <>
      {isTokenValid && (
        <div className="layout">
          <div className="layout-sidebar">
            <Sidebar />
          </div>
          <div className="layout-main">
            <div>header here !</div>
            <Routes>
              <Route path={ROUTES.LAYOUT_MAIN} element={<Home />} />
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.SENSOR} element={<Sensor />} />
            </Routes>
            <div>footer here !</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Layout;

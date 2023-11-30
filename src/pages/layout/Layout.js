import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "../home/Home";
import Sensor from "../sensor/Sensor";
import "./Layout.css";
import { useEffect, useState } from "react";
import LocalStorage from "../../services/localStorage/localStorage";
import * as ROUTES from "../../constants/routes";
function Layout() {
  const navigate = useNavigate();
  const [isTokenValid, setTokenValid] = useState(false);
  const token = LocalStorage.get("token");
  const isTokenExpired = (token) => {
    return !token || token === "";
  };

  const logout = () => {
    LocalStorage.clear();
    setTokenValid(false);
    navigate("/login");
  };

  useEffect(() => {
    const checkToken = async () => {
      if (isTokenExpired(await token)) {
        navigate("/login");
      } else {
        setTokenValid(true);
      }
    };

    checkToken();
  }, [navigate, token]);

  return (
    <>
      {isTokenValid && (
        <>
          <div>
            header here !
            <button
              onClick={() => {
                logout();
              }}
            >
              logout
            </button>
          </div>
          <div className="layout">
            <div>sidebar here !</div>
            <div className="layout-main">
              <Routes>
                <Route path={ROUTES.LAYOUT_MAIN} element={<Home />} />
                <Route path={ROUTES.HOME} element={<Home />} />
                <Route path={ROUTES.SENSOR} element={<Sensor />} />
              </Routes>
            </div>
          </div>
          <div>footer here !</div>
        </>
      )}
    </>
  );
}

export default Layout;

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { getAuthStatus, loginAsync } from "../../store/auth/authSlice";
import { Button, Checkbox, Link, TextField } from "@mui/material";
import { LOADING, SUCCEEDED } from "../../constants/store";
import LoadingBar from "react-top-loading-bar";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import * as STRING from "../../constants/string";
import * as ROUTES from "../../constants/routes";
import "./Login.css";
import GeneralForm from "../../components/generalForm/GeneralForm";
function Login() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(getAuthStatus);
  const [login, setLogin] = useState(false);

  const handleLogin = (data) => {
    setLogin(true);
    dispatch(loginAsync(data));
  };
  const fields = [
    {
      register: "username",
      label: "Username",
      type: "text",
    },
    {
      register: "password",
      label: "Password",
      type: "password",
    },
    {
      register: "rememberMe",
      label: "Remember me",
      type: "checkbox",
    },
  ];
  useEffect(() => {
    if (status === SUCCEEDED && login) {
      setLogin(false);
      navigate(ROUTES.HOME);
    }
  }, [status, navigate, login]);
  return (
    <>
      {status === LOADING && (
        <>
          <LoadingBar background="blue" ref={ref} />
        </>
      )}
      <div className="container-wrap">
        <div style={{ width: "40%" }}>
          <div className="container-title">
            <span className="title">{STRING.LOGIN.TITLE}</span>
          </div>
          <GeneralForm
            fields={fields}
            handleProcess={handleLogin}
            submitBtn={STRING.LOGIN.LOGIN_BTN}
          />
          <div className="forgot-signup">
            <Link className="forgot-singup-link">
              {STRING.LOGIN.FORGOT_PASSWORD}
            </Link>
            <Link className="forgot-singup-link">{STRING.LOGIN.SIGN_UP}</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

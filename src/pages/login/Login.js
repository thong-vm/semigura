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
function Login() {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(getAuthStatus);
  const [login, setLogin] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    setLogin(true);
    dispatch(loginAsync(data));
  };
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
      <div className="container-login">
        <form
          className="container-form"
          onSubmit={handleSubmit((data) => handleLogin(data))}
        >
          <div>
            <div className="container-title">
              <span className="title">{STRING.LOGIN.TITLE}</span>
            </div>
            <div className="form-container">
              <div className="form-input">
                <TextField
                  {...register("username", {
                    required: "Username is required.",
                  })}
                  label="Username*"
                  variant="outlined"
                  sx={{ width: "100%" }}
                />
              </div>
              <div className="input-error">
                <ErrorMessage errors={errors} name="username" />
              </div>
            </div>
            <div className="form-container">
              <div className="form-input">
                <TextField
                  {...register("password", {
                    required: "Password is required.",
                  })}
                  label="Password*"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  type="password"
                />
              </div>
              <div className="input-error">
                <ErrorMessage errors={errors} name="password" />
              </div>
            </div>
          </div>
          <div className="container-checkbox">
            <Checkbox id="checkbox" {...register("rememberMe")} />
            <label>Remember me</label>
          </div>
          <Button type="submit" variant="contained">
            {STRING.LOGIN.LOGIN_BTN}
          </Button>
          <div className="forgot-signup">
            <Link className="forgot-singup-link">
              {STRING.LOGIN.FORGOT_PASSWORD}
            </Link>
            <Link className="forgot-singup-link">{STRING.LOGIN.SIGN_UP}</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

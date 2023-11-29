import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";
import { loginAsync } from "../../store/auth/authSlice";
import "./Login.css";
function Login() {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const handleLogin = (data) => {
    dispatch(loginAsync(data));
  };
  return (
    <>
      <div className="container">
        <form
          className="container-form"
          onSubmit={handleSubmit((data) => handleLogin(data))}
        >
          <div>
            <div>
              <div className="form-input">
                <label>Username</label>
                <input
                  {...register("username", { required: "This is required." })}
                  type="text"
                />
              </div>
              <ErrorMessage errors={errors} name="username" />
            </div>
            <div>
              <div className="form-input">
                <label>Password</label>
                <input
                  {...register("password", { required: "This is required." })}
                  type="text"
                />
              </div>
              <ErrorMessage errors={errors} name="password" />
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;

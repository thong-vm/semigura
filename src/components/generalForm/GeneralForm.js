import { ErrorMessage } from "@hookform/error-message";
import { Button, Checkbox, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import "./GeneralForm.css";

function GeneralForm({ fields, handleProcess, submitBtn }) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const fieldRender = (field, key) => {
    let result;
    switch (field.type) {
      case "password":
        result = (
          <div key={key} className="general-form-form-container">
            <div className="general-form-form-input">
              <TextField
                {...register(field.register, {
                  required: `${field.label} is required.`,
                })}
                label={field.label}
                variant={`${field.variant || "outlined"}`}
                sx={{ width: "100%" }}
                type="password"
              />
            </div>
            <div className="general-form-input-error">
              <ErrorMessage errors={errors} name={field.register} />
            </div>
          </div>
        );
        break;
      case "text":
        result = (
          <div key={key} className="general-form-form-container">
            <div className="general-form-form-input">
              <TextField
                {...register(field.register, {
                  required: `${field.label} is required.`,
                })}
                label={field.label}
                variant={`${field.variant || "outlined"}`}
                sx={{ width: "100%" }}
              />
            </div>
            <div className="general-form-input-error">
              <ErrorMessage errors={errors} name={field.register} />
            </div>
          </div>
        );
        break;
      case "checkbox":
        result = (
          <div key={key} className="general-form-container-checkbox">
            <Checkbox
              sx={{ padding: 0 }}
              id={field.register}
              {...register(field.register)}
            />
            <label htmlFor={field.register}>{field.label}</label>
          </div>
        );
        break;

      default:
        result = (
          <div key={key} className="general-form-form-container">
            <div className="general-form-form-input">
              <TextField
                {...register(field.register, {
                  required: `${field.label} is required.`,
                })}
                label={field.label}
                variant={`${field.variant || "outlined"}`}
                sx={field.sx && { width: "100%" }}
              />
            </div>
            <div className="general-form-input-error">
              <ErrorMessage errors={errors} name={field.register} />
            </div>
          </div>
        );
    }
    return result;
  };
  return (
    <div className="general-form-container-main">
      <form
        className="general-form-container-form"
        onSubmit={handleSubmit((data) => handleProcess(data))}
      >
        {fields.map((field, index) => fieldRender(field, index))}
        <div className="general-form-submit-btn">
          <Button sx={{ width: "100%" }} type="submit" variant="contained">
            {submitBtn}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default GeneralForm;

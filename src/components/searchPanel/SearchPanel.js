import React from "react";
import "./SearchPanel.css";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from "@mui/material/Button";

const SearchPanel = ({onSubmit}) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="form-search">
      <form
        className="general-form-container-form"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className="row mt-3">
          <div className="col-md-6 col-sm-12">
            <TextField
              {...register("code")}
              label="Code"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <TextField
              {...register("name")}
              label="Name"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-sm-12">
            <TextField
              {...register("type")}
              label="Type"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-sm-12">
            <TextField
              {...register("factory")}
              label="Factory"
              variant="outlined"
              size="small"
            />
          </div>
          <div className="col-md-6 col-sm-12">
            <TextField
              {...register("tank")}
              label="Tank"
              variant="outlined"
              size="small"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-sm-12">
            <FormControlLabel control={<Checkbox />} label="Not Used" />
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <Button
            className="form-submit-button"
            variant="contained"
            color="success"
            type="submit"
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchPanel;

import React from "react";
import "./SearchPanel.css";
import { useForm } from "react-hook-form";
import {
  TextField,
  FormControlLabel,
  Checkbox,
  MenuItem,
  Button,
} from "@mui/material";

const SearchPanel = ({ typeList, factoryList, tankList, onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="form-search">
      <form
        className="general-form-container-form"
        onSubmit={handleSubmit((data) => onSubmit(data))}
      >
        <div className="row justify-content-around">
          <div className="col-md-4 col-sm-12 mt-3">
            <TextField
              {...register("code")}
              label="Code"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <TextField
              {...register("name")}
              label="Name"
              variant="outlined"
              size="small"
              fullWidth
            />
          </div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-4 col-sm-12 mt-3">
            <TextField
              {...register("type")}
              label="Type"
              variant="outlined"
              size="small"
              select
              defaultValue=""
              fullWidth
            >
              <MenuItem value="">&nbsp;</MenuItem>
              {typeList.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-md-4 col-sm-12 mt-3"></div>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-4 col-sm-12 mt-3">
            <TextField
              {...register("factory")}
              label="Factory"
              variant="outlined"
              size="small"
              select
              defaultValue=""
              fullWidth
            >
              <MenuItem value="">&nbsp;</MenuItem>
              {factoryList.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div className="col-md-4 col-sm-12 mt-3">
            <TextField
              {...register("tank")}
              label="Tank"
              variant="outlined"
              size="small"
              select
              defaultValue=""
              fullWidth
            >
              <MenuItem value="">&nbsp;</MenuItem>
              {tankList.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        {/* <div className="row mt-3">
          <div className="col-md-4 col-sm-12">
            <FormControlLabel control={<Checkbox />} label="Not Used" />
          </div>
        </div> */}
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

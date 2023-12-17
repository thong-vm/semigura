import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const SeachPanelAutoComplete = ({ data }) => {
  const uniqueOptionsMap = new Map();

  data.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (key !== "id") {
        const option = { group: key, value: String(value) };
        const keyString = JSON.stringify(option);

        if (!uniqueOptionsMap.has(keyString)) {
          uniqueOptionsMap.set(keyString, option);
        }
      }
    });
  });

  const options = Array.from(uniqueOptionsMap.values());
  // console.log(options);

  return (
    <Autocomplete
      options={options.sort((a, b) => -b.group.localeCompare(a.group))}
      groupBy={(option) => option.group}
      getOptionLabel={(option) => option.value}
      renderInput={(params) => <TextField {...params} label="Select values" />}
      freeSolo
    />
  );
};

export default SeachPanelAutoComplete;

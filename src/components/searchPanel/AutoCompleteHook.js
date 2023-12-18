import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";
import Typography from '@mui/material/Typography';

function Tag(props) {
  const { label, onDelete, ...other } = props;
  return (
    <div {...other}>
      <span>{label}</span>
      <CloseIcon onClick={onDelete} />
    </div>
  );
}

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default function CustomizedHook( data, onValueChange ) {
  const options = arrangeOptions(data);

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getTagProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
    value,
    focused,
    setAnchorEl,
  } = useAutocomplete({
    id: "customized-hook-demo",
    defaultValue: [],
    multiple: true,
    options: optionsList, //.sort((a, b) => -b.group.localeCompare(a.group)),
    getOptionLabel: (option) => option.value,
    onChange: (event, newValue) => onValueChange(newValue),
  });
  console.log("options: ", groupedOptions);
  console.log("value : ", value);

  return (
    <Root>
      <div {...getRootProps()}>
        <Typography variant="h5" gutterBottom {...getInputLabelProps()}>
          Search Box
        </Typography>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option.value} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li {...getOptionProps({ option, index })}>
              <span>{option.value}</span>
              <CheckIcon fontSize="small" />
            </li>
          ))}
        </Listbox>
      )
      // <Listbox {...getListboxProps()}>
      //   {groupedOptions.map((group, groupIndex) => (
      //     <React.Fragment key={groupIndex}>
      //       <li className="group-label">{group.group}</li>
      //       {group.options.map((option, optionIndex) => {
      //         // log check getOptionProps
      //         // const optionProps = getOptionProps({ option, index: `${groupIndex}-${optionIndex}` });
      //         const optionProps = getOptionProps({ option, index: optionIndex });
      //         console.log(`#${groupIndex}-${optionIndex} getOptionProps `, optionProps);
      //         return (
      //           <li
      //             key={`${groupIndex}-${optionIndex}`}
      //             {...optionProps}
      //           >
      //             <span>{option.value}</span>
      //             <CheckIcon fontSize="small" />
      //           </li>
      //         );
      //       })}
      //     </React.Fragment>
      //   ))}
      // </Listbox>) 
      : null}
    </Root>
  );
}

function arrangeOptions(data){
  const uniqueOptionsMap = new Map();

  data?.forEach((obj) => {
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

  return Array.from(uniqueOptionsMap.values());
}

const optionsList = [
  {
    group: "code",
    value: "1749876016",
  },
  {
    group: "code",
    value: "3984725190",
  },
  {
    group: "code",
    value: "6538172945",
  },
  {
    group: "code",
    value: "7192836450",
  },
  {
    group: "code",
    value: "5678901234",
  },
  {
    group: "code",
    value: "1234567890",
  },
  {
    group: "code",
    value: "0987654321",
  },
  {
    group: "code",
    value: "5432109876",
  },
  {
    group: "code",
    value: "1357924680",
  },
  {
    group: "code",
    value: "2468013579",
  },
  {
    group: "code",
    value: "9876543210",
  },
  {
    group: "code",
    value: "0123456789",
  },
  {
    group: "code",
    value: "9870123456",
  },
  {
    group: "factory",
    value: "FACTORY-HLHC",
  },
  {
    group: "factory",
    value: "FACTORY-ABCD",
  },
  {
    group: "factory",
    value: "FACTORY-EFGH",
  },
  {
    group: "factory",
    value: "FACTORY-UVWX",
  },
  {
    group: "factory",
    value: "FACTORY-QRST",
  },
  {
    group: "factory",
    value: "FACTORY-IJKL",
  },
  {
    group: "factory",
    value: "FACTORY-WXYZ",
  },
  {
    group: "name",
    value: "NAME-QXTT",
  },
  {
    group: "name",
    value: "NAME-WXYZ",
  },
  {
    group: "name",
    value: "NAME-UVWX",
  },
  {
    group: "name",
    value: "NAME-ABCD",
  },
  {
    group: "name",
    value: "NAME-EFGH",
  },
  {
    group: "name",
    value: "NAME-1234",
  },
  {
    group: "name",
    value: "NAME-IJKL",
  },
  {
    group: "name",
    value: "NAME-QRST",
  },
  {
    group: "name",
    value: "NAME-PQRS",
  },
  {
    group: "name",
    value: "NAME-5678",
  },
  {
    group: "tank",
    value: "TANK-SXCV",
  },
  {
    group: "tank",
    value: "LOT-T316",
  },
  {
    group: "tank",
    value: "LOCATION-P12",
  },
  {
    group: "tank",
    value: "TANK-IJKL",
  },
  {
    group: "tank",
    value: "TANK-5678",
  },
  {
    group: "tank",
    value: "LOT-T123",
  },
  {
    group: "tank",
    value: "LOCATION-P34",
  },
  {
    group: "tank",
    value: "TANK-ABCD",
  },
  {
    group: "tank",
    value: "LOT-T456",
  },
  {
    group: "tank",
    value: "LOCATION-P56",
  },
  {
    group: "tank",
    value: "TANK-7890",
  },
  {
    group: "tank",
    value: "TANK-1234",
  },
  {
    group: "tank",
    value: "LOT-T789",
  },
  {
    group: "type",
    value: "2",
  },
  {
    group: "type",
    value: "1",
  },
  {
    group: "type",
    value: "4",
  },
  {
    group: "type",
    value: "3",
  },
];

const Root = styled("div")(
  ({ theme }) => `
  color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.65)" : "rgba(0,0,0,.85)"
  };
  font-size: 14px;
`
);

const Label = styled("label")`
  padding: 0 0 4px;
  line-height: 1.5;
  display: block;
`;

const InputWrapper = styled("div")(
  ({ theme }) => `
  width: 300px;
  border: 1px solid ${theme.palette.mode === "dark" ? "#434343" : "#d9d9d9"};
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  border-radius: 4px;
  padding: 1px;
  display: flex;
  flex-wrap: wrap;

  &:hover {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
  }

  &.focused {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }

  & input {
    background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
    color: ${
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.65)"
        : "rgba(0,0,0,.85)"
    };
    height: 30px;
    box-sizing: border-box;
    padding: 4px 6px;
    width: 0;
    min-width: 30px;
    flex-grow: 1;
    border: 0;
    margin: 0;
    outline: 0;
  }
`
);

const StyledTag = styled(Tag)(
  ({ theme }) => `
  display: flex;
  align-items: center;
  height: 24px;
  margin: 2px;
  line-height: 22px;
  background-color: ${
    theme.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "#fafafa"
  };
  border: 1px solid ${theme.palette.mode === "dark" ? "#303030" : "#e8e8e8"};
  border-radius: 2px;
  box-sizing: content-box;
  padding: 0 4px 0 10px;
  outline: 0;
  overflow: hidden;

  &:focus {
    border-color: ${theme.palette.mode === "dark" ? "#177ddc" : "#40a9ff"};
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
  }

  & span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  & svg {
    font-size: 12px;
    cursor: pointer;
    padding: 4px;
  }
`
);

const Listbox = styled("ul")(
  ({ theme }) => `
  width: 300px;
  margin: 2px 0 0;
  padding: 0;
  position: absolute;
  list-style: none;
  background-color: ${theme.palette.mode === "dark" ? "#141414" : "#fff"};
  overflow: auto;
  max-height: 250px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1;

  & li {
    padding: 5px 12px;
    display: flex;

    & span {
      flex-grow: 1;
    }

    & svg {
      color: transparent;
    }
  }

  & li[aria-selected='true'] {
    background-color: ${theme.palette.mode === "dark" ? "#2b2b2b" : "#fafafa"};
    font-weight: 600;

    & svg {
      color: #1890ff;
    }
  }

  & li.${autocompleteClasses.focused} {
    background-color: ${theme.palette.mode === "dark" ? "#003b57" : "#e6f7ff"};
    cursor: pointer;

    & svg {
      color: currentColor;
    }
  }
`
);

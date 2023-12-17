import * as React from "react";
import PropTypes from "prop-types";
import { useAutocomplete } from "@mui/base/useAutocomplete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { autocompleteClasses } from "@mui/material/Autocomplete";

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

export default function CustomizedHook() {
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
    options: optionsList,
    groupBy: (option) => option.group,
    getOptionLabel: (option) => option.value,
  });
  console.log("options: ", groupedOptions);

  return (
    <Root>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>Customized hook</Label>
        <InputWrapper ref={setAnchorEl} className={focused ? "focused" : ""}>
          {value.map((option, index) => (
            <StyledTag label={option.value} {...getTagProps({ index })} />
          ))}
          <input {...getInputProps()} />
        </InputWrapper>
      </div>
      {groupedOptions.length > 0 ? (
        // <Listbox {...getListboxProps()}>
        //   {groupedOptions.map((option, index) => (
        //     <li {...getOptionProps({ option, index })}>
        //       <span>{option.value}</span>
        //       <CheckIcon fontSize="small" />
        //     </li>
        //   ))}
        // </Listbox>
        // ----------
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((group, groupIndex) => (
            <React.Fragment key={groupIndex}>
              <li className="group-label">{group.group}</li>
              {group.options.map((option, optionIndex) => {
                // check getOptionProps
                const optionProps = getOptionProps({ option, index: `${groupIndex}-${optionIndex}` });
                console.log(`#${groupIndex}-${optionIndex} getOptionProps `, optionProps);
                return (
                  <li
                    key={`${groupIndex}-${optionIndex}`}
                    {...optionProps}
                  >
                    <span>{option.value}</span>
                    <CheckIcon fontSize="small" />
                  </li>
                );
              })}
              {/* {group.options.map((option, optionIndex) => (
                <li
                  key={`${groupIndex}-${optionIndex}`}
                  {...getOptionProps({ option, index: optionIndex })}
                >
                  <span>{option.value}</span>
                  <CheckIcon fontSize="small" />
                </li>
              ))} */}
            </React.Fragment>
          ))}
        </Listbox>
      ) : null}
    </Root>
  );
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
  },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    year: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    year: 1980,
  },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  {
    title: "The Lord of the Rings: The Two Towers",
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  {
    title: "Star Wars: Episode IV - A New Hope",
    year: 1977,
  },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  {
    title: "Star Wars: Episode VI - Return of the Jedi",
    year: 1983,
  },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
  },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];

const optionsList = [
  // {
  //   group: "code",
  //   value: "1749876016",
  // },
  // {
  //   group: "code",
  //   value: "3984725190",
  // },
  // {
  //   group: "code",
  //   value: "6538172945",
  // },
  // {
  //   group: "code",
  //   value: "7192836450",
  // },
  // {
  //   group: "code",
  //   value: "5678901234",
  // },
  // {
  //   group: "code",
  //   value: "1234567890",
  // },
  // {
  //   group: "code",
  //   value: "0987654321",
  // },
  // {
  //   group: "code",
  //   value: "5432109876",
  // },
  // {
  //   group: "code",
  //   value: "1357924680",
  // },
  // {
  //   group: "code",
  //   value: "2468013579",
  // },
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

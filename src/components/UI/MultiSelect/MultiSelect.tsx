import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Text } from "../Text";
import "./MultiSelect.scss";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
      padding: 2,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface Props {
  options?: any;
}

export const MultiSelect: React.FC<Props> = ({ options }) => {
  const theme = useTheme();
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl className="input-container">
        <Select
          multiple
          displayEmpty
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <Text text="Roles" className="description fourth-color" />;
            }
            console.log("Selected: ", selected);
            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
          className="select-container"
        >
          <div className="menu">
            {options &&
              Object.keys(options)?.map((option: string) => (
                <>
                  <Text
                    text={option.toUpperCase()}
                    className="third-color text-temp"
                  />
                  {options[option]?.values.map(
                    (value: string, index: number) => (
                      <MenuItem
                        key={index}
                        value={value}
                        style={getStyles(value, selectedOptions, theme)}
                        className="menu-item"
                      >
                        <Text text={value} className="description" />
                      </MenuItem>
                    )
                  )}
                </>
              ))}
          </div>
        </Select>
      </FormControl>
    </div>
  );
};

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Chip } from "@mui/material";

interface Props {
  options?: any;
  placeholder: string;
}

export const SingleSelect: React.FC<Props> = ({ options, placeholder }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 125 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          {placeholder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
          renderValue={(age) => <Chip label={age} />}
        >
          {options?.map((value: string, index: number) => (
            <MenuItem value={value} key={index}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

import React from "react";
import "./TextInput.scss";
import {
  Box,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

interface Props {
  label?: string;
  width?: string;
  size?: any;
  name?: string;
  ref?: any;
  value?: string;
  handleChange?: any;
  type?: string;
  placeholder?: string;
  dropdownOptions?: any;
  nestedOptions?: boolean;
}
export const TextInput: React.FC<Props> = React.forwardRef(
  (
    {
      label,
      width,
      size,
      name,
      value,
      handleChange,
      type = "text",
      placeholder = "",
      dropdownOptions,
      nestedOptions,
    },
    ref
  ) => {
    console.log("NEsted Options: ", nestedOptions);
    dropdownOptions?.length &&
      dropdownOptions?.map((option: any, index: number) =>
        console.log("Option: ", option)
      );

    console.log("DropDown Options: ", dropdownOptions);
    const [open, setOpen] = React.useState(false); // State for dropdown visibility

    const handleChangeDropdown = (event: any) => {
      // handleDropdownChange(event.target.value);
    };
    return (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 0 },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={`text-input ${width ? width : ""}`}>
          <TextField
            type={type}
            value={value}
            inputRef={ref}
            label={placeholder}
            name={name}
            onChange={handleChange}
            // placeholder={placeholder}
            select
            multiline
            size={size ?? ""}
            inputProps={{
              endadornment: (
                <InputAdornment position="end">
                  {nestedOptions === true ? (
                    <div>
                      {dropdownOptions?.length &&
                        dropdownOptions?.map((option: any, index: number) => (
                          <div key={index}>
                            {option?.title}
                            {option?.values.map(
                              (value: string, index: number) => (
                                <MenuItem key={index} value={value}>
                                  {value}
                                </MenuItem>
                              )
                            )}
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div>
                      {dropdownOptions?.length &&
                        dropdownOptions?.map(
                          (option: string, index: number) => {
                            <MenuItem key={index} value={option}>
                              {option}
                            </MenuItem>;
                          }
                        )}
                    </div>
                  )}
                </InputAdornment>
              ),
            }}
          ></TextField>
        </div>
      </Box>
    );
  }
);

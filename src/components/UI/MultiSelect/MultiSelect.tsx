// import * as React from "react";
// import { Theme, useTheme } from "@mui/material/styles";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";
// import { Text } from "../Text";
// import "./MultiSelect.scss";
// import { Box, Chip, InputLabel } from "@mui/material";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 100,
//       padding: 2,
//     },
//   },
// };

// function getStyles(
//   job: string,
//   selectedOptions: readonly string[],
//   theme: Theme
// ) {
//   console.log("Sels: ", selectedOptions);
//   return {
//     fontWeight:
//       selectedOptions.indexOf(job) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// interface Props {
//   options?: any;
// }

// export const MultiSelect: React.FC<Props> = ({ options }) => {
//   const theme = useTheme();
//   const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);

//   const handleChange = (event: SelectChangeEvent<typeof selectedOptions>) => {
//     const {
//       target: { value },
//     } = event;
//     console.log("Target: ", event);
//     setSelectedOptions(
//       // On autofill we get a stringified value.
//       typeof value === "string" ? value.split(",") : value
//     );
//   };

//   return (
//     <div>
//       <FormControl className="input-container">
//         <InputLabel id="demo-multiple-chip-label">
//           <Text text="Roles" className="description fourth-color" />
//         </InputLabel>
//         <Select
//           multiple
//           value={selectedOptions}
//           onChange={handleChange}
//           input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//           renderValue={(selected) => (
//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//               {selected.map((value) => (
//                 <Chip key={value} label={value} />
//               ))}
//             </Box>
//           )}
//           MenuProps={MenuProps}
//           inputProps={{ "aria-label": "Without label" }}
//           className="select-container"
//         >
//           <div className="menu">
//             {options &&
//               Object.keys(options)?.map((option: string) => (
//                 <>
//                   <Text
//                     text={option.toUpperCase()}
//                     className="third-color text-temp"
//                   />
//                   {options[option]?.values.map(
//                     (value: string, index: number) => (
//                       <MenuItem
//                         key={index}
//                         value={value}
//                         style={getStyles(value, selectedOptions, theme)}
//                         className="menu-item"
//                       >
//                         <Text text={value} className="description" />
//                       </MenuItem>
//                     )
//                   )}
//                 </>
//               ))}
//           </div>
//         </Select>
//       </FormControl>
//     </div>
//   );
// };

import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Text } from "../Text";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(
  value: string,
  selectedOptions: readonly string[],
  theme: Theme
) {
  return {
    fontWeight:
      selectedOptions.indexOf(value) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

interface Props {
  options?: any;
  placeholder: string;
}

export const MultiSelect: React.FC<Props> = ({ options, placeholder }) => {
  const generateUniqueKey = () => {
    const timestamp = Date.now(); // Get current timestamp
    const randomNumber = Math.floor(Math.random() * 1000000); // Generate random number
    return `${timestamp}-${randomNumber}`;
  };
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
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{placeholder}</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedOptions}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box
              sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
              key={generateUniqueKey()}
            >
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          <div className="menu">
            {options &&
              Object.keys(options)?.map((option: string, index: number) => (
                <React.Fragment key={index}>
                  {options[option].title && (
                    <Text
                      text={options[option].title.toUpperCase()}
                      className="third-color text-temp"
                    />
                  )}
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
                </React.Fragment>
              ))}
          </div>
        </Select>
      </FormControl>
    </div>
  );
};

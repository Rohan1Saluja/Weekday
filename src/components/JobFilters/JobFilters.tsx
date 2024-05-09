import "./JobFilters.scss";
// import { TextInput } from "../UI/TextInput";
import {
  GetExperienceLevels,
  GetNumberOfEmployees,
  GetRoles,
  GetWorkPreference,
} from "../constants";
import { TextInput } from "../UI/TextInput";
import { MultiSelect } from "../UI/MultiSelect";
import { SingleSelect } from "../UI/SingleSelect";

export const JobFilters: React.FC = () => {
  const roles = GetRoles();
  const experience = GetExperienceLevels();
  const employees = GetNumberOfEmployees();
  const workPreference = GetWorkPreference();
  return (
    <div className="filters">
      {/* <TextInput
        width="small"
        placeholder="Roles"
        size="small"
        nestedOptions
        dropdownOptions={roles}
      /> */}
      <MultiSelect options={roles} placeholder="Roles" />
      {/* <TextInput width="small" placeholder="Number Of Employees" size="small" />
       */}
      <MultiSelect options={employees} placeholder="Number Of Employees" />
      {/* <TextInput
        width="small"
        placeholder="Experience"
        dropdownOptions={experience}
        size="small"
      /> */}
      <SingleSelect options={experience} placeholder="Experience" />
      {/* <TextInput width="small" placeholder="Remote" size="small" /> */}
      <MultiSelect options={workPreference} placeholder="Remote" />
      <TextInput width="small" placeholder="Search Company Name" />
    </div>
  );
};

import "./JobFilters.scss";
// import { TextInput } from "../UI/TextInput";
import { GetExperienceLevels, GetRoles } from "../constants";
import { TextInput } from "../UI/TextInput";

export const JobFilters: React.FC = () => {
  const roles = GetRoles();
  const experience = GetExperienceLevels();
  return (
    <div className="filters">
      <TextInput
        width="small"
        placeholder="Roles"
        size="small"
        nestedOptions
        dropdownOptions={roles}
      />
      <TextInput width="small" placeholder="Number Of Employees" size="small" />
      <TextInput
        width="small"
        placeholder="Experience"
        dropdownOptions={experience}
        size="small"
      />
      <TextInput width="small" placeholder="Remote" size="small" />
      <TextInput
        width="small"
        placeholder="Minimum Base Pay Salary"
        size="small"
      />
      <TextInput width="small" placeholder="Search Company Name" size="small" />
    </div>
  );
};

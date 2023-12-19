import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

export const DropdownOptions = ({ options, onSelect }) => {
  const defaultOption = options[0];
  return (
    <Dropdown
      options={options}
      onChange={onSelect}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
};

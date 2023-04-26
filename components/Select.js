import React from "react";


const Select = () => {
  const [selectValue, setSelectValue] = React.useState("");
  const onChange = (event) => {
    const value = event.target.value;
    setSelectValue(value);
  };
  return (
    <div>
      <select onChange={onChange} className="form-select">
        <option defaultValue disabled>
          Select Fruit
        </option>
        <option value="first: $70.00">First: $70.00</option>
        <option value="cut: $40.00">Cut: $40.00</option>
        <option value="olaplex: $30.00">Olaplex: $30.00</option>
        <option value="online: $20.00">Online: $20.00</option>
      </select>
        <h2 className="mt-3">{selectValue}</h2>
    </div>
  );
};
export default Select;
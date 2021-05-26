import React, { useState } from 'react';
import Select from 'react-select';


const apiData = {
  type: 'COMBO|AutoComplete',
  entity: "CITY",
  input: 'search',
  page: '1',
  rows: '10',
}

const Entity = {
  COUNTRY: 'country',
  CITY: 'city',
  GENDER: 'gender',
  JOB: 'job',
  HOJREH: 'hojreh',
  RASTEH: 'rasteh'
}



const CustomDropDown = (props) => {


  const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState(props.entity ? [{ value: 'chocolate2', label: 'Chocolate2' },] : props.options);

  /**
   * 
   * @param {function} selectedOption 
   * @param {*onChange > callBack function} props
   */
  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    props.onChange(selectedOption);
  };

  return (
    <Select
      {...props}
      className={`dropDown ${props.className}`}
      options={options}
      value={selectedOption}
      onChange={handleChange}
    />
  );
}

export { CustomDropDown };
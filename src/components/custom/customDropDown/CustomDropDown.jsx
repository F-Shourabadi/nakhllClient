import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

class CustomDropDown extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        {...this.props}
        defaultValue={options[1]}
        // defaultInputValue={ }
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        isDisabled={false}
        isMulti={true}
        placeholder={"enter or selected item..."}
        isSearchable={true}
        onMenuClose={(close) => { }}
        onMenuOpen={(open) => { }}
        onInputChange={(searchInput) => { }}
      />
    );
  }
}

export default CustomDropDown;
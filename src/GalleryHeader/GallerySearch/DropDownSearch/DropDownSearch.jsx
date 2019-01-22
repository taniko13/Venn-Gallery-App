import React, { Component } from 'react'
import Dropdown from 'react-dropdown';
import './DropDownSearch.css';

const arrowClosed = (
  <span className="arrow-closed" />
)
const arrowOpen = (
  <span className="arrow-open" />
)

class DropdownSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: '',
      options: props.options,
    }
  }
  onSelectChanged = (option)=>{
    //console.log(option);
    this.setState({selected: option})
    this.props.searchText(option.value);
  }

  render () {
    const defaultOption = this.state.selected;
    const options = this.state.options;
    return (
      <section>
        <Dropdown
          arrowClosed={arrowClosed}
          arrowOpen={arrowOpen}
          options={options}
          value={defaultOption}
          onChange={this.onSelectChanged}
          placeholder="Select an option"
        />
      </section>
    )
  }
}

export default DropdownSearch;
import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';

const Search = () => <InputGroup>
<Input placeholder="Search for a product brand" />
<InputGroupAddon addonType="append">
  <InputGroupText>$</InputGroupText>
</InputGroupAddon>
</InputGroup>;


class SearchField extends React.Component {
  render() {
    return (
      <div>
        {Search()}
      </div>
    );
  }
}

export default SearchField;

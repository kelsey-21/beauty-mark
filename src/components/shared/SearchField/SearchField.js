import React from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchField extends React.Component {
  render() {
    const searchIcon = <FontAwesomeIcon className="searchIcon" icon={faSearch} size="xs" />;
    return (
        <InputGroup>
          <Input placeholder="Product brand" />
            <InputGroupAddon addonType="append">
              <InputGroupText>{searchIcon}</InputGroupText>
            </InputGroupAddon>
        </InputGroup>
    );
  }
}

export default SearchField;

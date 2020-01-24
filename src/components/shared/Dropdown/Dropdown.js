import React from 'react';
import PropTypes from 'prop-types';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import shapes from '../../../helpers/props/shapes';

class DropdownComp extends React.Component {
  state = {
    isOpen: false,
  }

  static propTypes = {
    category: PropTypes.string,
    categories: PropTypes.arrayOf(shapes.categoryShape),
    updateCategory: PropTypes.func,
  }

  handleClose = (e) => {
    console.log(e.value);
    this.props.updateCategory(e.target.id);
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const { categories, category } = this.props;
    const categoryList = categories.map((categorie) => <DropdownItem key={categorie.id} value={categorie.category} onClick={this.handleClose}>{categorie.category}</DropdownItem>);

    return (
      <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
      <DropdownToggle caret>
        {category}
      </DropdownToggle>
      <DropdownMenu>
        {categoryList}
      </DropdownMenu>
    </Dropdown>
    );
  }
}

export default DropdownComp;

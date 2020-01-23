import React from 'react';


class DropdownComp extends React.Component {
  handleClose = (e) => {
    this.props.updateCategory();
  };

  menuItems = () => {
    this.props.categories.forEach((categorie) => <a class="dropdown-item" href="#" onClick={this.handleClose}>{categorie.category}</a>);
  };

  render() {
    return (
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.props.category}
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {this.menuItems()}
        </div>
      </div>
    );
  }
}

export default DropdownComp;

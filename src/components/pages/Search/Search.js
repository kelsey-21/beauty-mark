import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import {
  InputGroup, InputGroupAddon, Input,
  Button, Dropdown, DropdownToggle,
  DropdownMenu, DropdownItem,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import SearchCard from '../../shared/SearchCard/SearchCard';
import productData from '../../../helpers/data/productData';
import authData from '../../../helpers/data/authData';

import './Search.scss';

class Search extends React.Component {
  state = {
    isOpen: false,
    category: '',
    searchBrand: '',
    searchCategories: [],
    searchedProducts: [],
    isAdmin: false,
  }

  checkIfAdmin = () => {
    if (authData.getUid() === 'zydbWlIlYufAZU5qegcHhCpze3h2') {
      this.setState({ isAdmin: true });
    }
  }

  componentDidMount() {
    const value = queryString.parse(this.props.location.search);
    console.log(value);
    if (value !== { category: '' }) {
      this.setState({ category: value.category });
    } else {
      this.setState({ category: 'bronzer' });
    }
    const categories = productData.getProductCategories();
    this.setState({ searchCategories: categories });
    this.checkIfAdmin();
  }

  updateCategory = (category) => {
    this.setState({ category });
  }

  searchChange = (e) => {
    e.preventDefault();
    this.setState({ searchBrand: e.target.value });
  }

  changeCategory = (e) => {
    e.preventDefault();
    this.setState({ category: e.target.value });
  };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  searchBrandsEvent = (e) => {
    e.preventDefault();
    const { category, searchBrand } = this.state;
    productData.getFilteredProducts(searchBrand, category)
      .then((products) => {
        this.setState({ searchedProducts: products });
      })
      .catch((error) => console.error(error));
  }

  render() {
    const { category, searchCategories } = this.state;

    const searchIcon = <FontAwesomeIcon className="searchIcon" icon={faSearch} size="xs" />;

    const categoryList = searchCategories.map((categorie) => <DropdownItem key={categorie.id} value={categorie.category} onClick={this.changeCategory}>{categorie.category}</DropdownItem>);

    const productCard = this.state.searchedProducts.map((product) => <SearchCard key={product.id} product={product} isAdmin={this.state.isAdmin} />);

    return (
      <div className="Search">
        <h3>Search for your makeup products</h3>
        <p>Search for the brand name of your makeup product first to see if we have it!</p>
        <div className="d-flex justify-content-center mb-2">
        <div className="col-10">
          <div className="row dropdown mb-2">
            <Dropdown isOpen={this.state.isOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              {category}
            </DropdownToggle>
            <DropdownMenu>
              {categoryList}
            </DropdownMenu>
          </Dropdown>
          </div>
          <div className="row searchField justify-content-center mb-2">
          <InputGroup>
            <Input placeholder="Product Brand" value={this.state.searchBrand.toLowerCase()} onChange={this.searchChange} />
            <InputGroupAddon addonType="append"><Button color="secondary" onClick={this.searchBrandsEvent}>{searchIcon}</Button></InputGroupAddon>
          </InputGroup>
          </div>
        </div>
        </div>
        <p className="text-muted">Can't find your product?</p>
        <Link to="/face/new" className="btn btn-outline-secondary">Add it here</Link>
        <div className="d-flex container justify-content-center mb-2 flex-wrap SearchArea">
          {productCard}
        </div>
      </div>
    );
  }
}

export default Search;

import React from 'react';
import queryString from 'query-string';

import SearchField from '../../shared/SearchField/SearchField';
import Dropdown from '../../shared/Dropdown/Dropdown';

import './Search.scss';
import productData from '../../../helpers/data/productData';

class Search extends React.Component {
  state = {
    searchBrand: '',
    category: '',
    searchCategories: [],
  }

  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    this.setState({ category: values.category });
    const categories = productData.getProductCategories();
    this.setState({ searchCategories: categories });
  }

  render() {
    const { category, searchCategories } = this.state;
    console.log(searchCategories);
    return (
      <div className="Search">
        <h1>Search Page</h1>
        <div className="d-flex justify-content-center align-items-center">
          <Dropdown category={category} categories={searchCategories}/>
          <SearchField />
        </div>
      </div>
    );
  }
}

export default Search;

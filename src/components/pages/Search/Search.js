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

  updateCategory = (category) => {
    this.setState({ category });
  }

  render() {
    const { category, searchCategories } = this.state;
    return (
      <div className="Search">
        <h3>Search for your makeup products</h3>
        <p>Search for the brand name of your makeup product first, to see if we have it!</p>
        <div className="d-flex justify-content-center mb-2">
        <div className="col-10">
          <div className="row dropdown mb-2">
          <Dropdown category={category} categories={searchCategories} updateCategory={this.updateCategory} />
          </div>
          <div className="row searchField justify-content-center mb-2">
          <SearchField />
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Search;

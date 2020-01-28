import React from 'react';
import { Button } from 'reactstrap';

import './ProductForm.scss';
import productData from '../../../helpers/data/productData';
import userProductData from '../../../helpers/data/userProductData';
import authData from '../../../helpers/data/authData';

class ProductForm extends React.Component {
  state = {
    productName: '',
    productBrand: '',
    productIngredients: '',
    productCategory: '',
    productDesc: '',
  }

  saveProductEvent = (e) => {
    e.preventDefault();
    const {
      productName, productBrand, productIngredients,
      productCategory, productDesc,
    } = this.state;
    const newProductInfo = {
      brand: productBrand,
      category: productCategory,
      description: productDesc,
      ingredients: productIngredients,
      name: productName,
    };
    if (Object.keys(newProductInfo) !== []) {
      this.saveNewProduct(newProductInfo);
    }
    this.setState({
      productName: '',
      productBrand: '',
      productIngredients: '',
      productCategory: '',
      productDesc: '',
    });
  }

  saveNewProduct = (newProductInfo) => {
    productData.saveProduct(newProductInfo)
      .then((response) => {
        console.log(response.data.name);
        const newUserProductInfo = {
          productId: response.data.name,
          uid: authData.getUid(),
        };
        userProductData.saveUserProduct(newUserProductInfo)
          .then(() => {
            this.props.history.push('/');
          });
      })
      .catch((error) => console.error(error));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ productName: e.target.value });
  }

  brandChange = (e) => {
    e.preventDefault();
    this.setState({ productBrand: e.target.value });
  }

  categoryChange = (e) => {
    e.preventDefault();
    this.setState({ productCategory: e.target.value });
  }

  descChange = (e) => {
    e.preventDefault();
    this.setState({ productDesc: e.target.value });
  }

  ingredientsChange = (e) => {
    e.preventDefault();
    this.setState({ productIngredients: e.target.value });
  }

  render() {
    return (
      <div className="ProductForm">
        <form className='col-6 offset-3 ProductForm'>
          <div className="form-group">
            <label htmlFor="order-name">Product Name:</label>
            <input
              type="text"
              className="form-control"
              id="product-name"
              placeholder="Enter product name"
              value={this.state.productName.toLowerCase()}
              onChange={this.nameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description-name">Product Brand:</label>
            <input
            type="text"
            className="form-control"
            id="product-brand"
            placeholder="Enter product brand"
            value={this.state.productBrand.toLowerCase()}
            onChange={this.brandChange}
            required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description-name">Product Category:</label>
            <select className="form-control form-control-sm"
            id="product-category"
            value={this.state.productCategory}
            onChange={this.categoryChange}
            required >
              <option defaultValue>Choose a category...</option>
              <option>blush</option>
              <option>bronzer</option>
              <option>eyeshadow</option>
              <option>eyeliner</option>
              <option>foundation</option>
              <option>mascara</option>
              <option>lipstick</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description-name">Product Description:</label>
            <input
            type="text"
            className="form-control"
            id="product-description"
            placeholder="Enter product description"
            value={this.state.productDesc}
            onChange={this.descChange}
            required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description-name">Product Ingredients:</label>
            <input
            type="text"
            className="form-control"
            id="product-ingredients"
            placeholder="List product ingredients"
            value={this.state.productIngredients.toLowerCase()}
            onChange={this.ingredientsChange}
            required
            />
          </div>
          <Button className="btn btn-secondary" onClick={this.saveProductEvent}>Save and Add to my bag</Button>
        </form>
      </div>
    );
  }
}

export default ProductForm;

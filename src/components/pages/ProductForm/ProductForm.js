import React from 'react';
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './ProductForm.scss';
import productData from '../../../helpers/data/productData';
import userProductData from '../../../helpers/data/userProductData';
import smash from '../../../helpers/data/smash';
import authData from '../../../helpers/data/authData';

class ProductForm extends React.Component {
  state = {
    productName: '',
    productBrand: '',
    productIngredients: '',
    productCategory: '',
    productDesc: '',
    alert: false,
  }

  componentDidMount() {
    const { productId } = this.props.match.params;
    if (productId) {
      productData.getProductById(productId)
        .then((response) => {
          this.setState({
            productName: response.data.name,
            productBrand: response.data.brand,
            productIngredients: response.data.ingredients,
            productCategory: response.data.category,
            productDesc: response.data.description,
          });
        })
        .catch((err) => console.error(err));
    }
  }

  updateProductEvent = (e) => {
    e.preventDefault();
    const { productId } = this.props.match.params;
    const updatedProduct = {
      name: this.state.productName,
      description: this.state.productDesc,
      brand: this.state.productBrand,
      ingredients: this.state.productIngredients,
      category: this.state.productCategory,
    };
    productData.updateProduct(productId, updatedProduct)
      .then(() => this.props.history.push('/'))
      .catch((err) => console.error('err from edit board form', err));
  }

  saveProductEvent = (e) => {
    e.preventDefault();
    const {
      productName, productBrand, productIngredients,
      productCategory, productDesc,
    } = this.state;
    if (productName !== '' && productBrand !== '' && productIngredients !== '' && productCategory !== '' && productDesc !== null) {
      const newProductInfo = {
        brand: productBrand,
        category: productCategory,
        description: productDesc,
        ingredients: productIngredients,
        name: productName,
      };
      this.saveNewProduct(newProductInfo);
    } else {
      this.setState({ alert: true });
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
        const newUserProductInfo = {
          productId: response.data.name,
          uid: authData.getUid(),
        };
        const newProduct = { ...newProductInfo };
        newProduct.id = response.data.name;
        userProductData.saveUserProduct(newUserProductInfo)
          .then(() => {
            smash.matchProductRisks(newProduct)
              .then(() => {
                this.props.history.push('/');
              });
          });
      })
      .catch((error) => console.error(error));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ productName: e.target.value });
  }

  closeAlert = (e) => {
    e.preventDefault();
    this.setState({ alert: false });
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
        {this.state.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Holy guacamole!</strong> Please complete all fields below.
          <Button color="link" onClick={this.closeAlert}><FontAwesomeIcon icon={faTimes} size="sm"/></Button>
        </div>}
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
            onChange={this.categoryChange} >
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
          { this.props.match.params.productId
            ? <Button type="submit" className="btn btn-secondary" onClick={this.updateProductEvent}>Update product details</Button>
            : <Button type="submit" className="btn btn-secondary" onClick={this.saveProductEvent}>Save and Add to my bag</Button>
          }
        </form>
      </div>
    );
  }
}

export default ProductForm;

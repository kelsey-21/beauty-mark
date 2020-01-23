import axios from 'axios';
import apiKeys from '../apiKeys.json';
import utilities from '../utilities';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then((result) => {
      const allProducts = result.data;
      const products = [];
      if (allProducts != null) {
        Object.keys(allProducts).forEach((productId) => {
          const newProduct = allProducts[productId];
          newProduct.id = productId;
          products.push(newProduct);
        });
      }
      resolve(products);
    })
    .catch((error) => reject(error));
});

const createSeedData = () => {
  getAllProducts()
    .then((products) => {
      const productsWithCorrectStructure = [];
      const productsWithIng = products.filter((product) => product.description != null
        && (product.description.split('Ingredients')[1] != null
        && product.description.split('Ingredients')[1] !== ''
        && product.product_type !== 'nail_polish'));
      productsWithIng.forEach((product) => {
        if (product.description != null && product.id != null && product.brand != null && product.name && product.description.split('Ingredients')[1] != null) {
          if (product.description.includes('Ingredients')) {
            const newProductObj = {};
            newProductObj.brand = product.brand;
            newProductObj.name = product.name;
            newProductObj.category = product.product_type;
            if (product.description.split('Ingredients')[0] != null) {
              // eslint-disable-next-line prefer-destructuring
              newProductObj.description = product.description.split('Ingredients')[0];
            }
            // eslint-disable-next-line prefer-destructuring
            newProductObj.ingredients = product.description.split('Ingredients')[1];
            productsWithCorrectStructure.push(newProductObj);
          }
        }
      });
      productsWithCorrectStructure.forEach((product) => {
        axios.post(`${baseUrl}/products.json`, product)
          .then(() => {})
          .catch((error) => console.error(error));
      });
    })
    .catch((err) => console.error('creating data', err));
};

const categories = [
  {
    id: 'category1',
    category: 'bronzer',
  },
  {
    id: 'category2',
    category: 'blush',
  },
  {
    id: 'category3',
    category: 'lipstick',
  },
  {
    id: 'category4',
    category: 'eyeshadow',
  },
  {
    id: 'category5',
    category: 'mascara',
  },
  {
    id: 'category6',
    category: 'foundation',
  },
  {
    id: 'category7',
    category: 'eyeliner',
  },
];

const getProductCategories = () => categories;

export default { createSeedData, getProductCategories };

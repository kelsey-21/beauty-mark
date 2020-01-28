import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllProductsFromApi = () => new Promise((resolve, reject) => {
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
  getAllProductsFromApi()
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

const getFilteredProducts = (brand, category) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/products.json?orderBy="category"&equalTo="${category}"`)
    .then((response) => {
      const allProducts = response.data;
      const filtProducts = [];
      if (allProducts != null) {
        Object.keys(allProducts).forEach((productId) => {
          const newProduct = allProducts[productId];
          newProduct.id = productId;
          filtProducts.push(newProduct);
        });
      }
      const filteredProducts = filtProducts.filter((products) => products.brand === brand);
      resolve(filteredProducts);
    })
    .catch((error) => reject(error));
});

const getProductsById = (id) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/products/${id}.json`)
    .then((response) => {
      const product = response.data;
      product.id = id;
      resolve(product);
    })
    .catch((error) => reject(error));
});

const getAllProducts = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/products.json`)
    .then((response) => {
      const allProducts = response.data;
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

const saveProduct = (newProduct) => axios.post(`${baseUrl}/products.json`, newProduct);

export default {
  createSeedData,
  getProductCategories,
  getFilteredProducts,
  getProductsById,
  getAllProducts,
  saveProduct,
};

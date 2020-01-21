import axios from 'axios';
import apiKeys from '../apiKeys.json';

// const x = new XMLHttpRequest();
// x.open('GET', 'https://cors-anywhere.herokuapp.com/http://makeup-api.herokuapp.com/api/v1/products.json');
// x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
// x.onload = () => {
//   console.log('xml weird stuff', JSON.parse(x.responseText));
// };
// x.send();

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
      const productsWithIng = products.filter((product) => product.description != null && (product.description.split('Ingredients')[1] != null && product.description.split('Ingredients')[1] !== ''));
      productsWithIng.forEach((product) => {
        if (product.description != null && product.id != null && product.brand != null && product.name && product.description.split('Ingredients')[1] != null) {
          if (product.description.includes('Ingredients')) {
            const newProductObj = {};
            newProductObj.brand = product.brand;
            newProductObj.name = product.name;
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

export default { createSeedData };

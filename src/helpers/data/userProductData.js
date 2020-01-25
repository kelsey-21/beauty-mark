import axios from 'axios';
import apiKeys from '../apiKeys.json';

import productData from './productData';
import authData from './authData';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUserProducts = () => new Promise((resolve, reject) => {
  const uid = authData.getUid();
  axios.get(`${baseUrl}/userProducts.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allUserProducts = response.data;
      const userProducts = [];
      const realUserProducts = [];
      if (allUserProducts != null) {
        Object.keys(allUserProducts).forEach((prId) => {
          const newProduct = allUserProducts[prId];
          newProduct.id = prId;
          userProducts.push(newProduct);
        });
      }
      userProducts.forEach((userProduct) => {
        productData.getProductsById(userProduct.productId)
          .then((stuff) => {
            const productObj = stuff;
            realUserProducts.push(productObj);
          });
      });
      resolve(realUserProducts);
    })
    .catch((error) => reject(error));
});

export default { getUserProducts };

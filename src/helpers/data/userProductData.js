import axios from 'axios';
import apiKeys from '../apiKeys.json';

import authData from './authData';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getUserProducts = () => new Promise((resolve, reject) => {
  const uid = authData.getUid();
  axios.get(`${baseUrl}/userProducts.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      const allUserProducts = response.data;
      const userProducts = [];
      if (allUserProducts != null) {
        Object.keys(allUserProducts).forEach((fbId) => {
          const newProduct = allUserProducts[fbId];
          newProduct.id = fbId;
          userProducts.push(newProduct);
        });
      }
      resolve(userProducts);
    })
    .catch((error) => reject(error));
});

const deleteUserProduct = (userProductId) => axios.delete(`${baseUrl}/userProducts/${userProductId}.json`);

const saveUserProduct = (newProduct) => axios.post(`${baseUrl}/userProducts.json`, newProduct);

export default { getUserProducts, deleteUserProduct, saveUserProduct };

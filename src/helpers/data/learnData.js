import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllLearns = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/risks.json`)
    .then((response) => {
      const allLearns = response.data;
      const learns = [];
      if (allLearns != null) {
        Object.keys(allLearns).forEach((fbId) => {
          const newLearn = allLearns[fbId];
          newLearn.id = fbId;
          learns.push(newLearn);
        });
      }
      resolve(learns);
    })
    .catch((error) => reject(error));
});

const getAllProductRisks = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/productRisks.json`)
    .then((response) => {
      const allProductRisks = response.data;
      const productRisks = [];
      if (productRisks != null) {
        Object.keys(allProductRisks).forEach((fbId) => {
          const newRisk = allProductRisks[fbId];
          newRisk.id = fbId;
          productRisks.push(newRisk);
        });
      }
      resolve(productRisks);
    })
    .catch((error) => reject(error));
});

const getAllProductRisksByProductId = (productId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/productRisks.json?orderBy="productid"&equalTo="${productId}"`)
    .then((response) => {
      const allProductRisks = response.data;
      const productRisks = [];
      if (productRisks != null) {
        Object.keys(allProductRisks).forEach((fbId) => {
          const newRisk = allProductRisks[fbId];
          newRisk.id = fbId;
          productRisks.push(newRisk);
        });
      }
      resolve(productRisks);
    })
    .catch((error) => reject(error));
});

export default { getAllLearns, getAllProductRisks, getAllProductRisksByProductId };

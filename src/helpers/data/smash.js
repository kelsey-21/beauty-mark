import _ from 'underscore';
import axios from 'axios';
import productData from './productData';
import userProductData from './userProductData';
import learnData from './learnData';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

// const checkAvailability = (productRisks, productRiskObj) => productRisks.some((productRisk) => productRiskObj === productRisk);

const getCompleteUserProducts = () => new Promise((resolve, reject) => {
  const compUserProducts = [];
  productData.getAllProducts()
    .then((allProducts) => {
      userProductData.getUserProducts()
        .then((userProducts) => {
          userProducts.forEach((userProduct) => {
            if (userProduct.id !== undefined) {
              const newUserProduct = allProducts.find((product) => product.id === userProduct.productId);
              newUserProduct.userProductId = userProduct.id;
              newUserProduct.productId = userProduct.productId;
              newUserProduct.uid = userProduct.uid;
              compUserProducts.push(newUserProduct);
            }
          });
          resolve(compUserProducts);
        });
    })
    .catch((error) => reject(error));
});

const setProductRisksInnards = (product, risks, productRisks) => {
  const ingredientsArr = product.ingredients.split(', ');
  ingredientsArr.forEach((ingredient) => {
    const ingredientLC = ingredient.toLowerCase();
    const matching = risks.find((risk) => risk.name.toLowerCase() === ingredientLC);
    if (!matching) {
      if (ingredientLC.includes('ci ')) {
        const productRiskObj = {};
        productRiskObj.productid = product.id;
        productRiskObj.riskId = 'risk8';
        if (_.findWhere(productRisks, productRiskObj) === undefined) {
          productRisks.push(productRiskObj);
        }
      } if (ingredientLC.match(/\wparaben/g)) {
        const productRiskObj = {};
        productRiskObj.productid = product.id;
        productRiskObj.riskId = 'risk4';
        if (_.findWhere(productRisks, productRiskObj) === undefined) {
          productRisks.push(productRiskObj);
        }
      } if (ingredientLC.includes('polyethylene')) {
        const productRiskObj = {};
        productRiskObj.productid = product.id;
        productRiskObj.riskId = 'risk3';
        if (_.findWhere(productRisks, productRiskObj) === undefined) {
          productRisks.push(productRiskObj);
        }
      } if (ingredientLC.includes('hydroxyanisole')) {
        const productRiskObj = {};
        productRiskObj.productid = product.id;
        productRiskObj.riskId = 'risk5';
        if (_.findWhere(productRisks, productRiskObj) === undefined) {
          productRisks.push(productRiskObj);
        }
      } if (ingredientLC.includes('hydroxytoluene')) {
        const productRiskObj = {};
        productRiskObj.productid = product.id;
        productRiskObj.riskId = 'risk6';
        if (_.findWhere(productRisks, productRiskObj) === undefined) {
          productRisks.push(productRiskObj);
        }
      } if (ingredientLC.includes('hydroxytoluene')) {
        const productRiskObj = {};
        productRiskObj.productid = product.id;
        productRiskObj.riskId = 'risk6';
        if (_.findWhere(productRisks, productRiskObj) === undefined) {
          productRisks.push(productRiskObj);
        }
      }
    }
  });
};

const getProductRisks = () => new Promise((resolve, reject) => {
  productData.getAllProducts()
    .then((allProducts) => {
      const productRisks = [];
      learnData.getAllLearns()
        .then((risks) => {
          allProducts.forEach((product) => {
            setProductRisksInnards(product, risks, productRisks);
          });
          resolve(productRisks);
        });
    })
    .catch((error) => reject(error));
});

const postInitialProductRisks = () => {
  getProductRisks()
    .then((response) => {
      response.forEach((responsi) => {
        axios.post(`${baseUrl}/productRisks.json`, responsi);
      });
    })
    .catch((error) => console.error(error));
};

const matchProductRisks = (product) => {
  const productRisks = [];
  learnData.getAllLearns()
    .then((risks) => {
      setProductRisksInnards(product, risks, productRisks);
    })
    .catch((error) => console.error(error));
};

export default { getCompleteUserProducts, postInitialProductRisks, matchProductRisks };

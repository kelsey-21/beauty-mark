import productData from './productData';
import userProductData from './userProductData';
import learnData from './learnData';

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

const getProductRisks = () => new Promise((resolve, reject) => {
  productData.getAllProducts()
    .then((allProducts) => {
      const productRisks = [];
      learnData.getAllLearns()
        .then((risks) => {
          allProducts.forEach((product) => {
            const ingredientsArr = product.ingredients.split(', ');
            ingredientsArr.forEach((ingredient) => {
              const ingredientLC = ingredient.toLowerCase();
              const matching = risks.find((risk) => risk.name.toLowerCase() === ingredientLC);
              if (!matching) {
                if (ingredientLC.includes('ci ')) {
                  const productRiskObj = {};
                  productRiskObj.productid = product.id;
                  productRiskObj.riskId = 'risk8';
                  productRisks.push(productRiskObj);
                } if (ingredientLC.match(/\wparaben/g)) {
                  const productRiskObj = {};
                  productRiskObj.productid = product.id;
                  productRiskObj.riskId = 'risk4';
                  productRisks.push(productRiskObj);
                } if (ingredientLC.includes('polyethylene')) {
                  const productRiskObj = {};
                  productRiskObj.productid = product.id;
                  productRiskObj.riskId = 'risk3';
                  productRisks.push(productRiskObj);
                } if (ingredientLC.includes('hydroxyanisole')) {
                  const productRiskObj = {};
                  productRiskObj.productid = product.id;
                  productRiskObj.riskId = 'risk5';
                  productRisks.push(productRiskObj);
                } if (ingredientLC.includes('hydroxytoluene')) {
                  const productRiskObj = {};
                  productRiskObj.productid = product.id;
                  productRiskObj.riskId = 'risk6';
                  productRisks.push(productRiskObj);
                } if (ingredientLC.includes('hydroxytoluene')) {
                  const productRiskObj = {};
                  productRiskObj.productid = product.id;
                  productRiskObj.riskId = 'risk6';
                  productRisks.push(productRiskObj);
                }
              }
            });
          });
          console.log(productRisks);
        });
    })
    .catch((error) => reject(error));
});

const matchProductRisks = (product) => {
  const ingredientsArr = product.ingredients.split(', ');
  const productRisks = [];
  learnData.getAllLearns()
    .then((risks) => {
      ingredientsArr.forEach((ingredient) => {
        const ingredientLC = ingredient.toLowerCase();
        const matching = risks.find((risk) => risk.name.toLowerCase() === ingredientLC);
        if (!matching) {
          if (ingredientLC.includes('ci ')) {
            const productRiskObj = {};
            productRiskObj.productid = product.id;
            productRiskObj.riskId = 'risk8';
            productRisks.push(productRiskObj);
          } if (ingredientLC.match(/\wparaben/g)) {
            const productRiskObj = {};
            productRiskObj.productid = product.id;
            productRiskObj.riskId = 'risk4';
            productRisks.push(productRiskObj);
          } if (ingredientLC.includes('polyethylene')) {
            const productRiskObj = {};
            productRiskObj.productid = product.id;
            productRiskObj.riskId = 'risk3';
            productRisks.push(productRiskObj);
          } if (ingredientLC.includes('hydroxyanisole')) {
            const productRiskObj = {};
            productRiskObj.productid = product.id;
            productRiskObj.riskId = 'risk5';
            productRisks.push(productRiskObj);
          } if (ingredientLC.includes('hydroxytoluene')) {
            const productRiskObj = {};
            productRiskObj.productid = product.id;
            productRiskObj.riskId = 'risk6';
            productRisks.push(productRiskObj);
          } if (ingredientLC.includes('hydroxytoluene')) {
            const productRiskObj = {};
            productRiskObj.productid = product.id;
            productRiskObj.riskId = 'risk6';
            productRisks.push(productRiskObj);
          }
        }
      });
    })
    .catch((error) => console.error(error));
};

export default { getCompleteUserProducts, getProductRisks, matchProductRisks };

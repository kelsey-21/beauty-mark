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

const getProductsWithIngredients = () => new Promise((resolve, reject) => {
  const products = [];
  productData.getAllProducts()
    .then((allProducts) => {
      allProducts.forEach((product) => {
        const ingredients = product.ingredients.split(', ');
        const newProduct = { ...product };
        newProduct.ingredientArr = ingredients;
        products.push(newProduct);
      });
      resolve(products);
    })
    .catch((error) => reject(error));
});

const getProductRisks = () => new Promise((resolve, reject) => {
  productData.getAllProducts()
    .then((allProducts) => {
      learnData.getAllLearns()
        .then((risks) => {
          allProducts.forEach((product) => {
            const ingredientsArr = product.ingredients.split(', ');
            ingredientsArr.forEach((ingredient) => {
              const matching = risks.find((risk) => risk.name === ingredient);
              console.log(matching);
            });
          });
        });
    })
    .catch((error) => reject(error));
});

export default { getCompleteUserProducts, getProductRisks };

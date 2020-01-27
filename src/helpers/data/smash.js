import productData from './productData';
import userProductData from './userProductData';

const getCompleteUserProducts = () => new Promise((resolve, reject) => {
  const compUserProducts = [];
  productData.getAllProducts()
    .then((allProducts) => {
      userProductData.getUserProducts()
        .then((userProducts) => {
          userProducts.forEach((userProduct) => {
            const newUserProduct = allProducts.find((product) => product.id === userProduct.productId);
            compUserProducts.push(newUserProduct);
          });
          resolve(compUserProducts);
        });
    })
    .catch((error) => reject(error));
});

export default { getCompleteUserProducts };

import productData from './productData';
import userProductData from './userProductData';

const getCompleteUserProducts = () => new Promise((resolve, reject) => {
  const compUserProducts = [];
  productData.getAllProducts()
    .then((allProducts) => {
      userProductData.getUserProducts()
        .then((userProducts) => {
          userProducts.forEach((userProduct) => {
            if (userProduct.id !== undefined) {
              console.log(userProduct);
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

export default { getCompleteUserProducts };

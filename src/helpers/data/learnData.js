import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getAllLearns = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/learn.json`)
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

export default { getAllLearns };

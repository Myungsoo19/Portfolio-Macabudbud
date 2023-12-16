// src/api.js
import axios from 'axios';

const apiUrl = 'https://opentdb.com/api.php';

export default {
  getTriviaQuestions() {
    const params = {
      amount: 10,
      category: 'Art',
      type: 'multiple',
    };

    return axios.get(apiUrl, { params });
  },
};

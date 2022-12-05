import axios from 'axios';

export const API = {
  // API base url
  API_BASE_URL: 'https://jsonplaceholder.typicode.com',

  // API version
  API_VERSION: '/todos/',

  // API end point
  API_ENDPOINT: {
    login: 'auth/login',
    signup: 'auth/signup',
    logout: 'auth/logout',
    dummy: '1',
  },

  // API method
  API_METHOD: {
    post: 'POST',
    get: 'GET',
  },
};

export const masterAPI = (endPoint, method, queryParams, bodyPayload) => {
  let apiUrl = API.API_BASE_URL + API.API_VERSION + endPoint;
  return axios(apiUrl, {
    method: method,
    withCredentials: true,
    data: bodyPayload,
  }).then((res) => {
    if (res.status == 200) {
      return res.data;
    }
  }).catch((error) => {
    return error.response;
  });
};

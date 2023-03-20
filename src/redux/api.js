import axios from 'axios';

// Tistory API 정보



const api = axios.create({
    API_URL : 'https://www.tistory.com/oauth/access_token',
    CLIENT_ID : '1a07bda7defab77a546ad0b812d98d00',
    CLIENT_SECRET : '1a07bda7defab77a546ad0b812d98d00d4258fbcba30cb2f9e006686ea02442165c9021e',
    REDIRECT_URI : 'https://xperon.tistory.com/',
    RESPONSE_TYPE : 'code',
})

api.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request start", config);
    return config;
  }, function (error) {
    // Do something with request error
    console.log("request error",error);
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    console.log("get response",response);
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error", error);
    return Promise.reject(error);
  });

  export default api;
  
// Tistory API 호출 함수
// const getAccessToken = async (code) => {
//   try {
//     const response = await axios({
//       method: 'post',
//       url: API_URL,
//       data: {
//         client_id: CLIENT_ID,
//         client_secret: CLIENT_SECRET,
//         redirect_uri: REDIRECT_URI,
//         grant_type: RESPONSE_TYPE,
//         code: code,
//       },
//     });
//     return response.data.access_token;
//   } catch (error) {
//     console.log(error);
//   }
// };

// export default getAccessToken;

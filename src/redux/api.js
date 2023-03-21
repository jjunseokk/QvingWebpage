import axios from 'axios';
import React, { useState } from 'react';

// Tistory API 정보
const api = axios.create({
    API_URL : 'https://www.tistory.com/oauth/access_token',
    CLIENT_ID : '1a07bda7defab77a546ad0b812d98d00',
    CLIENT_SECRET : '1a07bda7defab77a546ad0b812d98d00d4258fbcba30cb2f9e006686ea02442165c9021e',
    REDIRECT_URI : 'https://xperon.tistory.com/',
    RESPONSE_TYPE : 'code',
})

export const token =`854f8c29c19dab0b5063ac90d4b6dfe2_a371b6a6bca57ba2464da966396ccd3d`

// Tistory API 호출 함수
// const getAccessToken = async (code) => {
//   try {
//     const response = await axios({
//       method: 'post',
//       url: `https://www.tistory.com/apis/post/list?access_token=854f8c29c19dab0b5063ac90d4b6dfe2_a371b6a6bca57ba2464da966396ccd3d&output=json&blogName=https://xperon.tistory.com/`,
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

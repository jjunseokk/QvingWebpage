import getAccessToken from './getAccessToken';
import api from './api';
// code parameter는 Tistory API를 호출할 때 발급 받는 인증 코드입니다.
const code = '854f8c29c19dab0b5063ac90d4b6dfe2_a371b6a6bca57ba2464da966396ccd3d';

// // access token을 얻기 위해 Tistory API 호출 함수를 호출합니다.
// const accessToken = getAccessToken(code);

// console.log(accessToken);

function token() {
    return async (disptch) =>{
        try {
            disptch({type : "GET_BLOG_REQUEST"});
            const blogApi = api.get(`https://www.tistory.com/apis/post/list?access_token=${token}&blogName=https://xperon.tistory.com/`)
        
            let [blog] = await Promise.all([blogApi]); //각각에 api 호출을 동시에 진행시키는데 딱 한번만 해주는 것이다.
        
            disptch({
                type : "GET_BLOG_SUCCESS",
                payload : {
                    blog : blog.data,
                },
            });
        } catch {
            disptch({type : "GET_BLOG_FAILURE"})
        }
    }
}

export default token;
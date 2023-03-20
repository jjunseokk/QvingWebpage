let initialState = {
    token: {},
}


function rootReducer(state = initialState, action) {
    let { type, payload } = action

    switch(type) {
        case "GET_BLOG_REQUEST" :
            return{...state, loading:true}
        case "GET_BLOG_SUCCESS" :
            return{ ...state,
                blog : payload.blog,
                loading : false,
            };
        default :
            return{...state};
    }
}


export default rootReducer;
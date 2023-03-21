import React from "react";

import qvingball from '../Asset/Image/golfball1.png';

const BlogCard = ({item}) => {
    console.log("item을 받았습니다.:::",item)
    return (
        <div className="eventCard">
            <div className="eventImg">
                <img src={qvingball} alt="" />
            </div>
            <div className="eventText">
                <h2>{item.tistory.item?.title}</h2>
                {item.tistory.item?.content}
            </div>
        </div>

    )
}


export default BlogCard;
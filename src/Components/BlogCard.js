import React,{useEffect, useState} from "react";

import goBlog from '../Asset/Image/tapMenu_on.png'

const BlogCard = ({ item }) => {
    // console.log("item을 받았습니다.:::", item);
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(()=>{
        const html = item?.content;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const thumbnailElement = doc.querySelector('img');
        const thumbnailUrl = thumbnailElement ? thumbnailElement.getAttribute('src') : '';
        setThumbnailUrl(thumbnailUrl);
    },[]);


    return (
        <div className="eventCard">
            <div className="eventImg">
                {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" />}
            </div>
            <div className="eventText">
                <h2>{item?.title}</h2>
                <div className="contentTxt" dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                <button><img src={goBlog} alt=""/></button>
            </div>
        </div>

    )
}


export default BlogCard;
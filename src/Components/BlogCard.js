// ------------------티스토리 블로그 카드-----------------

import React,{useEffect, useState} from "react";
import '../Style/section7.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BlogCard = ({ item }) => { //item : 파라미터를 받아서 쓴다. 

    // html 파일을 react 에서 그대로 출력
    const [thumbnailUrl, setThumbnailUrl] = useState('');

    useEffect(()=>{
        const html = item?.content;
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const thumbnailElement = doc.querySelector('img');
        const thumbnailUrl = thumbnailElement ? thumbnailElement.getAttribute('src') : '';
        setThumbnailUrl(thumbnailUrl);
    },[]);

    let postUrl = `${item?.postUrl}`;

    return (
        <div className="eventCard">
            <div className="eventImg">
                {thumbnailUrl && <img src={thumbnailUrl} alt="Thumbnail" />}
            </div>
            <div className="eventText">
                <h2 dangerouslySetInnerHTML={{ __html: item?.title }}></h2>
                <div className="contentTxt" dangerouslySetInnerHTML={{ __html: item?.content }}></div>
                <button className="eventBtn"><a href={postUrl} target="_blank" rel="noopener noreferrer">자세히 보러가기 <FontAwesomeIcon icon={faArrowRight} /></a></button>
            </div>
        </div>

    )
}


export default BlogCard;
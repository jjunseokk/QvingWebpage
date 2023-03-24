import React, { useState, useEffect } from "react";
import '../Style/section7.scss';
import { token } from '../redux/api'
import axios from "axios";

import installText from '../Asset/Image/installText.png';
import installTitle from '../Asset/Image/installTitle.png';
import event from '../Asset/Image/event.png';
import submitBtn from '../Asset/Image/submitBtn.png'
import BlogCard from "./BlogCard";
import businessplan from '../Asset/button/businessplan.png';
import BusinessBenefits from '../Asset/button/BusinessBenefits.png'


const Section7 = () => {


    const [blogCard, setBlogCard] = useState();
    const [blogList, setBlogList] = useState();

    const [showEvent, setShowEvent] = useState(false);

    const toggleBtn = () => {
        setShowEvent(!showEvent);
    }

    // ----------사업소개서 다운로드 버튼------------------
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('Smart Unmanned Platform Cubing_Business Introduction.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Smart Unmanned Platform Cubing_Business Introduction.pdf';
                alink.click();
            })
        })
    }

    // 티스토리 블로그 글 목록 받기.
    const getBlog = async () => {
        let url = `https://www.tistory.com/apis/post/list?access_token=${token}&output=json&blogName=https://xperon.tistory.com/`;
        let response = await fetch(url);
        let data = await response.json();
        setBlogList(data.tistory.item.posts);
    };

    // 티스토리 블로그 글 내용 받기.
    const getBlogCard = async () => {
        const newCard = [];
        try {
            for (let i = 0; i < blogList.length; i++) {
                const response = await axios.get(
                    `https://www.tistory.com/apis/post/read?access_token=${token}&output=json&blogName=xperon&postId=${blogList[i]?.id}`,
                );
                newCard.push(response.data.tistory.item); //배열로 저장.
            }
            setBlogCard(newCard);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBlog();
    }, []);

    useEffect(() => {
        getBlogCard();
    }, [showEvent]); //더보기 버튼 눌릴 시 api 호출.


    // console.log("블로그 상세내역:::", blogCard);
    // console.log("블로그 리스트:::", blogList);

    return (
        <div className="section7-container">
            <div className="install-header">
                <img src={installTitle} alt="" />
                <img src={installText} alt="" />
            </div>
            <div className="event-style">
                <img src={event} alt="" />
            </div>
            <div className="install-area">
                <button className="btnStyle"><a href="https://forms.gle/yhpLerxzmPTydmMt9"><img src={submitBtn} alt="" /></a></button>
            </div>
            <div className="btn-area">
                <button className="acodionBtn" onClick={toggleBtn}><img src={BusinessBenefits} alt="" ></img></button>
                <button className="acodionBtn" onClick={onButtonClick}><img src={businessplan} alt="" ></img></button>
            </div>

            <div className={showEvent ? "eventArea event-active" : "eventArea event-not-active"}>
                {blogCard && blogCard.map((blog, i) => {
                    return <BlogCard item={blog} key={i} />
                })}
            </div>

        </div>
    )
}


export default Section7;
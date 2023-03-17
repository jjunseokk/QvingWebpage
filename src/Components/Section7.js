import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import '../Style/section7.css';

import installText from '../Asset/Image/installText.png';
import installTitle from '../Asset/Image/installTitle.png';
import name from '../Asset/Image/name.png';
import phone from '../Asset/Image/phone.png';
import store from '../Asset/Image/store.png';
import link from '../Asset/Image/link.png';
import playScore from '../Asset/Image/play.png';
import inquiry from '../Asset/Image/Inquiry.png';
import event from '../Asset/Image/event.png';
import submitBtn from '../Asset/Image/submitBtn.png'
import acodion from '../Asset/Image/acodion.png';
import qvingball from '../Asset/Image/golfball1.png';


const Section7 = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        alert("완료되었습니다. 감사합니다. 빠른 시일내에 연락드리겠습니다.")
    };
    const onError = (error) => {
        console.log("에러가 뜨는가?:::::", error);
    };


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
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <div>
                        <label><img src={name} alt="" /></label>
                        <input type="text"
                            placeholder="이름을 입력하세요."
                            {...register("name", {
                                required: true,
                                minLength: 2
                            })} />
                        {errors.name?.type === "minLength" && <p className="inputText">이름은 최소 2글자 이상이어야 합니다.</p>}
                        {errors.name?.type === "required" && <p className="inputText">이름은 필수 입력해주세요.</p>}
                    </div>
                    <div>
                        <label><img src={phone} alt="" /></label>
                        <input type="text"
                            placeholder="전화번호(- 제외)를 입력하세요."
                            {...register("Phone", {
                                required: true,
                                minLength: 11,
                                maxLength: 11,
                            })} />
                        {errors.Phone?.type === "minLength" && <p className="inputText">잘못 입력하였습니다. 전화번호를 확인해주세요.</p>}
                        {errors.Phone?.type === "maxLength" && <p className="inputText">11자리가 넘었습니다.</p>}
                        {errors.Phone?.type === "required" && <p className="inputText">전화번호를 입력해주세요.</p>}
                    </div>
                    <div>
                        <label><img src={store} alt="" /></label>
                        <input {...register("store", {
                            required: true,
                            minLength: 2
                        })}
                            placeholder="매장이름과 위치를 입력하세요." />
                        {errors.store?.type === "minLength" && <p className="inputText">위치를 정확히 입력해주세요.</p>}
                        {errors.store?.type === "required" && <p className="inputText">매장이름과 위치를 입력해주세요.</p>}
                    </div>
                    <div>
                        <label><img src={link} alt="" /></label>
                        <input {...register("link", {
                            required: true,
                        })}
                            placeholder="큐빙을 알게된 경로를 입력하세요." />
                        {errors.link?.type === "required" && <p className="inputText">경로를 입력해주세요.</p>}
                    </div>
                    <div>
                        <label><img src={playScore} alt="" /></label>
                        <input {...register("playScore", {
                            required: true
                        })}
                            placeholder="타석갯수를 입력하세요." />
                        {errors.playScore?.type === "required" && <p className="inputText">타석갯수를 입력해주세요.</p>}
                    </div>
                    <div>
                        <label><img className="input-style" src={inquiry} alt="" /></label>
                        <textarea
                            cols={60}
                            rows={15}
                            {...register("inquiry", {
                                required: true
                            })}
                            placeholder="문의사항을 입력하세요." />
                        {errors.inquiry?.type === "required" && <p className="inputText">문의사항을 입력해주세요.</p>}
                    </div>
                    <button className="btnStyle" type="submit"><img src={submitBtn} alt="" /></button>
                </form>
            </div>
            <button className="acodionBtn"><img src={acodion} alt=""/></button>
            <div className="eventArea">
                <div className="eventImg">
                    <img src={qvingball} alt=""/>
                </div>
                <div className="eventText">
                    <h2>제목구간</h2>
                    <p>설명 간단히설명 간단히설명 간단히설명 간단히설명 간단히설명 간단히설명 간단히설명 간단히설명 간단히설명 간단히</p>
                </div>
            </div>
        </div>
    )
}


export default Section7;
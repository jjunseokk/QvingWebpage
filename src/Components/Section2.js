import React, { useEffect, useMemo, useState } from "react";
import '../Style/section2.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import speechText from '../Asset/Image/speechText.png';
import axios from "axios";

const Section2 = () => {
    axios.defaults.baseURL = '*';
    axios.defaults.withCredentials = false;

    const { kakao } = window;

    const [Selected, setSelected] = useState("시/도");
    const [Selected2, setSelected2] = useState("");
    const [postMap, setPostMap] = useState('대한민국');
    const [qving, setQving] = useState('');
    const [gpspos, setGPSPos] = useState(new kakao.maps.LatLng(35.543, 129.147));


    const getQving = async () => {
        console.log("getQving", gpspos);
        try {
            const response = await axios.get('http://www.qving.co.kr/interface/site/api_site_location.php?f_data=' + JSON.stringify({ lat: gpspos.getLat(), lng: gpspos.getLng() }))
            //setQving(response.data.stores);
        } catch (error) {
            console.log(error);
        }
    }
    console.log("Qving API:::", qving);

    useEffect(() => {
        getQving();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 2561,
                settings: {
                    slidesToShow: 9,
                    slidesToScroll: 5,
                }
            },

            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    useEffect(() => {
        var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
            mapOption = {
                center: new kakao.maps.LatLng(36.2683, 127.6358), // 지도의 중심좌표
                level: 14 // 지도의 확대 레벨
            };

        // 지도를 생성합니다    
        var map = new kakao.maps.Map(mapContainer, mapOption);

        // 장소 검색 객체를 생성합니다
        var ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색합니다
        ps.keywordSearch(`${postMap}`, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수 입니다
        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                console.log(data);
                // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
                // LatLngBounds 객체에 좌표를 추가합니다
                var bounds = new kakao.maps.LatLngBounds();

                for (var i = 0; i < data.length; i++) {
                    //displayMarker(qving[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                map.setBounds(bounds);
                var center = map.getCenter();
                axios.get('http://www.qving.co.kr/interface/site/api_site_location.php?f_data=' + JSON.stringify({ lat: center.getLat(), lng: center.getLng() }))
                .then((data)=>{
                    var sites = data.data.stores;
                    console.log("qving.get",sites);
                    for (var i = 0; i < sites.length; i++) {
                        displayMarker(sites[i]);
                    }
                    })
                //setGPSPos(center);
                console.log("center:::::::", center, center.getLat(), center.getLng())
            }
        }
        // 마커 클러스터러를 생성합니다 
        var clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
            minLevel: 10 // 클러스터 할 최소 지도 레벨 
        });

        // 지도에 마커를 표시하는 함수입니다
        function displayMarker(place) {

            // 마커를 생성하고 지도에 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.lat, place.lng)
            });

            // 마커에 클릭이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'click', function () {
                // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place?.place_name + '</div>');
                infowindow.open(map, marker);
            });
        }

    },[postMap])

    let city = ["시/도", "서울특별시", "부산광역시", "대구광역시", "인천광역시", "광주광역시", "대전광역시", "울산광역시", "세종특별자치시", "경기도", "강원도", "충청북도", "충청남도", "전라북도", "전라남도", "경상남도", "경상북도", "제주특별자치도",]
    let seoul = [
        "강동구", "송파구", "강남구", "서초구", "관악구", "동작구", "영등포구", "금천구", "구로구", "강서구", "양천구", "마포구", "서대문구", "은평구", "노원구", "도봉구", "강북구", "성북구", "중랑구", "동대문구", "광진구", "성동구", "용산구", "중구", "종로구",
    ]
    let busan = [
        "기장군", "사상구", "수영구", "연제구", "강서구", "금정구", "사하구", "해운대구", "북구", "남구", "동래구", "부산진구", "영도구", "동구", "서구", "중구",
    ]
    let deagu = [
        "달성군", "달서구", "수정구", "북구", "남구", "서구", "동구", "중구"
    ]
    let incheon = [
        "옹진군", "강화군", "서구", "계양구", "부평구", "남동구", "연수구", "미추홀구", "동구", "중구",
    ]
    let gwangjuMetropolitan = [
        "광산구", "북구", "남구", "서구", "동구",
    ]
    let deajeon = [
        "대덕구", "유성구", "서구", "중구", "동구",
    ]
    let ulsan = [
        "울주군", "북구", "동구", "남구", "중구",
    ]
    let sejong = [
        "반곡동", "소담동", "대평동", "보람동", "고운동", "종촌동", "아름동", "해밀동", "도담동", "다정동", "새롬동", "한솔동", "소정면", "전동면", "전의면", "연서면", "장군면", "금남면", "부강면", "연동면", "연기면", "조치원읍",
    ]
    let gyeonggido = [
        '고양시 덕양구', '고양시 일산구', '과천시', '광명시', '광주시', '구리시', '군포시', '김포시', '남양주시', '동두천시', '부천시 소사구', '부천시 오정구', '부천시 원미구', '성남시 분당구', '성남시 수정구', '성남시 중원구', '수원시 권선구', '수원시 장안구', '수원시 팔달구', '시흥시', '안산시 단원구', '안산시 상록구', '안성시', '안양시 동안구', '안양시 만안구', '오산시', '용인시', '의왕시', '의정부시', '이천시', '파주시', '평택시', '하남시', '화성시', '가평군', '양주군', '양평군', '여주군', '연천군', '포천군'
    ]
    let gangwondo = [
        "양양군", "고성군", "인제군", "양구군", "화천군", "철원군", "정선군", "평창군", "영월군", "횡성군", "홍천군", "삼척시", "속초시", "태백시", "동해시", "강릉시", "원주시", "춘천시",
    ]
    let chungbuk = [
        "단양군", "음성군", "괴산군", "진천군", "증평군", "영동군", "옥천군", "보은군", "제천시", "충주시", "청주시 청원구", "청주시 흥덕구", "청주시 서원구", "청주시 상당구", "청주시",
    ]

    let chungnam = [
        "태안군", "예산군", "홍성군", "청양군", "서천군", "부여군", "금산군", "당진시", "계롱시", "논산시", "서산시", "아산시", "보령시", "공주시", "천한시 서북구", "천안시 동남구", "천안시"
    ]
    let jeonbuk = [
        "부안군", "고창군", "순창군", "임실군", "장수군", "무주군", "진안군", "완주군", "김제시", "남원시", "정읍시", "익산시", "군산시", "전주시 덕진구", "전주시 완산구", "전주시"
    ]
    let jeonnam = [
        "신안군", "진도군", "완도군", "장성군", "영광군", "함평군", "무안군", "영암군", "해남군", "강진군", "장흥군", "화순군", "보성군", "고흥군", "구례군", "곡성군", "담양군", "광양시", "나주시", "순천시", "여수시", "목포시"
    ]
    let gyeongbuk = [
        "울릉군", "울진군", "봉화군", "예천군", "칠곡군", "성주군", "고령군", "청도군", "영덕군", "영양군", "청송군", "의성군", "군위군", "경산시", "문경시", "상주시", "영천시", "영주시", "구미시", "안동시", "김천시", "경주시", "포항시 북구", "포항시 남구", "포항시"
    ]
    let gyeongnam = [
        "함천군", "거창군", "함양군", "산청군", "하동군", "남해군", "고성군", "창녕군", "함안군", "의령군", "양산시", "거제시", "밀양시", "김해시", "사천시", "통영시", "진주시", "창원시 진해구", "창원시 마산회원구", "창원시 마산합포구", "창원시 성산구", "창원시 의창구", "창원시"
    ]
    let jeju = [
        "서귀포시", "제주시"
    ]

    let opt;

    const showSelect = (e) => {
        let add = 0;
        setSelected(e.target.value);
        const Option = document.getElementById("modal");
        if (e.target.value === "서울특별시") {
            add = seoul;
        } else if (e.target.value === "부산광역시") {
            add = busan;
        } else if (e.target.value === "대구광역시") {
            add = deagu;
        } else if (e.target.value === "인천광역시") {
            add = incheon;
        } else if (e.target.value === "광주광역시") {
            add = gwangjuMetropolitan;
        } else if (e.target.value === "대전광역시") {
            add = deajeon;
        } else if (e.target.value === "울산광역시") {
            add = ulsan;
        } else if (e.target.value === "세종특별자치시") {
            add = sejong;
        } else if (e.target.value === "경기도") {
            add = gyeonggido;
        } else if (e.target.value === "강원도") {
            add = gangwondo;
        } else if (e.target.value === "충청북도") {
            add = chungbuk;
        } else if (e.target.value === "충청남도") {
            add = chungnam;
        } else if (e.target.value === "전라북도") {
            add = jeonbuk;
        } else if (e.target.value === "전라남도") {
            add = jeonnam;
        } else if (e.target.value === "경상북도") {
            add = gyeongbuk;
        } else if (e.target.value === "경상남도") {
            add = gyeongnam;
        } else if (e.target.value === "제주특별자치도") {
            add = jeju;
        }
        Option.options.length = 1;

        for (let i = 0; i < add.length; i++) {
            opt = document.createElement("option");
            opt.value = add[i];
            opt.innerHTML = add[i];
            Option.append(opt);
        }
    }

    const showDetailSelect = (e) => {
        setSelected2(e.target.value)
    }
    const postBtn = () => {
        setPostMap(Selected+Selected2);
    }


    console.log("시/도 선택::::", Selected);
    console.log("시/군/구 선택::::", Selected2);
    console.log("버튼선택::", postMap);

    return (
        <div className="section2-container">
            <div className="form-area">
                <div className="section2-bubble">
                    내 주변에 큐빙이 있을까 <img src={speechText} alt=""></img>
                </div>
                <div className="section2-search">
                    <select name="h_area1" onChange={showSelect} value={Selected} className="one-select">
                        {city.map((item) => (
                            <option value={item} key={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <select name="h_area2" id='modal' onChange={showDetailSelect} className="one-select">
                        <option className='option'>시/군/구</option>
                        <option className='option'>{Selected2}</option>
                    </select>
                    <button onClick={postBtn}>제출</button>
                </div>

                <div className="kakao-map" id="map">

                </div>
            </div>
            <div className="section2-slide">
                <Slider className="slider-style" {...settings}>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img01.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img02.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img03.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img04.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img05.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img06.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img07.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img08.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img09.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img10.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img11.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img12.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img13.jpg" alt=""></img>
                    </div>
                    <div>
                        <img src="http://3.34.69.207/images/qving-img/qving-img14.jpg" alt=""></img>
                    </div>
                </Slider>
            </div>
        </div>
    )
};
export default Section2;
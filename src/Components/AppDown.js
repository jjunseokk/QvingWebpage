// --------------------------appDown 화면-------------


import React from "react";
import '../Style/appdown.scss';


import google from '../Asset/button/google_play.png';
import appstore from '../Asset/button/app_store.png';

const AppDown = () => {
    return (
        <div className="App-container">
            <div className="downArea">
                <a className="downloadBtn" href="https://xperon.onelink.me/NaR5"><img src={google} alt="" /></a>
                <a className="downloadBtn" href="https://xperon.onelink.me/NaR5"><img src={appstore} alt="" /></a>
            </div>
        </div>
    )
}



export default AppDown;
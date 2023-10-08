// import React, { PureComponent } from 'react'

//import plugin
import {  Link,  } from 'react-router-dom';

//import .gif
import CorrectImage from '../asset/image/correct.gif'

//import css
import '../style/global/global.css'
import '../style/component/SuccessSectionStyle.css'

export default function SuccessSection (){
  
    return (
      <div className="cover-success">
        <div className="success-container">
            <img src={CorrectImage} alt="Correct Animation" />
            <p>ยินดีด้วยคุณสร้างบัญชีสำเร็จ 🎉</p>
            <Link to='/'>กลับสู่หน้าแรก</Link>
            <Link to='/login'>เข้าสู่ระบบ</Link>
        </div>
      </div>
    );
  
}

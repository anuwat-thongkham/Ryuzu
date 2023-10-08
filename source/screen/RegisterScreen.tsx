import { Link } from "react-router-dom";
import { useState } from "react";

import Footer from "../component/Footer";

import '../style/screen/RegisterScreenStyle.css'
export default function RegisterScreen() {


    const [warningMessage, setWarningMessage] = useState<string>('Hi');
    return (
        <div className="registerContainer">
            <div className="registerContentContainer">
                <div className="heroContainer">
                    <Link to='/' className='buttonBack material-symbols-rounded'>arrow_back</Link>
                </div>
                <div className="formSection">
                    <form action="" className="registerFormContainer">
                        <div className="registerFormLogo"></div>
                        <div className="registerFormHeader">เริ่มต้นใช้งาน 👋</div>
                        <div className="registerFormDesription">สร้างบัญชีของคุณเพื่อเริ่มใช้งาน</div>
                        <div className="registerInputContainer"></div>
                        <div className="registerInputContainer"></div>
                        <div className="registerInputContainer"></div>

                    <div className='registerWarningMessage'>{warningMessage}</div>
                    <div className='registerSubmitButtonContainer'>
                        <button type='submit' className='registerSubmitButton'>เข้าสู่ระบบ</button>
                    </div>
                    <div className='registerSuggestTextContainer'>ถ้าคุณยังไม่มีบัญชี?&#160;&#160;<Link to='/register'>สร้างบัญชีใหม่เลย</Link></div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};
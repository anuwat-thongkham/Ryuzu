import { Link } from "react-router-dom";
import { useState } from "react";

import Footer from "../component/Footer";

import '../style/screen/RegisterScreenStyle.css'
export default function RegisterScreen() {


    const [warningMessage, setWarningMessage] = useState<string>('Hi');
    const handleSubmit = () => {
        setWarningMessage('Hi');
    }
    return (
        <div className="registerScreenContainer">
            <div className="registerContentContainer">
                <div className="heroContainer">
                    <Link to='/' className='buttonBack material-symbols-rounded'>arrow_back</Link>
                </div>
                <div className="formSection">
                    <form action="" className="registerFormContainer">
                        <div className="registerFormLogo"></div>
                        <div className="registerFormHeader">เริ่มต้นใช้งาน 👋</div>
                        <div className="registerFormDesription">สร้างบัญชีของคุณเพื่อเริ่มใช้งาน</div>
                        <div className="registerInputContainer">

                            <input type='text' placeholder='ชื่อผู้ใช้' className='registerInputField' />
                        </div>
                        <div className="registerInputContainer">

                            <input type='email' placeholder='อีเมล' className='registerInputField' />
                        </div>
                        <div className="registerInputContainer">
                            <input type='password' placeholder='รหัสผ่าน' className='registerInputField' /></div>

                        <div className='registerWarningMessage'>{warningMessage}</div>
                        <div className='registerSubmitButtonContainer'>
                            <button type='submit' className='registerSubmitButton' >เข้าสู่ระบบ</button>
                        </div>
                        <div className='registerSuggestTextContainer'>ถ้าคุณมีบัญชีแล้ว?&#160;&#160;<Link to='/login'>เข้าสู่ระบบเลย</Link></div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

};
import { Link } from "react-router-dom";
import Footer from "../component/Footer";

import '../style/screen/LoginScreenStyle.css'
export default function LoginScreen() {
    return (
        <div className="loginScreenContainer">
            <div className="contentContainer">
                <form action="" className="loginFormContainer">
                    <div className="loginFormHeader">เข้าสู่ระบบ 🎉</div>
                    <div className="loginFromDescription">ป้อนอีเมลและรหัสผ่านของคุณ</div>
                    <div className="inputContainer">
                    </div>
                    <div className="inputContainer">
                    </div>
                    <div className="warningMessageContainer"></div>
                    <div className="submitButtonContainer"></div>
                    <div className="suggestTextContainer">ถ้าคุณยังไม่มีบัญชี<Link to=''>สร้างบัญชีใหม่</Link></div>
                </form>
                <Footer></Footer>
            </div>
        </div>
    )
}
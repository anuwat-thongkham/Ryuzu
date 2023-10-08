
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"; // นำเข้า Axios
import Footer from "../component/Footer";
import '../style/screen/RegisterScreenStyle.css'
import SuccessSection from "../component/SuccessSection";
const apiUrl = "http://localhost:3000";
export default function RegisterScreen() {
    const [showSuccess, setShowSuccess] = useState<boolean>(false);
    const [warningMessage, setWarningMessage] = useState<string>('');

    // สร้างฟังก์ชันเพื่อส่งข้อมูลการลงทะเบียนไปยัง API
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;

        try {
            // ทำ HTTP POST ร้องขอไปยัง API
            await axios.post(`${apiUrl}/register`, { username, email, password });
            // หากสำเร็จ ให้นำผู้ใช้ไปยังหน้าอื่น เช่นหน้าเข้าสู่ระบบ
            // ในที่นี้ยังไม่ได้เขียนโค้ดไปยังหน้าอื่นๆ คุณต้องเพิ่มโค้ดนี้เอง
            setShowSuccess(true);
        } catch (error) {
            console.error("เกิดข้อผิดพลาดในการลงทะเบียน: " + error.message);
            setWarningMessage("เกิดข้อผิดพลาดในการลงทะเบียน");
        }
    };

    return (
        <div className="registerScreenContainer">
            {showSuccess && <SuccessSection></SuccessSection>}
            <div className="registerContentContainer">
                <div className="heroContainer">
                    <Link to='/' className='buttonBack material-symbols-rounded material-symbols-rounded-not-fill'>arrow_back</Link>
                </div>
                <div className="formSection">
                    <form onSubmit={handleRegister} className="registerFormContainer">
                        <div className="registerFormLogo"></div>
                        <div className="registerFormHeader">เริ่มต้นใช้งาน 👋</div>
                        <div className="registerFormDesription">สร้างบัญชีของคุณเพื่อเริ่มใช้งาน</div>
                        <div className="registerInputContainer">
                            <input type='text' name='username' placeholder='ชื่อผู้ใช้' className='registerInputField' required />
                        </div>
                        <div className="registerInputContainer">
                            <input type='email' name='email' placeholder='อีเมล' className='registerInputField' required />
                        </div>
                        <div className="registerInputContainer">
                            <input type='password' name='password' placeholder='รหัสผ่าน' className='registerInputField' required />
                        </div>
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

import { Link } from 'react-router-dom';
import Footer from '../component/Footer';

import '../style/screen/LoginScreenStyle.css'
import { useState } from 'react';
export default function LoginScreen() {

    const [warningMessage, setWarningMessage] = useState<string>('');

    return (
        <div className='loginScreenContainer'>
            <Link to='/' className='buttonBack material-symbols-rounded'>arrow_back</Link>
            <div className='contentContainer'>
                <form action='' className='loginFormContainer'>
                    <div className='loginFormHeader'>เข้าสู่ระบบ 🎉</div>
                    <div className='loginFromDescription'>ป้อนอีเมลและรหัสผ่านของคุณ</div>
                    <div className='inputContainer'>
                        <input type='text' placeholder='อีเมล' className='inputField' />
                    </div>
                    <div className='inputContainer'>
                        <input type='password' placeholder='รหัสผ่าน' className='inputField' />
                    </div>
                    <div className='warningMessage'>{warningMessage}</div>
                    <div className='submitButtonContainer'>
                        <button type='submit' className='submitButton'>เข้าสู่ระบบ</button>
                    </div>
                    <div className='suggestTextContainer'>ถ้าคุณยังไม่มีบัญชี?&#160;&#160;<Link to='register'>สร้างบัญชีใหม่เลย</Link></div>
                </form>
            </div>
            <Footer></Footer>
        </div >
    )
}
import { Link } from 'react-router-dom';
import { useState } from 'react'; 

import Footer from '../component/Footer';

import '../style/screen/LoginScreenStyle.css'
export default function LoginScreen() {

    const [warningMessage, setWarningMessage] = useState<string>('');

    return (
        <div className='loginScreenContainer'>
            <Link to='/' className='buttonBack material-symbols-rounded'>arrow_back</Link>
            <div className='loginContentContainer'>
                <form action='' className='loginFormContainer'>
                    <div className='loginFormHeader'>เข้าสู่ระบบ 🎉</div>
                    <div className='loginFromDescription'>ป้อนอีเมลและรหัสผ่านของคุณ</div>
                    <div className='loginInputContainer'>
                        <input type='email' placeholder='อีเมล' className='loginInputField' />
                    </div>
                    <div className='loginInputContainer'>
                        <input type='password' placeholder='รหัสผ่าน' className='loginInputField' />
                    </div>
                    <div className='loginWarningMessage'>{warningMessage}</div>
                    <div className='loginSubmitButtonContainer'>
                        <button type='submit' className='loginSubmitButton'>เข้าสู่ระบบ</button>
                    </div>
                    <div className='loginSuggestTextContainer'>ถ้าคุณยังไม่มีบัญชี?&#160;&#160;<Link to='/register'>สร้างบัญชีใหม่เลย</Link></div>
                </form>
            </div>
            <Footer></Footer>
        </div >
    )
}
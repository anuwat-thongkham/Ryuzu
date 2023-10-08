import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import '../style/screen/LoginScreenStyle.css';
const apiUrl = "http://localhost:3000";
export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warningMessage, setWarningMessage] = useState<string>('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('handleLogin function called');

        try {
            const response = await fetch(`${apiUrl}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            console.log('Response:', response);

            if (response.ok) {
                const data = await response.json();
                console.log('Login Success:', data);
                alert('เข้าสู่ระบบสำเร็จ');
                localStorage.setItem('token', data.token);
                // Handle successful login - you may want to store the user data or token
            } else {
                const errorData = await response.json();
                console.log('Login Error:', errorData);
                setWarningMessage(errorData.message);
            }
        } catch (error) {
            console.log('Error logging in:');
            alert('เข้าสู่ระบบไม่สำเร็จ');
        }
    };

    return (
        <div className='loginScreenContainer'>
            <Link to='/' className='buttonBack material-symbols-rounded material-symbols-rounded-not-fill '>arrow_back</Link>
            <div className='loginContentContainer'>
                <form action='' className='loginFormContainer' onSubmit={handleLogin}>
                    <div className='loginFormHeader'>เข้าสู่ระบบ 🎉</div>
                    <div className='loginFromDescription'>ป้อนอีเมลและรหัสผ่านของคุณ</div>
                    <div className='loginInputContainer'>
                        <input
                            type='email'
                            placeholder='อีเมล'
                            className='loginInputField'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='loginInputContainer'>
                        <input
                            type='password'
                            placeholder='รหัสผ่าน'
                            className='loginInputField'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='loginWarningMessage'>{warningMessage}</div>
                    <div className='loginSubmitButtonContainer'>
                        <button type='submit' className='loginSubmitButton'>
                            เข้าสู่ระบบ
                        </button>
                    </div>
                    <div className='loginSuggestTextContainer'>
                        ถ้าคุณยังไม่มีบัญชี?&#160;&#160;
                        <Link to='/register'>สร้างบัญชีใหม่เลย</Link>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}

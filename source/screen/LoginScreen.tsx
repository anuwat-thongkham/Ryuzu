import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../component/Footer';
import '../style/screen/LoginScreenStyle.css';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [warningMessage, setWarningMessage] = useState<string>('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                const token = data.token;
                // Store the token in local storage or a state variable
                // Redirect to the authenticated user's dashboard or profile page
            } else {
                // Handle login error, display a message to the user
                setWarningMessage('Invalid email or password. Please try again');
            }
        } catch (error) {
            console.error('Error logging in:', error);
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

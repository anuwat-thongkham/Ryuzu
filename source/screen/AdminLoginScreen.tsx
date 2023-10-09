import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import Footer from '../component/Footer';
import '../style/screen/AdminLoginScreenStyle.css';

const apiUrl = "http://localhost:3000";

export default function AdminLoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [warningMessage, setWarningMessage] = useState<string>('');
    const navigate = useNavigate();
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('handleLogin function called');

        try {
            const response = await fetch(`${apiUrl}/adminlogin`, {
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
                navigate('/dashboard-01');
            
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
        <div className='loginAdminScreenContainer'>
            <Link to='/' className='buttonBack material-symbols-rounded material-symbols-rounded-not-fill '>arrow_back</Link>
            <div className='loginAdminContentContainer'>
                <form action='' className='loginAdminFormContainer' onSubmit={handleLogin}>
                    <div className='loginAdminFormHeader'>เข้าสู่ระบบ Admin</div>
                    <div className='loginAdminFromDescription'>ป้อนอีเมลและรหัสผ่านของแอดมิน</div>
                    <div className='loginAdminInputContainer'>
                        <input
                            type='email'
                            placeholder='อีเมล'
                            className='loginAdminInputField'
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='loginAdminInputContainer'>
                        <input
                            type='password'
                            placeholder='รหัสผ่าน'
                            className='loginInputField'
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='loginAdminWarningMessage'>{warningMessage}</div>
                    <div className='loginAdminSubmitButtonContainer'>
                        <button type='submit' className='loginAdminSubmitButton'>
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}

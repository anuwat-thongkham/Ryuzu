import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './source/screen/HomeScreen'
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen'
import AboutUsScreen from './source/screen/AboutUsScreen';
import AdminLoginScreen from './source/screen/AdminLoginScreen'
function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/register' element={<RegisterScreen />} />
                    <Route path='/aboutus' element={<AboutUsScreen />} />
                    <Route path='/loginadmin' element={<AdminLoginScreen />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
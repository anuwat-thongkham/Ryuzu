import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './source/screen/HomeScreen'
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen'
import AboutUsScreen from './source/screen/AboutUsScreen';
function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/register' element={<RegisterScreen />} />
                    <Route path='/aboutus' element={<AboutUsScreen />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
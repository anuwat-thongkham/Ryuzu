import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './source/screen/HomeScreen'
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen'
function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                    <Route path='/register' element={<RegisterScreen />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
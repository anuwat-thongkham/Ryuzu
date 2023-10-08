import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './source/screen/HomeScreen'
import LoginScreen from './source/screen/LoginScreen';
function App() {
    return (
        <BrowserRouter>
            <main>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path='/login' element={<LoginScreen />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
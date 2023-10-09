import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './source/screen/HomeScreen'
import LoginScreen from './source/screen/LoginScreen';
import RegisterScreen from './source/screen/RegisterScreen'
import AboutUsScreen from './source/screen/AboutUsScreen';
import AdminLoginScreen from './source/screen/AdminLoginScreen'


import Dashboard01 from './source/screen/dashboard01';
import Dashboard02 from './source/screen/dashboard02';
import Dashboard03 from './source/screen/dashboard03';
import Dashboard04 from './source/screen/dashboard04';
import Dashboard05 from './source/screen/dashboard05';

import AddProductScreen from './source/screen/AdProductScreen';
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


                    <Route path='/dashboard-01' element={< Dashboard01 />} />
                    <Route path='/dashboard-02' element={< Dashboard02 />} />
                    <Route path='/dashboard-03' element={< Dashboard03 />} />
                    <Route path='/dashboard-04' element={< Dashboard04 />} />
                    <Route path='/dashboard-05' element={< Dashboard05 />} />

                    <Route path='/addproduct' element={< AddProductScreen />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
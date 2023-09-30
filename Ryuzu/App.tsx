import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './source/screen/HomeScreen'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
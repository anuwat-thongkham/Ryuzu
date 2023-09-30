import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Signup from './Signup';
// import Signin from './Signin';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} /> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
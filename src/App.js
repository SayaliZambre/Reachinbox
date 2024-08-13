import logo from './logo.svg';
import Login from './Login/Login';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
      </Routes>  
    </>
  );
}

export default App;

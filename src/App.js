import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes , BrowserRouter} from 'react-router-dom';
import {Login} from "./component/login/Login";
import {Landing} from "./component/landing/Landing";
import {MyPage} from './component/mypage/MyPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

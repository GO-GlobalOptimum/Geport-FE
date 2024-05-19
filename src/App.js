import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes , BrowserRouter} from 'react-router-dom';
import {Login} from "./component/login/Login";
import {Landing} from "./component/landing/Landing";
import {MyPage} from './component/mypage/MyPage';
import {Igeport_question} from "./component/Igeport_question/Igeport_question";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/igeport/question" element={<Igeport_question/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

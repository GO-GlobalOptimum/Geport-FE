import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes , BrowserRouter} from 'react-router-dom';
import {Login} from "./component/login/Login";
import {Landing} from "./component/landing/Landing";
import {MyPage} from './component/mypage/MyPage';
import {IGeport} from "./component/Igeport/IGeport";
import {Igeport_question} from "./component/Igeport_question/Igeport_question";
import {UserInfo} from "./component/UserInfo/UserInfo";
import {Geport} from "./component/Geport/Geport";
import {Geport_question} from "./component/Geport_question/Geport_question";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/igeport" element={<IGeport />}></Route>
            <Route path="/igeport/question" element={<Igeport_question/>}></Route>
            <Route path="/userinfo" element={<UserInfo/>}></Route>
            <Route path="/geport" element={<Geport/>}></Route>
            <Route path="/geport/question" element={<Geport_question/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

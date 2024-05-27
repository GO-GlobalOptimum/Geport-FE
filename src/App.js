import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes , BrowserRouter} from 'react-router-dom';
import {Login} from "./component/login/Login";
import {Landing} from "./component/landing/Landing";
import {MyPage} from './component/mypage/MyPage';
import {Igeport_question} from "./component/Igeport_question/Igeport_question";
import {Create_post} from "./component/create_post/create_post";
import {Posts}from"./component/posts/Posts";
import { My_Posts } from "./component/posts/detail/My_Posts";
import { Other_Posts } from "./component/posts/detail/Other_Posts";
import {UserInfo} from "./component/UserInfo/UserInfo";
import {Geport} from "./component/Geport/Geport";
import {Geport_question} from "./component/Geport_question/Geport_question";
import {Hidden_code} from "./component/Hidden_code/Hidden_code";
import {Geport_landing} from "./component/Geport_landing/Geport_landing";
import { MainPage } from './component/mainPage/MainPage';
import {MyMain} from './component/mainPage/detail/Mymain';
import { Profile } from './component/profile/Profile';
import { Fix_Profile } from './component/profile/detail/Fix_Profile';
import {Create_report} from './component/create_report/Create_report';
import {StatisticsPage} from "./component/StatisticsPage/StatisticsPage";


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/igeport/question" element={<Igeport_question/>}></Route>
            <Route path="/create_post" element={<Create_post/>}></Route>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/my_posts" element={<My_Posts/>}></Route>
            <Route path="/other_posts" element={<Other_Posts/>}></Route>
            <Route path="/userinfo" element={<UserInfo/>}></Route>
            <Route path="/geport" element={<Geport/>}></Route>
            <Route path="/geport/question" element={<Geport_question/>}></Route>
            <Route path="/hidden-code" element={<Hidden_code/>}></Route>
            <Route path="/geport_landing" element={<Geport_landing/>}></Route>
            <Route path="/mainpage" element={<MainPage/>}></Route>
            <Route path="/mymain" element={<MyMain/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/fix_profile" element={<Fix_Profile/>}></Route>
            <Route path="/create_report" element={<Create_report/>}></Route>
            <Route path="/statistics_page" element={<StatisticsPage/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

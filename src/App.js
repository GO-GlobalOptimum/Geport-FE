import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes , BrowserRouter} from 'react-router-dom';
import {Login} from "./component/login/Login";
import {Landing} from "./component/landing/Landing";
import {MyPage} from './component/mypage/MyPage';
import {Igeport_question} from "./component/Igeport_question/Igeport_question";
import {Igeport_question1} from "./component/Igeport_question/detail/Igeport_question1";
import {Create_post} from "./component/create_post/create_post";
import {Posts}from"./component/posts/Posts";
import { My_Posts } from "./component/posts/detail/My_Posts";
import { Other_Posts } from "./component/posts/detail/Other_Posts";
import {UserInfo} from "./component/UserInfo/UserInfo";
import {Geport} from "./component/Geport/Geport";
import {Geport_question} from "./component/Geport_question/Geport_question";
import {Hidden_code} from "./component/Hidden_code/Hidden_code";
import {Geport_landing} from "./component/Geport_landing/Geport_landing";
import {StatisticsPage} from "./component/StatisticsPage/StatisticsPage";
import {Geport_result} from "./component/Geport_result/Geport_result";
import {IGeport_result} from "./component/IGeport_result/IGeport_result";

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
            <Route path="/statistics_page" element={<StatisticsPage/>}></Route>
            <Route path="/geport/result" element={<Geport_result/>}></Route>
            <Route path="/igeport/result" element={<IGeport_result/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

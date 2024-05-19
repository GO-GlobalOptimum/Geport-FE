import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes , BrowserRouter} from 'react-router-dom';
import {Login} from "./component/login/Login";
import {Landing} from "./component/landing/Landing";
import {MyPage} from './component/mypage/MyPage';
import {IGeport} from "./component/Igeport/detail/IGeport";
import {Igeport_question} from "./component/Igeport_question/Igeport_question";
import {Igeport_question1} from "./component/Igeport_question/detail/Igeport_question1";
import {Create_post} from "./component/create_post/create_post";
import {Posts}from"./component/posts/Posts";
import { My_Posts } from "./component/posts/detail/My_Posts";
import { Other_Posts } from "./component/posts/detail/Other_Posts";
function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/mypage" element={<MyPage />}></Route>
            <Route path="/igeport" element={<IGeport />}></Route>
            <Route path="/igeport/question" element={<Igeport_question/>}></Route>
            <Route path="/create_post" element={<Create_post/>}></Route>
            <Route path="/posts" element={<Posts/>}></Route>
            <Route path="/my_posts" element={<My_Posts/>}></Route>
            <Route path="/other_posts" element={<Other_Posts/>}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;

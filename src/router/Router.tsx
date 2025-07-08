import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Includes/Layout";
import Main from "../page/Main/Main";
import Error404 from "../page/Error/Error404";
import Login from "../page/Login/Login";
import MemJoin from "@/page/Member/MemJoin";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<MemJoin />} />
                <Route path="main" element={<Main />} />
                <Route path="*" element={<Error404 />} />   {/** 없는 주소 처리 */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
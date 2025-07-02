import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Includes/Layout";
import Main from "../page/Main/Main";
import Error404 from "../page/Error/Error404";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} />                
                <Route path="main" element={<Main />} />                
                <Route path="*" element={<Error404 />} />   {/** 없는 주소 처리 */}
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
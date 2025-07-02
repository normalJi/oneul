import { useNavigate } from "react-router-dom";

const Layout = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  }

    return(
        <>
          <h1>환영합니다.</h1>
          <div><button onClick={handleLogin}>로그인 하시겠습니까?</button></div>
       </>
    );
}

export default Layout;
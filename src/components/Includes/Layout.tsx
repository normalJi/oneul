import { useNavigate } from "react-router-dom";

interface LayoutProps {
  flag: string;
}

const Layout = () => {

  const navigate = useNavigate();

  const handleLogin = (obj: LayoutProps) => {
    if( obj.flag === 'Login' ) {
      navigate("/login");
    } else if( obj.flag === 'Join' ) {
      navigate("/join");
    }
  }

    return(
        <>
          <h1>환영합니다.</h1>
          <div><button onClick={() => handleLogin({flag: "Login"})}>로그인 하시겠습니까?</button></div>
          <div><button onClick={() => handleLogin({flag: "Join"})}>회원가입</button></div>
       </>
    );
}

export default Layout;
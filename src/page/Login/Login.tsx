import { useState } from "react";
import Text from "../../components/Form/InputText";
import Password from "../../components/Form/InputPass";
import Checkbox from "../../components/Form/Checkbox";
import Button from "../../components/Form/Button";
//import Textarea from "../../components/Form/Textarea";

import type { LoginRequest, LoginResult } from "@/types";

const Login = () => {

    const [ formData, setFormData ] = useState<LoginRequest>({
        email: "",
        userNm: "",
        password: "",
        area: "",
        remember: false,        
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    }

    // 저장 처리
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // 확인용
        const json: LoginResult = {
            code: 200,
            msg: "로그인 성공",
            token: "dummy-token-1001",
            data: formData,
        }

        //console.log("제출 데이터 : ", json);
        if( json.code === 200 ) {
            alert(`${json.data.userNm}님 환영합니다.`);
            return false;
        }
    }

    return (
        <div>
            <h1>로그인 페이지</h1>
            <form onSubmit={handleSubmit}>                
                <Text id="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" />
                <Text id="userNm" name="userNm" value={formData.userNm} onChange={handleChange} placeholder="성명" />
                {/* <Textarea id="area" name="area" value={formData.area} onChange={handleChange} placeholder="내용" style={{"width":"100%", "height":"100px"}} /> */}
                <Password id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" />
                <Checkbox type="checkbox" id="remember" name="remember" checked={formData.remember} onChange={handleChange} />
                <Button type="submit">확인</Button>
            </form>
        </div>
    )
}

export default Login;
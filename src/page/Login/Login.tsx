import { useState } from "react";
import FormProviderWrapper from "@/components/Form/FormProviderWrapper";
import FormField from "@/components/Form/FormField";
import Button from "@/components/Form/Button";
import type { LoginRequest, LoginResponse } from "@/types";
import { createHandleChange } from "@/utils/formUtils";

const Login = () => {

    const [ formData, setFormData ] = useState<LoginRequest>({
        email: "",
        userNm: "",
        password: "",        
        remember: false,        
    });

    //const [errors, setErrors] = useState<{[key: string]: string}>({});  // 유효성

    const handleChange = createHandleChange(setFormData);

    // const validate = () => {
    //     const newErrors: { [key:string]:string} = {};

    //     if( !formData.email.trim() ) {
    //         newErrors.email = "이메일은 필수입니다.";            
    //     } else if (!/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(formData.email)) {
    //         newErrors.email = "이메일 형식이 올바르지 않습니다.";
    //     } 

    //     if (!formData.password.trim()) {
    //         newErrors.password = "비밀번호는 필수입니다.";
    //     } else if (formData.password.length < 6) {
    //         newErrors.password = "비밀번호는 6자 이상이어야 합니다.";
    //     }        

    //     return newErrors;
    // }

    // 저장 처리
    const handleSubmit = (data: LoginRequest) => {       
        //e.preventDefault();
        
        // const validationErrors = validate();
        // setErrors(validationErrors);
        
        // if( Object.keys(validationErrors).length === 0) {        
        //     // 확인용
        //     const json: LoginResult = {
        //         code: 200,
        //         msg: "로그인 성공",
        //         token: "dummy-token-1001",
        //         data: formData,
        //     }

        //     console.log("제출 데이터 : ", json);
        //     if( json.code === 200 ) {
        //         alert(`${json.data.userNm}님 환영합니다.`);
        //         return false;
        //     }
        // }

        // 더미로 만든다.
        const response = {
            code: 200,
            msg: "로그인 성공",
            token: "dummy-token-1001",
            data,
        }

        console.log(response);

        if( response.code === 200 ) {
            alert(`${response.data.userNm}님 환영합니다.`);
            return false;
        }
    }

    return (
        <div>
            <h1>로그인 페이지</h1>
            <FormProviderWrapper<LoginRequest> onSubmit={handleSubmit} options={{defaultValues: formData , mode: "onBlur"}}>
            
                <FormField label="이메일" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" required />
                <FormField label="비밀번호" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" required minLength={6} />
                <FormField label="자동로그인"  type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} required={false} />

                {/* <FormField label="이메일" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" required error={errors.email} /> */}
                {/* <FormField label="성명" id="userNm" name="userNm" value={formData.userNm} onChange={handleChange} placeholder="성명" required /> */}
                {/* <Textarea id="area" name="area" value={formData.area} onChange={handleChange} placeholder="내용" style={{"width":"100%", "height":"100px"}} /> */}
                {/* <FormField label="비밀번호" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" required error={errors.password} /> */}
                {/* <FormField label="자동로그인"  type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} required={false} /> */}
                <Button type="submit">확인</Button>
            </FormProviderWrapper>
        </div>
    )
}

export default Login;
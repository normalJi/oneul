import { useState } from "react";
import FormField from "@/components/Form/FormField";
import Button from "@/components/Form/Button";
import type { LoginRequest, LoginResult } from "@/types";
import { createHandleChange, required, emailFormat, validateForm, minLength } from "@/utils/formUtils";

const Login = () => {

    const [ formData, setFormData ] = useState<LoginRequest>({
        email: "",
        userNm: "",
        password: "",        
        remember: false,        
    });   

    

    const loginSchema = {
        email: [required("이메일은 필수입니다."), emailFormat()],
        password: [required("비밀번호는 필수 입니다."), minLength(6, "비밀번호는 6자 이상이어야 합니다.")],
    }

    const [errors, setErrors] = useState<{[key: string]: string}>({});  // 유효성
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

    const handleChange = createHandleChange(setFormData, setErrors, (data) => validateForm(data, loginSchema));

    // 저장 처리
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //const validationErrors = validate();
        
        const validate = validateForm(formData, loginSchema);        
        setErrors(validate);

        console.log(validate);
        if( Object.keys(validate).length === 0) {        
            // 확인용
            const json: LoginResult = {
                code: 200,
                msg: "로그인 성공",
                token: "dummy-token-1001",
                data: formData,
            }

            console.log("제출 데이터 : ", json);
            if( json.code === 200 ) {
                alert(`${json.data.userNm}님 환영합니다.`);
                return false;
            }
        }
    }

    return (
        <div>
            <h1>로그인 페이지</h1>
            <form onSubmit={handleSubmit}>                
                <FormField label="이메일" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" error={errors.email} />
                {/* <FormField label="성명" id="userNm" name="userNm" value={formData.userNm} onChange={handleChange} placeholder="성명" required /> */}
                {/* <Textarea id="area" name="area" value={formData.area} onChange={handleChange} placeholder="내용" style={{"width":"100%", "height":"100px"}} /> */}
                <FormField label="비밀번호" type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="password" error={errors.password} />
                <FormField label="자동로그인"  type="checkbox" name="remember" checked={formData.remember} onChange={handleChange} required={false} />
                <Button type="submit">확인</Button>
            </form>
        </div>
    )
}

export default Login;
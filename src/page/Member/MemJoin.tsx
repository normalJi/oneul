import { useState } from "react";
import FormField from "@/components/Form/FormField";
import type { MemJoinRequest, MemJoinResult } from "@/types";
import { createHandleChange } from "@/utils/formUtils";
import Button from "@/components/Form/Button";



const MemJoin = () => {

    const [ formData, setFormData ] = useState<MemJoinRequest>({
        email: "",
        name: "",       
        password: "", 
        passChk: "",
        phonNum: "",
        genderCd: 1,
        agree: false,
        agree2: false
    });


    const handleChange = createHandleChange(setFormData);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const json: MemJoinResult = {
            code: 200,
            msg: "회원가입 성공",
            token: "dummy-token-20250708",
            data: formData
        };

        console.log(json);
        if( json.code === 200 ) {
            alert("회원가입 성공");
            return;
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                맴버 페이지 입니다.            
                <FormField label="이메일" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="이메일" required/>
                <FormField label="성명" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="성명" required />
                <FormField type="password" label="비밀번호" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="비밀번호" required />
                <FormField type="password" label="비밀번호 확인" id="passChk" name="passChk" value={formData.passChk} onChange={handleChange} placeholder="비밀번호 확인" required />
                <FormField type="radio" label="성별" id="genderCd" name="genderCd" value={String(formData.genderCd)} onChange={handleChange}
                    options={[{label: "남자", value: "1"}, {label: "여자", value: "2"}]} placeholder="비밀번호 확인"  required={false}/>
                <FormField type="checkbox" label="약관1" id="agree" name="agree" checked={formData.agree} onChange={handleChange}  required={false} />
                <FormField type="checkbox" label="약관2" id="agree2" name="agree2" checked={formData.agree2} onChange={handleChange}  required={false} />
                <Button type="submit">확인</Button>
            </form>
        </>
    )
}

export default MemJoin;
// formUtils 정의

import type { FormChangeEvent } from "@/components/Form/Form";
import type React from "react";

export const createHandleChange = <T extends object>(
    setState: React.Dispatch<React.SetStateAction<T>>,
    setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>,
    validateFn: (data: T) => { [key: string]: string }
) => {
    return (e: FormChangeEvent) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        //const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
        const newValue = type === "checkbox" ? checked : value;
        setState(prev => {
            const updated = { ...prev, [name]: newValue };
            setErrors(validateFn(updated)); // 입력 시마다 errors 갱신
            return updated;
        });
        // setState((prev) => ({
        //     ...prev,
        //     [name]: type === "checkbox" ? checked : value,
        // }));
    }
}

type Validator = (value: any, formData?: any) => string | undefined;
type ValidationSchema = { [field: string]: Validator[] };

export function validateForm( formData: { [key: string]: any }, schema: ValidationSchema): { [key: string]: string }  {
    const errors: { [key: string]: string } = {};
    for( const field in schema ) {
        for(const validator of schema[field]) {
            const error = validator(formData[field], formData);
            if(error) {
                errors[field] = error;
                break;
            }
        }
    }
    return errors;
}

// default Validator
export const required = (msg = "필수 입력값입니다.") => (value: any) => 
    value == null || value === "" ? msg : undefined;

export const minLength = (min: number, msg?: string) => (value: string) =>
    value && value.length < min ? msg || `${min}자 이상 입력하세요.` : undefined;

export const emailFormat = (msg = "이메일 형식이 올바르지 않습니다.") => (value: string) =>
    value && !/^[\w-.]+@[\w-]+\.[a-z]{2,}$/i.test(value) ? msg : undefined;
import React from "react";
import type { CommonFieldProps } from "./Form";
import { useFormContext } from "react-hook-form";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & CommonFieldProps;
type TextareaFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & CommonFieldProps;
type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & CommonFieldProps;

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

/**
 * input | textarea | select | checkbox | radio module
 * type default : text, 그 외 type을 받아서 분기 처리
 * options는 select, radio 용
 * @param param0 label, id, name, value, type, onChange, options, ...rest * 
 * @returns 
 */
const FormField = ({
    label,
    id,
    name,
    value,
    type = "text",
    onChange,
    options = [],
    error,
    required = false,    
    minLength,
    ...rest
}: FormFieldProps) => {

    const { register, formState: { errors } } = useFormContext();
    // const isEmpty =
    //     (type === "checkbox" && value === false) ||
    //     (typeof value === "string" && value.trim() === "");

    // const errorMessage = required && isEmpty ? `${label}은(는) 필수 입력입니다.` : error;

    const inputStyle = {
        border: error? "1px solid red" : undefined,
        display: "block",
        marginBottom: "0.25rem",
    }
    return (
        <div style={{marginBottom: "1rem"}}>
            {label && <label style={{display:"block", marginBottom: "0.25rem"}}>{label}</label>}
            {type === "textarea" ? (
                <textarea id={id} onChange={onChange} {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)} style={inputStyle}></textarea>
            ) : type === "select" ? (
                <select name={name} value={value as string} onChange={onChange} {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>) } style={inputStyle}>
                    <option value="">선택</option>
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>

                    ))}
                </select>
            ) : type === "radio" ? (
                options.map((opt) => (
                    <label key={opt.value} style={{marginRight: "1rem"}}>
                        <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={onChange} {...(rest as React.InputHTMLAttributes<HTMLInputElement>) } style={inputStyle} />
                        {opt.label}
                    </label>
                ))
            ) : type === "checkbox" ? (
                <input type="checkbox" name={name} checked={value as boolean} onChange={onChange} {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />
            ) : (
                <input type={type} id={id} {...(rest as React.InputHTMLAttributes<HTMLInputElement>) } style={inputStyle} 
                    {...register(name, {required: required ? `${label}은(는) 필수 입니다.`: false,
                    minLength: minLength ? {value: minLength, message: `${minLength}자 이상 입력해 주세요.`} : undefined,
                    })}
                />
            )}

            {/* 에러 메시지 */}
            {errors[name] && 
                // (<div style={{ color: "red", marginTop: "0.25rem" }}></div>)
                <span>{(errors[name] as any)?.message}</span>
            }
        </div>
    );
}

export default FormField;
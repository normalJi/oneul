import React from "react";

type CommonProps = {
    label: string;
    id?: string;
    name: string;
    value?: string | boolean;
    checked?: boolean;
    type?: "text" | "password" | "number" | "checkbox" | "textarea" | "radio" | "select";
    onChange: (e: React.ChangeEvent<any>) => void;    
    options?: {label: string; value: string}[];     // select , radio 용
};

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & CommonProps;
type TextareaFieldProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & CommonProps;
type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement> & CommonProps;

type FormFieldProps = InputFieldProps | TextareaFieldProps | SelectFieldProps;

const FormField = ({
    label,
    id,
    name,
    value,
    type = "text",
    onChange,
    options = [],
    ...rest
}: FormFieldProps) => {
    return (
        <div style={{marginBottom: "1rem"}}>
            {label && <label style={{display:"block", marginBottom: "0.25rem"}}>{label}</label>}
            {type === "textarea" ? (
                <textarea id={id} name={name} value={value} onChange={onChange} {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}></textarea>
            ) : type === "select" ? (
                <select name={name} value={value as string} onChange={onChange} {...(rest as React.SelectHTMLAttributes<HTMLSelectElement>) }>
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
                        <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={onChange} {...(rest as React.InputHTMLAttributes<HTMLInputElement>) } />
                        {opt.label}
                    </label>
                ))
            ) : type === "checkbox" ? (
                <input type="checkbox" name={name} checked={value as boolean} onChange={onChange} {...(rest as React.InputHTMLAttributes<HTMLInputElement>)} />
            ) : (
                <input type={type} id={id} name={name} value={value} onChange={onChange}  {...(rest as React.InputHTMLAttributes<HTMLInputElement>) } />
            )}
        </div>
    );
}

export default FormField;
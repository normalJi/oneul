// 공통 타입 정의

import type React from "react";

export type FormElement = | HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

export type FormChangeEvent = React.ChangeEvent<FormElement>;

export type FormFieldType = | "text" | "password" | "number" | "checkbox" | "textarea" | "radio" | "select";

export interface SelectOptin {
    label: string;
    value: string;
}

export interface CommonFieldProps {
    label: string;
    id?: string;
    name: string;
    value?: string | boolean;
    checked?: boolean;
    type?: FormFieldType;
    onChange?: (e: FormChangeEvent) => void;
    options?: SelectOptin[];
    error?: string;
    required: boolean;
    minLength?: number;
}
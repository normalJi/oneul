// formUtils 정의

import type { FormChangeEvent } from "@/components/Form/Form";
import type React from "react";

export const createHandleChange = <T extends object>(
    setState: React.Dispatch<React.SetStateAction<T>>
) => {
    return (e: FormChangeEvent) => {
        const { name, value, type } = e.target;
        const checked = (e.target as HTMLInputElement).checked;
        //const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
        setState((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    }
}
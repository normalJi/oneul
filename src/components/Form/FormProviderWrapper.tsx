import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import type { UseFormProps, SubmitHandler, FieldValues } from "react-hook-form";




interface Props<T extends FieldValues> {
    children: React.ReactNode;
    onSubmit: SubmitHandler<T>;
    options?: UseFormProps<T>;
}

/**
 * 범용 FormProvider Wrapper
 */

const FormProviderWrapper = <T extends FieldValues>({
    children,
    onSubmit,
    options,
}: Props<T>) => {
    const methods = useForm<T>(options);

    return(
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                {children}
            </form>
        </FormProvider>
    );
};

export default FormProviderWrapper;

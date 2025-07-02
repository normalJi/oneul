/**
 * button component
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string,
    children: React.ReactNode;    
}

const Button: React.FC<ButtonProps> = ({
    type = "submit",
    label,
    children,
    ...rest
}) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <button type={type} {...rest}>{children}</button>

        </div>
    );
};

export default Button;
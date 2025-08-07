/**
 * input type = "password" 일때 사용
 */

interface PassProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Password: React.FC<PassProps> = ({
    label,
    ...rest
}) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input type="password" {...rest} />
        </div>
    );
};

export default Password;
/**
 * input type = "text" 인 경우 사용
 */
interface TextProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    type?: string;
}

const Text: React.FC<TextProps> = ({    
    label,
    type = "text",
    ...rest
}) => {
    return(
        <div>
            {label && <label>{label}</label>}
            <input type={type} {...rest} />

        </div>
    );
};

export default Text;
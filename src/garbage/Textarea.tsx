/**
 * TextArea Component
 */

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

const Textarea: React.FC<TextareaProps> = ({
    label,
    ...rest
}) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <textarea {...rest}></textarea>
        </div>
    );
}

export default Textarea;
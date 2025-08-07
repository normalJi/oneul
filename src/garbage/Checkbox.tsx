/**
 * check form component
 */

interface CheckProps {
    type?: string;
    id: string;
    name: string;
    checked?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckProps> = ({
    type = "checkbox",
    id,
    name,
    checked,
    onChange,
}) => {
    return(
        <input type={type} id={id} name={name} checked={checked} onChange={onChange} />
    );
};

export default Checkbox;
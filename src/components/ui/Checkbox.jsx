import { useState } from "react";

const Checkbox = ({ checked, onCheckedChange }) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChange = () => {
        setIsChecked(!isChecked);
        onCheckedChange(!isChecked);
    };

    return (
        <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={handleChange} 
            className="w-5 h-5 cursor-pointer"
        />
    );
};

export default Checkbox;

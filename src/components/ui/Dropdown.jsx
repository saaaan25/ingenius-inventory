import PropTypes from "prop-types";

const Dropdown = ({ options, onChange, selectedValue, defaultLabel = "General" }) => {
    return (
        <select className="bg-secondary border border-primary_line px-2 rounded w-auto text-sm h-[30px]" onChange={onChange} defaultValue="" value={selectedValue}>
            <option value="default">{defaultLabel}</option>
            {options.map(option => (
                <option key={option.id} value={option.id}>
                    {option.nombre}
                </option>
            ))}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    selectedValue: PropTypes.any.isRequired,
    defaultLabel: PropTypes.string.isRequired
}

export default Dropdown;

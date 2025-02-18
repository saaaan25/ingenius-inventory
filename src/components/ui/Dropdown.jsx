import PropTypes from "prop-types";

const Dropdown = ({ options, onChange, defaultLabel = "General" }) => {
    return (
        <select className="border p-2 rounded w-full" onChange={onChange} defaultValue="">
            <option value="">{defaultLabel}</option>
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
    defaultLabel: PropTypes.string.isRequired
}

export default Dropdown;

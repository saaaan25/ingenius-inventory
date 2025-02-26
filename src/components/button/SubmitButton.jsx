import PropTypes from "prop-types";

const SubmitButton = ({ text }) => {
    return (
        <button 
            type="submit" 
            className="w-full bg-selected text-white py-2"
            >
            {text}
        </button>
    );
};

SubmitButton.propTypes = {
    text: PropTypes.string.isRequired,
};

export default SubmitButton;

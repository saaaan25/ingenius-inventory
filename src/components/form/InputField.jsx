import PropTypes from "prop-types";
import {FiLock, FiUser } from "react-icons/fi";

const InputField = ({ type, name, register, error }) => {
    return (
        <div className="mb-4 flex flex-col items-center gap-x-3">
            <div className="flex">
               {name === "email" ? <FiUser size={25} /> : <FiLock size={25} />}
                <input
                    type={type}
                    {...register(name, { required: "Este campo es obligatorio" })}
                    placeholder={name === "email" ? "Correo electrónico" : "Contraseña"}
                    className="w-full p-2 border-b border-primary_line focus:outline-none bg-white"
                /> 
            </div>
            {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.oneOf(["email", "password"]).isRequired,
    register: PropTypes.func.isRequired,
    error: PropTypes.object,
};

export default InputField;

import PropTypes from "prop-types";

const NavBar = ({ options, active, setActive }) => {
    const selectTab = (id) => {
        setActive(id)
    }

    return (
        <div className="flex gap-x-3"> 
            {options.map((option) => (
                <NavTab key={option.id} option={option} active={option.id === active} onClick={() => selectTab(option.id)} />
            ))}
        </div>
    );
}

const NavTab = ({ option, active, onClick }) => {
    return (
        <button key={option.id} onClick={onClick} className={`py-2 ${ active ? "border-b-2 border-primary_line": ""}`} >
            {option.id}
        </button>
    )
    
}

NavBar.propTypes = {
    options: PropTypes.array.isRequired,
    active: PropTypes.any.isRequired,
    setActive: PropTypes.func.isRequired
}

NavTab.propTypes = {
    option: PropTypes.object.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
}

export default NavBar;
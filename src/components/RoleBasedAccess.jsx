import { useAuth } from "@/hooks/useAuth";
import PropTypes from "prop-types";

const RoleBasedAccess = ({ allowedRoles, children }) => {
    const { user } = useAuth();

    if (!user || !allowedRoles.includes(user.role)) {
        return null;
    }

    return <>{children}</>;
};

RoleBasedAccess.propTypes = {
    allowedRoles: PropTypes.arrayOf(PropTypes.oneOf(["profesor", "encargado", "administrador"])).isRequired,
    children: PropTypes.node.isRequired,
};

export default RoleBasedAccess;


import PropTypes from "prop-types";

const MaterialTable = ({ materials, header_1 = "Material",header_2 = "Cantidad" }) => {
    return (
        <table className="w-full border-t border-b border-tertiary_line">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border-t border-b border-secondary_line p-2">{header_1}</th>
                    <th className="border-t border-b border-secondary_line p-2">{header_2}</th>
                </tr>
            </thead>
            <tbody>
                {materials.filter(material => material.stock > 0).length > 0 ? (
                    materials
                        .filter(material => material.stock > 0) 
                        .map((material) => (
                            <tr key={material.id} className="text-center">
                                <td className="border-t border-b border-tertiary_line p-2">{material.nombre}</td>
                                <td className="border-t border-b border-tertiary_line p-2">{material.stock}</td>
                            </tr>
                        ))
                ) : (
                    <tr>
                        <td colSpan="3" className="border-t border-b border-gray-300 p-2 text-center text-gray-500">
                            No se utilizó materiales
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

MaterialTable.propTypes = {
    materials: PropTypes.array.isRequired,
    header_1: PropTypes.string.isRequired,
    header_2: PropTypes.string.isRequired
}

export default MaterialTable;

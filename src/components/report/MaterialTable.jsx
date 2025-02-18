import PropTypes from "prop-types";

const MaterialTable = ({ materials, header_1,header_2 }) => {
    return (
        <table className="border-collapse w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="border p-2">{header_1}</th>
                    <th className="border p-2">{header_2}</th>
                </tr>
            </thead>
            <tbody>
                {materials.length > 0 ? (
                    materials.map((material) => (
                        <tr key={material.id} className="text-center">
                            <td className="border p-2">{material.name}</td>
                            <td className="border p-2">{material.stock}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="3" className="border p-2 text-center text-gray-500">
                            No hay materiales disponibles
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

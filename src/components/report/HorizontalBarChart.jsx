import PropTypes from "prop-types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const HorizontalBarChart = ({ data }) => {
    console.log('Data received:', data)

    return (
        <ResponsiveContainer width="100%" height={150}>
            <BarChart data={data} layout="vertical">
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={80} className="text-sm"/>
                <Tooltip />
                <Bar dataKey="aceptado" fill="#8884d8" stackId="a" />
                <Bar dataKey="rechazado" fill="#82ca9d" stackId="a" />
            </BarChart>
        </ResponsiveContainer>
    );
}

HorizontalBarChart.propTypes = {
    data: PropTypes.array.isRequired
}
 
export default HorizontalBarChart;
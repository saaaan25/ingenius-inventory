import PropTypes from "prop-types";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const LineGraph = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height={100}>
            <LineChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#82ca9d" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
}

LineGraph.propTypes = {
    data: PropTypes.array.isRequired
}
 
export default LineGraph;
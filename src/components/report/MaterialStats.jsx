import LineGraph from "./LineGraph";

const MaterialStats = () => {
    const data = [
        { name: "Enero", value: 30 },
        { name: "Febrero", value: 50 },
        { name: "Marzo", value: 80 },
        { name: "Abril", value: 40 },
    ];

    console.log(data)
    return (
        <LineGraph data={data} />
    );
}
 
export default MaterialStats;
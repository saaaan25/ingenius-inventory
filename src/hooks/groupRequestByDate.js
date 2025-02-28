const groupRequestsByDate = (requests) => {
    const requestsGroups = requests.reduce((acc, request) => {
        const fecha = new Date(request.date).toISOString().split("T")[0]

        console.log(fecha)
        if (!fecha) return acc; 

        let sublist = acc.find(sub => sub.length > 0 && new Date(sub[0].date).toISOString().split("T")[0] === fecha);

        if (sublist) {
            sublist.push(request);
        } else {
            acc.push([request]);
        }

        return acc;
    }, []);
    
    requestsGroups.sort((a, b) => new Date(a[0].date) - new Date(b[0].date));

    return requestsGroups;
};

export default groupRequestsByDate;

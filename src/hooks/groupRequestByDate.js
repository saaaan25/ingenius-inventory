const groupRequestsByDate = (requests) => {
    const requestsGroups = requests.reduce((acc, request) => {
        if (!request.fecha_limite) return acc; 

        let sublist = acc.find(sub => sub.length > 0 && sub[0].fecha_limite === request.fecha_limite);

        if (sublist) {
            sublist.push(request);
        } else {
            acc.push([request]);
        }

        return acc;
    }, []);

    return requestsGroups;
};

export default groupRequestsByDate;

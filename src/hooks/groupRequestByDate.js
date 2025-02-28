const groupRequestsByDate = (requests) => {
    const requestsGroups = requests.reduce((acc, request) => {

        console.log(request.date)
        if (!request.date) return acc; 

        let sublist = acc.find(sub => sub.length > 0 && sub[0].date === request.date);

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

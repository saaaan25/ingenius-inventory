import { useState, useEffect } from "react";

const useActiveTab = (options) => {
    const [activeTab, setActiveTab] = useState(options[0]?.id);
    const [filteredShowList, setFilteredShowList] = useState(options[0]?.lista);

    useEffect(() => {
        const updateFilteredRequests = () => {
            const selectedOption = options.find((option) => option.id === activeTab);
            setFilteredShowList(selectedOption ? selectedOption.lista : []);
        };

        updateFilteredRequests(); 
    }, [activeTab, options]);

    return { activeTab, setActiveTab, filteredShowList };
};

export default useActiveTab;

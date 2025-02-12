import React from "react";
import { FaSearch } from "react-icons/fa";

export const SearchSupplies = ({ children, searchTerm, setSearchTerm }) => {
    return (
        <div className="relative w-2/5">
        <input
            type="text"
            placeholder={children}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 pr-10 rounded border border-gray-300 w-full box-border"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
            <FaSearch color="#272F36" />
        </span>
        </div>
    );
};

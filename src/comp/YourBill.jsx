import React, { useState } from "react";

function YourBill({ paragraphText, newValue }) {
    const [selectedValue, setSelectedValue] = useState("dissatisfied");

    const handleChange = (e) => {
        const value = Number(e.target.value);
        setSelectedValue(value);
        newValue(value);
    };

    return (
        <div>
            <p>{paragraphText}</p>
            <select value={selectedValue} onChange={handleChange}>
                <option value={0}>Dissatisfied (0%)</option>
                <option value={5}>It was okay (5%)</option>
                <option value={10}>It was good (10%)</option>
                <option value={15}>Outstanding! (15%)</option>
            </select>
        </div>
    );
}

export default YourBill;

import React from 'react';

export const CalculationInputFields = ({ val1, val2, setVal1, setVal2 }) => {
    return (
        <div className="input-group-2">
            <input placeholder="Value 1" type="number" id="value1" value={val1} onChange={(e) => {
                setVal1(e.target.value);
            }} />
            <input placeholder="Value 2" type="number" id="value2" value={val2} onChange={(e) => {
                setVal2(e.target.value);
            }} />
        </div>
    );
};

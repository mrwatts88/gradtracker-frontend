import React from 'react';
import { AddComponent } from '../../components';

const CalculatorScreen = () => {
    return (
        <main>
            <div className='calculations'>
                <h1>A Tool to Help with Calculations</h1>
                <AddComponent />
            </div>
        </main>
    );
};

export default CalculatorScreen;

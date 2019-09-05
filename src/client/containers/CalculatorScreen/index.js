import React from 'react';
import { AddComponent, SubtractComponent, MultiplyComponent, DivideComponent, SquareRootComponent } from '../../components';

const CalculatorScreen = () => {
    return (
        <main>
            <div className='calculations'>
                <h1>A Tool to Help with Calculations</h1>
                <AddComponent />
                <SubtractComponent />
                <MultiplyComponent />
                <DivideComponent />
                <SquareRootComponent />
            </div>
        </main>
    );
};

export default CalculatorScreen;

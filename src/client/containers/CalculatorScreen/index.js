import React from 'react';
import { AddComponent } from '../../components';
import SubtractComponent from '../../components/SubtractComponent';
import MultiplyComponent from '../../components/MultiplyComponent';
import DivideComponent from '../../components/DivideComponent';
import SquareRootComponent from '../../components/SquareRootComponent';

const CalculatorScreen = () => {
    return (
        <main>
            <p style={{ whiteSpace: 'pre-line', paddingBottom: '0.25em' }}></p>
            <h1>A Tool to Help with Calculations</h1>
            <section>
                <p style={{ whiteSpace: 'pre-line', paddingBottom: '0.25em' }}></p>
            </section>
            <AddComponent />
            <SubtractComponent />
            <MultiplyComponent />
            <DivideComponent />
            <SquareRootComponent />
            <p style={{ whiteSpace: 'pre-line', paddingBottom: '1em' }}></p>
        </main>
    );
};

export default CalculatorScreen;

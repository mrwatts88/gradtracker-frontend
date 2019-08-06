import React from 'react';
import { AddComponent } from '../../components';
import SubtractComponent from '../../components/SubtractComponent';
import MultiplyComponent from '../../components/MultiplyComponent';
import DivideComponent from '../../components/DivideComponent';
import SquareComponent from '../../components/squareRootComponent';

const DESCRIPTION = "hello"
const CalculatorScreen = () => {
    return (
        <main>
            <h1>A little tool to help with some calculations</h1>
            <section>
                <h3>Make sure not to divide by 0 or square root a negative number </h3>
                <p style={{ whiteSpace: 'pre-line', paddingBottom: '1em' }}></p>
            </section>
            <AddComponent />
            <SubtractComponent />
            <MultiplyComponent />
            <DivideComponent />
            <SquareComponent />
            <p style={{ whiteSpace: 'pre-line', paddingBottom: '1em' }}></p>
        </main>
    );
}

export default CalculatorScreen;

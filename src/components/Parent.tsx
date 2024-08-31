import React, { useState } from 'react';
import sytles from './Parent.module.css';

// Parent Component
const Parent = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('Hello React Memoization');

    console.log('Parent component re-rendered');

    return (
        <div className={sytles.container}>
            <h1>Parent Component</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Increment Count
                </button>
                <button onClick={() => setText(text.includes('Hello') ? 'Hi React Memoization' : 'Hello React Memoization')}>
                    Change Text
                </button>
            </div>
            <p>Count: {count}</p>
            <p>Text: {text}</p>
            <ChildComponent text={text} />
        </div>
    );
};

// Child Component
const ChildComponent: React.FunctionComponent<any> = ({ text }) => {
    console.log('Child component re-rendered');

    return (
        <>
            <h2>Child Component</h2>
            <p>Text from Parent: {text}</p>
        </>
    );
};

export default Parent;
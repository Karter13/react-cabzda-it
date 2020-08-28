import React, {useState} from 'react';

export default {
    title: 'UseState demo'
}

export const Example1 = () => {
    console.log('example1');
    const [counter, setCounter] = useState<number>(0);


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
    </>
};

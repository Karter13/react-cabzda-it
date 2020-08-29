import React, {useState} from 'react';

export default {
    title: 'UseState demo'
}

function denerateData() {
    //difficult counting
    console.log('denerateData');
    return 1;
}

export const Example1 = () => {
    console.log('example1');

    //useState умеет без useMemo
    const [counter, setCounter] = useState<number>(denerateData);

    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
};

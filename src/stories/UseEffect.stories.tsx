import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample');

    useEffect(() => {
        document.title = counter.toString();
        console.log('useEffect every render');
        //api.getUsers().then()
        //setInterval
        //indexedDB
        //document.getElementId
        //document.title = 'User'
    });
    useEffect(() => {
        document.title = counter.toString();
        console.log('useEffect only first render(componentDidMount)');
    }, []);

    useEffect(() => {
        document.title = counter.toString();
        console.log('useEffect depend of counter');
    }, [counter]);

    return <>
        Hello, {counter}{fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
};

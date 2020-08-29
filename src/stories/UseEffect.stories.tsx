import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample');

    //асинхронные операции sidEffects
    //api.getUsers().then()
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'User'

    useEffect(() => {
    debugger;
        document.title = counter.toString();
        console.log('useEffect every render');
    });

    useEffect(() => {
    debugger;
        document.title = counter.toString();
        console.log('useEffect only first render(componentDidMount)');
    }, []);

    useEffect(() => {
    debugger;
        document.title = counter.toString();
        console.log('useEffect depend of counter');
    }, [counter]);

    return <>
        Hello, {counter}{fake}
        <button onClick={() => setFake(fake + 1)}>+</button>
        <button onClick={() => setCounter(counter + 1)}>+</button>

    </>
};

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SetTimeoutExample');

    /*useEffect(() => {

        setTimeout(() => {
            console.log('setTimeout');
            document.title = counter.toString();
        }, 1000);

    }, [counter]);*/

    useEffect(() => {

        setInterval(() => {
            setCounter(state => state + 1);
        }, 1000);

    }, []);


    return <>
        Hello, counter: {counter} - fake: {fake}
    </>
};

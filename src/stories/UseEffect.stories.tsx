import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffect demo'
}

export const SimpleExample = () => {

    const [fake, setFake] = useState(1);
    const [counter, setCounter] = useState(1);

    console.log('SimpleExample');

    //АСИНХРОННЫЕ ОПЕРАЦИИ sidEffects
    //api.getUsers().then()
    //setInterval
    //indexedDB
    //document.getElementId
    //document.title = 'User'

    useEffect(() => {
        document.title = counter.toString();
        console.log('useEffect every render');
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


export const SetClockExample = () => {

    // const date = new Date();
    // const getClock = () => {
    //     return
    // }
    //  date.getHours();
    //  date.getMinutes();
    //  date.getSeconds();
    // const clocks = `${clock}:${minutes}:${seconds}`;

    const [counter, setCounter] = useState(new Date().toLocaleTimeString() );

    console.log('SetTimeoutExample');


    useEffect(() => {

        setInterval(() => {

            // setCounter(state => state + 1);
            setCounter(new Date().toLocaleTimeString());

        }, 1000);

    }, []);


    return <>
        CLOCK: {counter}
    </>
};

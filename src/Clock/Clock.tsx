import React, {useEffect, useState} from 'react';

type PropsType = {
    mode?: 'digital' | 'analog'
}

const getTwoDigitString = (num: any) => num < 10 ? '0' + num : num;

export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('TICK');
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    let view;
    switch (props.mode) {
        case 'analog':
            view = <AnaloglClockView date={date}/>;
            break;
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
};

type ClockViewPropsType = {
    date: Date
}
export const DigitalClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>{getTwoDigitString(date.getHours())}</span>
            :
            <span>{getTwoDigitString(date.getMinutes())}</span>
            :
            <span>{getTwoDigitString(date.getSeconds())}</span>
        </>
    )
};

export const AnaloglClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <>
            <span>ANALOG</span>
        </>
    )
};

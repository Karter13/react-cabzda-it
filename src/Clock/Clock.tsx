import React, {useEffect, useState} from 'react';

type PropsType = {

}

const getTwoDigitString = (num: any) => num < 10 ? '0' + num : num;

export const Clock: React.FC<PropsType> = (props) => {
    const[date, setDate] = useState(new Date());

    useEffect(() => {

        const intervalId = setInterval(() => {
            console.log('TICK');
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };

    }, []);

    return <div>
        <span>{getTwoDigitString(date.getHours())}</span>
        :
        <span>{getTwoDigitString(date.getMinutes())}</span>
        :
        <span>{getTwoDigitString(date.getSeconds())}</span>
    </div>
};

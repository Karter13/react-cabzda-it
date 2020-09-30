import React from 'react';
import {ClockViewPropsType} from './Clock';

export const getTwoDigitString = (num: any) => num < 10 ? '0' + num : num;

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

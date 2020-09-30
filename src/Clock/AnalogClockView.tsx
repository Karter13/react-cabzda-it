import React from 'react';
import {ClockViewPropsType} from './Clock';
import './AnalogClockView.css'

export const AnaloglClockView: React.FC<ClockViewPropsType> = ({date}) => {
    return (
        <div className={'clock'}>
            <div className={'analog-clock'}>
                <div className={'dial seconds'}/>
                <div className={'dial minutes'}/>
                <div className={'dial hours'}/>
            </div>
        </div>
    )
};

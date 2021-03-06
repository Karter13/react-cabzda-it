import React from "react";

export type PropsType = {
    on: boolean
    activate: (value: boolean) => void
}

export function OnOff(props: PropsType) {

    const onStyle = {
        width: '35px',
        height: '25px',
        border: '1px solid black',
        marginRight: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white',
    };
    const offStyle = {
        width: '35px',
        height: '25px',
        border: '1px solid black',
        marginRight: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        marginRight: '5px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red',
    };

    return <div>
        <div style={onStyle} onClick={() => {props.activate(true)}} >On</div>
        <div style={offStyle} onClick={() => {props.activate(false)}}>Off</div>
        <div style={indicatorStyle} ></div>
    </div>

}

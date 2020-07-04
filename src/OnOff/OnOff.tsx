import React, {useState} from "react";

export type PropsType = {
    // on: boolean
}

export function OnOff(props: PropsType) {
    console.log('OnOff rendering');

    let [on, setOn] = useState (false);

    console.log('on: ' + on);

    const onStyle = {
        width: '35px',
        height: '25px',
        border: '1px solid black',
        marginRight: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white',
    };
    const offStyle = {
        width: '35px',
        height: '25px',
        border: '1px solid black',
        marginRight: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        borderRadius: '50%',
        marginRight: '5px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red',
    };

    return <div>
        <div style={onStyle} onClick={() => {setOn(true)}} >On</div>
        <div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
        <div style={indicatorStyle} ></div>
    </div>

}

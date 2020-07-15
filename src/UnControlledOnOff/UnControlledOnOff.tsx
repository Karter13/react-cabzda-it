import React, {useState} from "react";

type PropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UnControlledOnOff(props: PropsType) {

    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);


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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    };
    const ofClicked = () => {
        setOn(false)
        props.onChange(false)
    };

    return <div>
        <div style={onStyle} onClick={onClicked}>On</div>
        <div style={offStyle} onClick={ofClicked}>Off</div>
        <div style={indicatorStyle}></div>
    </div>

}

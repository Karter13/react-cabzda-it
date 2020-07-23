import React, {useState} from "react";
import {RatingValueType} from "../Reting/Rating";

type RatingPropsType = {
    defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UnControlledRating(props: RatingPropsType) {

    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue : 0);

    return (
        <div>
            <Star selected={value > 0} setValue={() =>{setValue(1); props.onChange(1) }} />
            <Star selected={value > 1} setValue={() =>{setValue(2); props.onChange(1) }} />
            <Star selected={value > 2} setValue={() =>{setValue(3); props.onChange(1) }} />
            <Star selected={value > 3} setValue={() =>{setValue(4); props.onChange(1) }} />
            <Star selected={value > 4} setValue={() =>{setValue(5); props.onChange(1) }} />
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarPropsType) {
    return <span onClick={() => {props.setValue()}}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}

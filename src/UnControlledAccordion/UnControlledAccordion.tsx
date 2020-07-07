import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

export function UnControlledAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapse] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {setCollapse(!collapsed)}} />
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => {props.onClick()}}>---{props.title}---</h3>
    )
}

type AccordionBodyPropsType = {}
function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

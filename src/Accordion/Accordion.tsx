import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: (value: boolean) => void
}
export function Accordion(props: AccordionPropsType) {
        return (
            <div>
                <AccordionTitle title={props.titleValue} collapse={() => {props.onClick(!props.collapsed)}}/>
                { !props.collapsed && <AccordionBody/>}
            </div>
        )
}

type AccordionTitlePropsType = {
    title: string
    collapse: () => void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.collapse}>---{props.title}---</h3>
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

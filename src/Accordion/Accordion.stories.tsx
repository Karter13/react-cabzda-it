import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action('Accordion mode change');

export const UsersCollapsedMode = () => <Accordion titleValue={"Users"} collapsed={true} onChange={callback}/>;
export const MenuUnCollapsedMode = () => <Accordion titleValue={"Menu"} collapsed={false} onChange={callback}/>;

export const AccordionModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Menu"} collapsed={value} onChange={() => setValue(!value)}/>
};



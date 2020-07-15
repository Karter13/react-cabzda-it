import React from 'react';
import {action} from '@storybook/addon-actions';
import {UnControlledAccordion} from "./UnControlledAccordion";

export default {
    title: 'UnControlledAccordion stories',
    component: UnControlledAccordion,
};


export const AccordionModeChanging = () =>  <UnControlledAccordion titleValue={"Menu"} />;




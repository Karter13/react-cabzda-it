import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {UnControlledOnOff} from "./UnControlledOnOff";

export default {
    title: 'UnControlledOnOff stories',
    component: UnControlledOnOff,
};

const callback = action('on ore off clicked');

export const OnMode = () => <UnControlledOnOff defaultOn={true} onChange={callback}/>;
export const OffMode = () => <UnControlledOnOff defaultOn={false} onChange={callback}/>;



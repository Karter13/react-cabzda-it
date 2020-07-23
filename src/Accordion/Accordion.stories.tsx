import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion stories',
    component: Accordion,
};

const callback = action('Accordion mode change');
const onClickCallback = action('Same item was clicked');

export const UsersCollapsedMode = () => <Accordion titleValue={"Users"}
                                                   collapsed={true}
                                                   onChange={callback}
                                                   onClick={onClickCallback}
                                                   items={[
                                                       {title: 'Maikl', value: 1},
                                                       {title: 'Anna', value: 2},
                                                       {title: 'Masha', value: 3},
                                                       {title: 'Lesha', value: 4}
                                                       ]}/>;

export const MenuUnCollapsedMode = () => <Accordion titleValue={"Menu"}
                                                    collapsed={false}
                                                    onChange={callback}
                                                    onClick={(value) => {alert(`User with ID ${value} should be happy!`)}}
                                                    items={[
                                                        {title: 'Maikl', value: 1},
                                                        {title: 'Anna', value: 2},
                                                        {title: 'Masha', value: 3},
                                                        {title: 'Lesha', value: 4}
                                                    ]}/>;

export const AccordionModeChanging = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={"Menu"}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      onClick={(value) => {alert(`User with ID ${value} should be happy!`)}}
                      items={[
                          {title: 'Maikl', value: 1},
                          {title: 'Anna', value: 2},
                          {title: 'Masha', value: 3},
                          {title: 'Lesha', value: 4}
                      ]}/>;
};



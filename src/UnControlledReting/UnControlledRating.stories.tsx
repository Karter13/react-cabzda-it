import React from 'react';
import { action } from '@storybook/addon-actions';
import {UnControlledRating} from "./UnControlledRating";

export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
};

const callback = action('rating changed inside component');

export const EmptyStars = () => <UnControlledRating defaultValue={0} onChange={callback} />;
export const RatingStar1 = () => <UnControlledRating defaultValue={1} onChange={callback} />;
export const RatingStar2 = () => <UnControlledRating defaultValue={2} onChange={callback} />;
export const RatingStar3 = () => <UnControlledRating defaultValue={3} onChange={callback} />;
export const RatingStar4 = () => <UnControlledRating defaultValue={4} onChange={callback} />;
export const RatingStar5 = () => <UnControlledRating defaultValue={5} onChange={callback} />;





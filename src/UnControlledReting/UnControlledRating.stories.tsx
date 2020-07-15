import React from 'react';
import { action } from '@storybook/addon-actions';
import {UnControlledRating} from "./UnControlledRating";

export default {
    title: 'UnControlledRating stories',
    component: UnControlledRating,
};

const callback = action('rating changed insid component');

export const EmptyStars = () => <UnControlledRating defaultValue={0} />;
export const RatingStar1 = () => <UnControlledRating defaultValue={1} />;
export const RatingStar2 = () => <UnControlledRating defaultValue={2} />;
export const RatingStar3 = () => <UnControlledRating defaultValue={3} />;
export const RatingStar4 = () => <UnControlledRating defaultValue={4} />;
export const RatingStar5 = () => <UnControlledRating defaultValue={5} />;





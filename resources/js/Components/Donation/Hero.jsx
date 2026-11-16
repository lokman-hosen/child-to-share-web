import React from 'react';
import PageHero from '@/Components/UI/PageHero';
import { textLimit } from '@/utils.jsx';

const Hero = ({ title, subTitle }) => (
    <PageHero
        eyebrow="Gifts"
        title={title ? title : 'Available Gifts'}
        description={subTitle ? textLimit(subTitle, 20) : 'Browse items that generous contributors are sharing with children in their community'}
    />
);

export default Hero;

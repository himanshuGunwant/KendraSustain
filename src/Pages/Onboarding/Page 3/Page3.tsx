import { Plan } from 'Components';
import React, { useState } from 'react';
import { Container } from './Page3.style';

interface PlanType {
  isPopular?: boolean;
  title?: string;
  price?: number;
  tagline?: string;
  features?: {
    name: string;
    included: boolean;
  }[];
}
const plans: PlanType[] = [
  {
    title: 'Plan ',
    price: 29.99,
    tagline: 'Fitting for getting started',
    features: [
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'A longer attribute',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: false,
      },
      {
        name: 'Attribute 1',
        included: false,
      },
      {
        name: 'Attribute 1',
        included: false,
      },
    ],
  },
  {
    title: 'Plan ',
    price: 39.99,
    isPopular: true,
    tagline: 'Best for fast changes',
    features: [
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'A longer attribute',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: false,
      },
      {
        name: 'Attribute 1',
        included: false,
      },
    ],
  },
  {
    title: 'Plan ',
    price: 79.99,
    tagline: 'Toolset for hard players',
    features: [
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'A longer attribute',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: true,
      },
      {
        name: 'Attribute 1',
        included: true,
      },
    ],
  },
];

const Page3 = () => {
  const [selected, setSelected] = useState(1);
  return (
    <Container>
      <div className={'head'}>
        <h1>So far so good!</h1>
        <p>
          Please select the <b>plan</b> that works best for you{' '}
        </p>
      </div>
      <div className={'plans'}>
        {plans.map((item, index) => (
          <Plan
            key={index}
            onClick={() => setSelected(index + 1)}
            isSelected={selected === index + 1}
            isPopular={item.isPopular}
            title={(item.title ?? '') + (index + 1)}
            price={item.price}
            tagline={item.tagline}
            features={item.features}
          />
        ))}
      </div>
    </Container>
  );
};

export default Page3;

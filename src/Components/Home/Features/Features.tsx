import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from './Features.style';

const defaultValue = [
  {
    image: '/assets/images/icon1.png',
    heading: 'Develop and Realize Net Zero Strategies',
    subHeading:
      'implement Circular Economy Models embed Sustainability Decisioning across your business.',
  },
  {
    image: '/assets/images/icon2.png',
    heading: 'Be part of a growing Sustainability Ecosystem',
    subHeading:
      'with an AI and Data Marketplace to augment your Sustainability initiatives.',
  },
  {
    image: '/assets/images/icon3.png',
    heading: 'Find out more',
    subHeading:
      'about our Custom Sustainability solutions in Asset Management, Real Estate, and Industrial markets.',
  },
];

interface PropType {
  feature?: {
    image: string;
    heading: string;
    subHeading: string;
  }[];
  company?: string;
  description?: string;
}

const Features: React.FC<PropType> = ({
  feature = defaultValue,
  company = 'Kendra Sustain',
  description = `enables
  enterprises to embed data-driven Sustainability Decision-Making across
  business operations by providing enterprises with the tools to build a
  Circular Economy model through Data and Artificial Intelligence.`,
}) => {
  return (
    <Container>
      <div className={'feature-container'}>
        <blockquote className={'p2'}>
          <span style={{ fontWeight: '800' }}>{company}</span> {description}
        </blockquote>
      </div>
      <Grid item xs={9}>
        <Grid container justifyContent="center" spacing={2}>
          {feature.map((item, pos) => (
            <div key={pos} className={'card-wrapper'}>
              <img src={item.image} alt="icon" />
              <p className={'heading'}>{item.heading}</p>
              <p className={'subHeading'}>{item.subHeading}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;

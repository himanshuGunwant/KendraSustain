import { ComponentStory, ComponentMeta } from '@storybook/react';
import Features from './Features';
export default {
  title: 'Home/Features',
} as ComponentMeta<typeof Features>;

const Template: ComponentStory<typeof Features> = (args) => (
  <Features {...args} />
);
export const Features_ = Template.bind({});
Features_.args = {
  company: 'Company Name',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam laudantium illo temporibus cumque ipsa at quisquam odit iure eligendi totam placeat labore ex est ad possimus facilis non, dicta beatae.',
  feature: [
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
  ],
};

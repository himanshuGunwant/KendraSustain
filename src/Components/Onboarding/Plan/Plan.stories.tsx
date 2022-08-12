import { ComponentStory, ComponentMeta } from '@storybook/react';
import Plan from './Plan';

export default {
  title: 'Onboarding/Plan',
  component: Plan,
} as ComponentMeta<typeof Plan>;

const Template: ComponentStory<typeof Plan> = (args) => <Plan />;

export const Default = Template.bind({});
Default.args = {};
export const Selected = Template.bind({});
Selected.args = {
  isSelected: true,
};

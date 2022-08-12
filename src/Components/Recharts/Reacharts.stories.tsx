import { ComponentMeta, ComponentStory } from '@storybook/react'
import Recharts from './Recharts'
export default {
  title: 'Recharts/Recharts',
  component: Recharts,
} as ComponentMeta<typeof Recharts>

const Template: ComponentStory<typeof Recharts> = (args) => <Recharts />
export const Recharts_ = Template.bind({})
Recharts_.args = {}

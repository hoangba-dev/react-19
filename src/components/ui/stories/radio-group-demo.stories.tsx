import { Meta, StoryObj } from '@storybook/react'

import { Label } from '../label'
import { RadioGroup, RadioGroupItem } from '../radio-group'
const meta = {
  title: 'Shadcn/radio-group',
  component: () => (
    <RadioGroup defaultValue='comfortable'>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='default' id='r1' />
        <Label htmlFor='r1'>Default</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='comfortable' id='r2' />
        <Label htmlFor='r2'>Comfortable</Label>
      </div>
      <div className='flex items-center space-x-2'>
        <RadioGroupItem value='compact' id='r3' />
        <Label htmlFor='r3'>Compact</Label>
      </div>
    </RadioGroup>
  ),
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof RadioGroup>

export default meta

type Story = StoryObj<typeof meta>

export const RadioGroupDemo: Story = {
  args: {}
}

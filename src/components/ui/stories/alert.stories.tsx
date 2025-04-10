import { Meta, StoryObj } from '@storybook/react'

import { Terminal } from 'lucide-react'
import { Alert, AlertDescription, AlertTitle } from '../alert'

const meta = {
  title: 'Shadcn/alert',
  args: {},
  render: () => (
    <Alert>
      <Terminal className='h-4 w-4' />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  ),
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<StoryObj<typeof Alert>>

export default meta

type Story = StoryObj<typeof meta>

//Colors
export const AlertDefaultDemo: Story = {
  args: {
    variant: 'default'
  },
  render: () => (
    <Alert>
      <Terminal className='h-4 w-4' />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
export const AlertDestructiveDemo: Story = {
  args: {
    variant: 'destructive'
  },
  render: () => (
    <Alert>
      <Terminal className='h-4 w-4' />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}

//examples
export const AlertNotTitle: Story = {
  render: () => (
    <Alert>
      <Terminal className='h-4 w-4' />
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}
export const AlertNotDescription: Story = {
  render: () => (
    <Alert>
      <Terminal className='h-4 w-4' />
      <AlertTitle>Heads up!</AlertTitle>
    </Alert>
  )
}

export const AlertNotIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the cli.</AlertDescription>
    </Alert>
  )
}

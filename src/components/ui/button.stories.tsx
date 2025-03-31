import { Button } from './button'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Upload } from 'lucide-react'
import Icon from '../icon'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Shadcn/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered'
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['link', 'default', 'destructive', 'outline', 'secondary', 'ghost']
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'icon', 'sm', 'lg']
    }
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// Color
export const Default: Story = {
  args: {
    variant: 'default',
    children: 'ButtonShadcn'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'ButtonShadcn'
  }
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'ButtonShadcn'
  }
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'ButtonShadcn'
  }
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'ButtonShadcn'
  }
}
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'ButtonShadcn'
  }
}
// Size
export const SizeDefault: Story = {
  args: {
    size: 'default',
    children: 'ButtonShadcn'
  }
}
export const SizeIcon: Story = {
  args: {
    size: 'icon',
    children: <Icon icon={Upload} />
  }
}
export const SizeLarge: Story = {
  args: {
    size: 'lg',
    children: 'ButtonShadcn'
  }
}

export const SizeSmall: Story = {
  args: {
    size: 'sm',
    children: 'ButtonShadcn'
  }
}

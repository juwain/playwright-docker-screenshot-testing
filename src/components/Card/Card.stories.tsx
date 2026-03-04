import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';

const meta = {
  title: 'Design System/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'elevated'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a basic card with some content.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a header with a title. It can contain any content.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Actions',
    children: 'This card has both a header and a footer section.',
    footer: (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button variant="secondary" size="small">Cancel</Button>
        <Button size="small">Save</Button>
      </div>
    ),
  },
};

export const Outlined: Story = {
  args: {
    title: 'Outlined Card',
    variant: 'outlined',
    children: 'This card has a prominent outline border.',
  },
};

export const Elevated: Story = {
  args: {
    title: 'Elevated Card',
    variant: 'elevated',
    children: 'This card has a shadow for elevation effect.',
  },
};

export const FullExample: Story = {
  args: {
    title: 'Welcome',
    variant: 'elevated',
    children: (
      <div>
        <p style={{ marginBottom: '12px' }}>
          This is a complete card example with header, body content, and footer actions.
        </p>
        <p style={{ color: '#6b7280', fontSize: '14px' }}>
          Cards are versatile containers for grouping related content.
        </p>
      </div>
    ),
    footer: (
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="secondary" size="small">Learn More</Button>
        <Button size="small">Get Started</Button>
      </div>
    ),
  },
};

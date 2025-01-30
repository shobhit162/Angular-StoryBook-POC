import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from '@storybook/test';

import { InputComponent } from '../app/components/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Input-Component',
  component: InputComponent,
  tags: ['autodocs'],
  //   argTypes: {     // not want this here
  //     backgroundColor: {
  //       control: 'color',
  //     },
  //   },
  args: { valueChange: fn() },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Medium: Story = {
  args: {
    width: '100px',
    height: '20px',
  },
};

export const Large: Story = {
  args: {
    width: '200px',
    height: '40px',
  },
};

export const Small: Story = {
  args: {
    width: '50px',
    height: '15px',
  },
};

export const PreFilled: Story = {
  args: {
    value: 'Hello, This is an input component.',
    size: 'small',
  },
};

export const PreFilledExample2: Story = {
    args: {
      value: 'Hello, This is an input component built using Angular.',
      size: 'large',
    },
  };

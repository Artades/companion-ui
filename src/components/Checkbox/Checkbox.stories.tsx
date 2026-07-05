import type { Meta, StoryObj } from "@storybook/react-vite";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  args: {
    label: "Согласен с условиями",
  },
  argTypes: {
    checked: {
      control: "boolean",
    },
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    error: "Нужно подтвердить",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

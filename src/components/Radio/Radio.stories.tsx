import type { Meta, StoryObj } from "@storybook/react-vite";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
  component: Radio,
  args: {
    label: "Вариант",
    name: "radio-story",
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

type Story = StoryObj<typeof Radio>;

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
    error: "Выберите вариант",
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

import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: {
      control: "boolean",
    },
    iconPosition: {
      control: { type: "select" },
      options: ["left", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Создать",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Создать",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Создать",
    variant: "outline",
  },
};

export const Small: Story = {
  args: {
    children: "Создать",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    children: "Создать",
    size: "large",
  },
};

export const Disabled: Story = {
  args: {
    children: "Создать",
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: "Создать",
    icon: "🚀",
    iconPosition: "left",
  },
};

export const IconOnly: Story = {
  args: {
    icon: "❤",
    "aria-label": "Like",
  },
};

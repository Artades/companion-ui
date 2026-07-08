import type { Meta, StoryObj } from "@storybook/react-vite";
import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  argTypes: {
    tone: {
      control: { type: "select" },
      options: ["neutral", "primary", "success", "warning", "danger"],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "soft", "outline"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    dot: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Новый",
  },
};

export const Primary: Story = {
  args: {
    children: "Активен",
    tone: "primary",
  },
};

export const Success: Story = {
  args: {
    children: "Готово",
    tone: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "Ожидает",
    tone: "warning",
  },
};

export const Danger: Story = {
  args: {
    children: "Ошибка",
    tone: "danger",
  },
};

export const Outline: Story = {
  args: {
    children: "Draft",
    variant: "outline",
  },
};

export const Filled: Story = {
  args: {
    children: "Live",
    tone: "primary",
    variant: "filled",
  },
};

export const WithDot: Story = {
  args: {
    children: "Online",
    dot: true,
    tone: "success",
  },
};

export const Small: Story = {
  args: {
    children: "Beta",
    size: "small",
  },
};

import type { Meta, StoryObj } from "@storybook/react-vite";
import TextArea from "./TextArea";

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  args: {
    label: "Комментарий",
    placeholder: "Введите текст",
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
    readOnly: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    defaultValue: "Текст комментария",
  },
};

export const WithError: Story = {
  args: {
    error: "Добавьте комментарий",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "Недоступно",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: "Только для чтения",
    readOnly: true,
  },
};

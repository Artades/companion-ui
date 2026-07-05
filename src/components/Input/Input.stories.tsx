import type { Meta, StoryObj } from "@storybook/react-vite";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    label: "Имя",
    placeholder: "Введите имя",
  },
  argTypes: {
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

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {},
};

export const Filled: Story = {
  args: {
    defaultValue: "Артём",
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "name@example.com",
    error: "Введите корректный email",
  },
};

export const Disabled: Story = {
  args: {
    label: "Телефон",
    placeholder: "+7",
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    defaultValue: "readonly@example.com",
    label: "Email",
    readOnly: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    icon: "@",
    iconPosition: "left",
    label: "Username",
    placeholder: "ivan",
  },
};

export const WithRightIcon: Story = {
  args: {
    defaultValue: "ok@example.com",
    icon: "ok",
    iconPosition: "right",
    label: "Email",
    placeholder: "name@example.com",
  },
};

export const States: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: 24,
        maxWidth: 420,
        padding: "16px 0",
      }}
    >
      <Input label="Default" placeholder="Введите текст" />
      <Input defaultValue="Заполнено" label="Filled" placeholder="Введите текст" />
      <Input error="Обязательное поле" label="Error" placeholder="Введите текст" />
      <Input
        defaultValue="Недоступно"
        disabled
        label="Disabled"
        placeholder="Введите текст"
      />
      <Input
        defaultValue="Только чтение"
        label="Read only"
        placeholder="Введите текст"
        readOnly
      />
      <Input
        icon="@"
        iconPosition="left"
        label="With icon"
        placeholder="username"
      />
    </div>
  ),
};

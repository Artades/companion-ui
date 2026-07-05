import type { Meta, StoryObj } from "@storybook/react-vite";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  component: Select,
  args: {
    label: "Статус",
    children: (
      <>
        <option value="">Выберите статус</option>
        <option value="draft">Черновик</option>
        <option value="active">Активный</option>
        <option value="archived">Архив</option>
      </>
    ),
  },
  argTypes: {
    disabled: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};

export const Selected: Story = {
  args: {
    defaultValue: "active",
  },
};

export const WithError: Story = {
  args: {
    error: "Выберите статус",
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: "draft",
    disabled: true,
  },
};

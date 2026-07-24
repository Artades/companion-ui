import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "../Button/Button";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          minHeight: 160,
          alignItems: "center",
          justifyContent: "center",
          padding: 48,
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    contentPosition: "top",
    text: "Подсказка с полезной информацией",
  },
  argTypes: {
    contentPosition: {
      control: { type: "select" },
      options: ["top", "right", "bottom", "left"],
    },
    text: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    children: <Button>Наведи курсор</Button>,
  },
};

export const Top: Story = {
  args: {
    children: <Button variant="outline">Сверху</Button>,
    contentPosition: "top",
  },
};

export const Right: Story = {
  args: {
    children: <Button variant="outline">Справа</Button>,
    contentPosition: "right",
  },
};

export const Bottom: Story = {
  args: {
    children: <Button variant="outline">Снизу</Button>,
    contentPosition: "bottom",
  },
};

export const Left: Story = {
  args: {
    children: <Button variant="outline">Слева</Button>,
    contentPosition: "left",
  },
};

export const LongText: Story = {
  args: {
    children: <Button>Подробнее</Button>,
    text: "Длинная подсказка переносится на несколько строк и сохраняет читаемую ширину.",
  },
};

export const AllPositions: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, max-content)",
        gap: 72,
      }}
    >
      {(["top", "right", "bottom", "left"] as const).map((position) => (
        <Tooltip
          key={position}
          contentPosition={position}
          text={`Позиция: ${position}`}
        >
          <Button variant="outline">{position}</Button>
        </Tooltip>
      ))}
    </div>
  ),
};

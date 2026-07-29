import type { Meta, StoryObj } from "@storybook/react-vite";
import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  args: {
    tabs: [
      { id: 1, title: "Описание", content: "Описание события" },
      { id: 2, title: "Участники", content: "Список участников" },
      { id: 3, title: "Обсуждение", content: "Обсуждение события" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { id: 1, title: "Описание", content: "Описание события" },
      {
        id: 2,
        title: "Участники",
        content: "Список участников",
        disabled: true,
      },
      { id: 3, title: "Обсуждение", content: "Обсуждение события" },
    ],
  },
};

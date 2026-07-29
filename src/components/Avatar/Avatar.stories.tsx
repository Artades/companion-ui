import type { Meta, StoryObj } from "@storybook/react-vite";
import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    alt: "Участник события",
    imageUrl: "https://i.pravatar.cc/160",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Sizes: Story = {
  args: {
    imageUrl: "https://i.pravatar.cc/16"
  },

  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      {(["small", "medium", "large"] as const).map((size) => (
        <Avatar {...args} key={size} size={size} />
      ))}
    </div>
  )
};

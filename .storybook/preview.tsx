import type { Preview, StoryFn } from "@storybook/react";
import "./globals.css";

const preview: Preview = {
  parameters: {
    layout: "centered",
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        small: { name: "Small", styles: { width: "320px", height: "568px" } },
        medium: {
          name: "Medium",
          styles: { width: "768px", height: "1024px" },
        },
        large: { name: "Large", styles: { width: "1280px", height: "720px" } },
      },
      defaultViewport: "large",
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1a1a1a" },
        { name: "gray", value: "#f5f5f5" },
      ],
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (Story: StoryFn) => (
      <div
        style={{
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;

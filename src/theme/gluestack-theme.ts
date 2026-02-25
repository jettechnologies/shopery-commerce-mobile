import { createConfig } from "@gluestack-style/react";
import { config as defaultConfig } from "@gluestack-ui/config";

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,

      primary500: "#5B5BD6",
      primary600: "#4F46E5",
    },
  },
});

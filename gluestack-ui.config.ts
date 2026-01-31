import { createConfig } from "@gluestack-ui/themed";
import { config as defaultConfig } from "@gluestack-ui/config";

export const config = createConfig({
  ...defaultConfig,
  tokens: {
    ...defaultConfig.tokens,
    colors: {
      ...defaultConfig.tokens.colors,
      primary0: "#E6F8E7", // Lighter variant derived from base
      primary50: "#CEECD0",
      primary100: "#B4CCB4",
      primary200: "#96B297",
      primary300: "#7A997C",
      primary400: "#618062",
      primary500: "#00B207", // Base Primary
      primary600: "#2C742F", // Darker Primary
      primary700: "#173B1A",
      primary800: "#002603",
      primary900: "#001A02",

      secondary500: "#84D187",
      warning500: "#FF8A00",
      error500: "#EA4B48",

      gray50: "#F9F9F9",
      gray100: "#F2F2F2",
      gray200: "#E6E6E6",
      gray300: "#CCCCCC",
      gray400: "#B3B3B3",
      gray500: "#999999",
      gray600: "#808080",
      gray700: "#666666",
      gray800: "#4D4D4D",
      gray900: "#333333",
    },
  },
});

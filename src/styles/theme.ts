import { createSystem, defaultConfig } from "@chakra-ui/react";

export const theme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        gray: {
          "900": { value: "#110E11" },
          "800": { value: "#312E38" },
          "700": { value: "#3E3B47" }, // #4f4c4f
          "600": { value: "#625f62" },
          "500": { value: "#999591" },
          "400": { value: "#aaa7aa" },
          "300": { value: "#cfcccf" },
          "200": { value: "#e2dfe2" },
          "100": { value: "#efecef" },
          "50": { value: "#F9F6F9" },
        },
        pink: {
          "900": { value: "#6d364f" },
          "800": { value: "#953e5e" },
          "700": { value: "#ab4264" },
          "600": { value: "#C1476C" }, // primary
          "500": { value: "#d24b70" },
          "400": { value: "#d75c84" },
          "300": { value: "#de7399" },
          "200": { value: "#e698b5" },
          "100": { value: "#efc0d2" },
          "50": { value: "#f8e6ed" },
        },
      },
      fonts: {
        heading: { value: "Roboto Slab" },
        body: { value: "Roboto" },
      },
      gradients: {
        pink: {
          value:
            "linear-gradient(to right, {colors.pink.400}, {colors.pink.600})",
        },
      },
    },
  },
  globalCss: {
    body: {
      color: "gray.50",
    },
    main: {
      bg: "gray.800",
    },
    a: {
      fontFamily: "Roboto Slab",
    },
  },
});

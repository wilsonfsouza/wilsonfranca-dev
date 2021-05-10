import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#110E11",
            "800": "#312E38",
            "700": "#3E3B47", //#4f4c4f
            "600": "#625f62",
            "500": "#999591",
            "400": "#aaa7aa",
            "300": "#cfcccf",
            "200": "#e2dfe2",
            "100": "#efecef",
            "50": "#F9F6F9"
        },
        pink: {
            "900": "#6d364f",
            "800": "#953e5e",
            "700": "#ab4264",
            "600": "#C1476C", // primary
            "500": "#d24b70",
            "400": "#d75c84",
            "300": "#de7399",
            "200": "#e698b5",
            "100": "#efc0d2",
            "50": "#f8e6ed"
        }

    },
    fonts: {
        heading: "Roboto Slab",
        body: "Roboto"
    },
    styles: {
        global: {
            body: {
                bg: 'gray.800',
                color: 'gray.50'
            },
            a: {
                fontFamily: 'Roboto Slab'
            }

        }
    }
})
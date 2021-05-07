import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#110E11",
            "800": "#312E38",
            "700": "#4f4c4f",
            "600": "#625f62",
            "500": "#999591",
            "400": "#aaa7aa",
            "300": "#cfcccf",
            "200": "#e2dfe2",
            "100": "#efecef",
            "50": "#F9F6F9"
        },

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
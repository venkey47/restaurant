import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: { initialColorMode: 'dark', useSystemColorMode: false },
  colors: {
    brand: {
      50: '#ffe5e5',
      100: '#ffc7c7',
      200: '#ff9e9e',
      300: '#ff7676',
      400: '#ff4e4e',
      500: '#ff3131', // primary red
      600: '#e31b1b',
      700: '#c01212',
      800: '#990f0f',
      900: '#6b0a0a',
    },
    accent: {
      50: '#e3fff2',
      100: '#bafee0',
      200: '#8efacc',
      300: '#60f3b4',
      400: '#36e79b',
      500: '#00bf63', // accent green
      600: '#00a255',
      700: '#008346',
      800: '#006a3a',
      900: '#004a29',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500', _hover: { bg: 'brand.600' }
        },
        outline: {
          borderColor: 'whiteAlpha.300', color: 'whiteAlpha.800',
          _hover: { bg: 'whiteAlpha.100' }
        }
      }
    }
  }
});

export default theme;



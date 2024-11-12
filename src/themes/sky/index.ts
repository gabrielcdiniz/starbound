import { Roboto } from 'next/font/google';

import { extendTheme } from '@mui/joy/styles';

const roboto = Roboto({ subsets: ['latin'], weight: ['400'] });

export const SkyTheme = extendTheme({
  colorSchemes: {
    light: { palette: {} },
    dark: { palette: {} },
  },
  fontFamily: {
    display: roboto.style.fontFamily,
    body: roboto.style.fontFamily,
  },
  typography: {},
  components: {},
});

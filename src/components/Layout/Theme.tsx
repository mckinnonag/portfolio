import * as React from 'react';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';
import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';

// Allows the app to use react-router for link elements
const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});

// defines darkmode or lightmode as the default
const m: PaletteMode = 'light';

const getDesignTokens = (mode: PaletteMode) => ({
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
    },
    palette: {
        mode,
        ...(mode === 'light'
          ? {
              // palette values for light mode
              primary: {
                main: '#455a64',
              },
              secondary: {
                main: '#ef5350',
              },
              background: {
                default: '#fafafa',
                paper: '#ffffff',
              },
            }
          : {
              // palette values for dark mode
              primary: {
                main: '#cfd8dc',
              },
              secondary: {
                main: '#ffab91',
              },
            }),
      },
    });

const Theme = createTheme(getDesignTokens(m));

export default Theme;
import { createTheme, Theme } from '@mui/material';
import { componentsOverrides } from './overrides';
import { palette } from './palette';
import { typography } from './typography';
// import { faIR } from "@mui/material/locale";

const themeOptions: Theme = createTheme(
  {
    //
    palette: palette(),
    //
    typography,
    //
    components: componentsOverrides(),
    //
    direction: 'ltr', //"rtl",
  }
  // {
  //   faIR,
  // }
);

export default themeOptions;

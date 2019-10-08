import teal from '@material-ui/core/colors/teal';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: teal,
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 20,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 10,
        paddingBottom: 10,
      },
    },
  },
});

export default theme;

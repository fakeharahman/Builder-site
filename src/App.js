// import logo from './logo.svg';
import './App.css';
import Content from './Containers/Content/Content';
import Layout from './Containers/Layout/Layout'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#321f28',
    },
    secondary: {
      main: '#ba8914',
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
    <Layout>
      <Content />
    </Layout>
    </ThemeProvider>
    </div>
  );
}

export default App;

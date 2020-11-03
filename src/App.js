// import logo from './logo.svg';
import './App.css';
import Content from './Containers/Content/Content';
import Layout from './Containers/Layout/Layout'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#f44336',
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

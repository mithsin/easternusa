import './App.css';
import { Header } from 'Pages';
import PageRouter from 'PageRouter';
import {useTheme} from 'react-jss';

function App() {
  const theme = useTheme();

  return (
    <div className="App">
      <Header theme={theme}/>
      <PageRouter />
    </div>
  );
}

export default App;

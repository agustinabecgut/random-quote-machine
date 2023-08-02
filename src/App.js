import { HashRouter } from 'react-router-dom';
import QuoteMachine from './components/QuoteMachine';
import './App.scss'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <QuoteMachine />
      </div>
    </HashRouter>
    
  );
}

export default App;

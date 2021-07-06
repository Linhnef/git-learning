import * as React from 'react';
import { Switch,Route} from 'react-router-dom';
import { HomePage } from 'pages/Home/HomePage';
import './App.css';




function App() {
 
  return (
    <Switch>
      <Route exact path="/" component={HomePage}></Route>
    </Switch>
  )
  
}

export default App;


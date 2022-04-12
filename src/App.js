

import LoginPage from './LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AirportPage from './AirportPage';



function App() {
  

  

  
  return (
    <Router>
     <div >
       


       <Switch>
         <Route exact path='/'>
           <LoginPage/>
         </Route>
         <Route path='/airportpage'>
           <AirportPage/>
         </Route>
       </Switch>
     
       
    </div>
    </Router>
  )
}

export default App
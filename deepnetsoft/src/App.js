import Dashboard from './pages/dashboard'
import Login from './pages/login'
import React, { useState } from 'react'

import { BrowserRouter, Switch, Route} from "react-router-dom"
import AddProducts from './pages/addproduct';
function App() {
  const [user, setUser] = useState(true);
  
  return (
    
   <BrowserRouter>

    
    <Switch>
      <>{!user ? <Route exact path='/Login'>
        <Login />
      </Route> : <Route exact path='/Dashboard'>
        <Dashboard />
      </Route>
      }
      </>
      
      <Route exact path='/'>
        <Login />
      </Route>
    
      <Route exact path='/addProducts'>
        <AddProducts />
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
 
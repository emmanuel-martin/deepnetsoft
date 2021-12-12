import Dashboard from './pages/dashboard';
import Login from './pages/login'
import { BrowserRouter, Switch, Route} from "react-router-dom"
import AddProducts from './pages/addproduct';
function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route exact path='/Login'>
        <Login />
      </Route>
      <Route exact path='/Dashboard'>
        <Dashboard />
      </Route>
      <Route exact path='/addProducts'>
        <AddProducts />
      </Route>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
 
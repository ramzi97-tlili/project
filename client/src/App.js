import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Profile from './components/profile/Profile';
import Signin from './components//Sign/Signin';
import Signup from './components/Sign/signup';
import Comments from './components/comments/comments';
import Profileadmin from './components/Admin/profileadmin';
import Cards from './components/Cards/Cards';
import Profilec from './components/Admincomment/profilec';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/admin' component={Profileadmin} />
          <Route exact path='/admin2' component={Profilec} />
          <Route exact path='/com' component={Comments} />
          <Route exact path='/card' component={Cards} />
          <Route exact path='/' component={Signup} />
          <Route exact path='/login' component={Signin} />
          <Route exact path='/profile' component={Profile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
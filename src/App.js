import Todo  from './components/Todo';
import Modal  from './components/Modal'; 
import Backdrop  from './components/Backdrop'; 
import { Route , Switch } from 'react-router-dom'; 

// Importing pages

import AllMeetupsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetup';

function App() {
    // return (
    // <div>
    //    <h1>My Todos</h1>
    //     <Todo text='Learn React'/>
    //     <Todo text='Master React'/>
    //     <Todo text='Master The Full React Course'/>
    //     <Modal />
    //     <Backdrop/>
    // </div>
    // );
    return <div>
      <Switch>
          <Route path="/" exact>
            <AllMeetupsPage />
          </Route>
          <Route exact path="/new-meetup">
            <NewMeetupPage />
          </Route>
          <Route  exact path="/favorites">
            <FavoritesPage />
          </Route>
      </Switch>
    </div>;
  }
  
  export default App;
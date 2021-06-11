import React, { Component ,Fragment} from 'react';
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom'
import './App.css';
import NavBar from './components/Navbar';
import  HomePage from './components/HomePage';
import { render } from '@testing-library/react';
import { questionData } from './components/Data';
import ContainerQuestion from './components/ContainerQuestion';
import NewQuestion from './components/New Question';
import LeaderBoard from './components/LeadrBoard';
import NotFound from './components/404';
import LoginPage from './components/login';
import { setInitialData } from './actions/initialData';
import {connect} from 'react-redux';
import { Auth } from './actions/authentication';


class App extends Component {
  componentDidMount(){
    this.props.setInitialData();
  }
  SetShowingResults = ShowingResults => {
  this.setState({ShowingResults :ShowingResults })
}

state = {
  authentication : false ,
  ShowingResults : false
};
login = (user) => {
  this.setState(prevState => ({
    authentication : !prevState.authentication,
    user
  }))
}


  render() {
    const {Auth} = this.props
  return ( 

<Router>
  <div>
    {Auth &&
<Fragment>
      <NavBar />
      <AppRoutes  />
    </Fragment>}
    
   
    
    {!Auth &&<Route render={()=><LoginPage />}></Route>}
      
    
    
  </div>
</Router>
  );
 }
}



const AppRoutes = props => (
  <Switch>
 <Route exact path='/' render={() => <HomePage /> }/>
 <Route path='/questions/:question_id' render={() => <ContainerQuestion  />}/>
 <Route path="/newQuestion" >
   <NewQuestion/>
   </Route>
 <Route path='/LeaderBoard' >
   <LeaderBoard/>
   </Route>
 <Route path="*" >
   <NotFound/>
 </Route>
  </Switch>
);

function mapStateToProps({Auth}){
  return{
    Auth
  };
}
export default connect(
  mapStateToProps,{setInitialData}
)(App)


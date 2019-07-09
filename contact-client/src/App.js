import React from 'react'
import List from './components/contacts/lists'
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Show from './components/contacts/show'
import ContactNew from './components/contacts/new'
import Register from './components/user/register'
import Login from './components/user/login'
import Logout from './components/user/logout'
import Account from './components/user/accounts'
import css from  './home.css'
class App extends React.Component{
    constructor(){
        super()
        this.state={
            isAuthenticated:false
        }
    }
    componentDidMount(){
       if(localStorage.getItem('userAuthToken') ){
           this.setState({isAuthenticated:true})
       }
    }
    render(){
        return(
            <div >
                   <h2 className="title">Contact Manager  </h2>
                    <BrowserRouter>
                 {!this.state.isAuthenticated&&(
                        <div> 
                    <Link to="/register">Register</Link>
                    <Link to="/login">Login</Link>
                </div>
            )} 
            {this.state.isAuthenticated &&(
                <div>
                    <Link to="/logout">Logout</Link>
                </div>
            )}
            <Switch>
            <Route path="/register" component={Register}/>    
            <Route path="/login" component={Login}/>
            <Route path="/logout" component={Logout}exact={true}/>
            <Route path="/contacts" component={List} exact={true}/>
            <Route path="/new" component={ContactNew}/>
            <Route path="/contacts/:id" component={Show}/>
            <Route path="/account" component={Account}/>
            </Switch>
        </BrowserRouter>
               </div> 
         
        )
    }
}
export default App
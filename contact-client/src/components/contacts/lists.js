import React from 'react'
import axios from '../../config/config'
import {Link} from 'react-router-dom'

class List extends React.Component{
constructor(props){
    super(props)
    this.state={
        contacts:[]
    }
}
componentDidMount(){
    axios.get('/contacts',{
        headers:{
            'x-auth':localStorage.getItem('userAuthToken')
        }
    })
    .then(response=>{
        this.setState(()=>({contacts:response.data}))
    })
    .catch(err=>{
        console.log(err)
    })
}
render(){
    return(
        <div className="acc">
           
            <h3>contacts-{this.state.contacts.length}</h3>
            <ul>
                {this.state.contacts.map((contact)=>{
                    return<li key={contact._id}><Link to={`/contacts/${contact._id}`}>{contact.name}</Link></li>
                })}
            </ul>
            <Link to={'/new'}>Add New Contact</Link>
        </div>
    )
}
}
export default List
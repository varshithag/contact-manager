import React from 'react'
import axios from '../../config/config'
import {Link} from 'react-router-dom'
class Show extends React.Component{
    constructor(){
        super()
        this.state={
            contacts:{}
        }
    }
    componentDidMount(){
        
        const id=this.props.match.params.id
        console.log(id)
        axios.get(`/contacts/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
            console.log(response.data)
            this.setState(()=>({contacts:response.data}))
        })
    }
    render(){
        return(
            <div>
            <div className="w3-container sh">
                <label>
                    Name:{this.state.contacts.name}
                </label><br/>
                <label>
                    Email:{this.state.contacts.email}
                </label><br/>
                <label>
                    Phno:{this.state.contacts.phno}
                </label><br/>
                <Link to="/contacts"><p>back</p></Link>
                </div>
            </div>
        )
    }
}
export default Show
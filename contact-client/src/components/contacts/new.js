import React from 'react'
import axios from '../../config/config'
import ContactForm from './form'
import {connect} from 'react-redux'
import{Link,Router} from 'react-router-dom'
import {setContact} from '../../action/contactAction'
class ContactNew extends React.Component{
    constructor(props){
        super(props)
    }
    handleSubmit(formData){
        console.log(formData)
        console.log('in formnew')
        axios.post('/contacts',formData,{
            headers: {
                'x-auth': localStorage.getItem('userAuthToken')
            }
        })
        .then(response=>{
           
            if(response.data.hasOwnProperty('error')){
                console.log(response.data.error)
            }
            else{
                console.log(response.data)
                    // console.log(this.context.history)
                this.props.router.push(`/contacts`)
            }
        })
    }
    render(){
        return(
            <div>
                <h3 className="title">Add a new Contact</h3>
                <ContactForm newhandleSubmit={this.handleSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return { 
        contact: state.contact 
    }
}
export default connect(mapStateToProps)(ContactNew)

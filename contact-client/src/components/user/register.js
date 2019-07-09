import React from 'react'
import axios from '../../config/config'
class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email:'',   
            password:''
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({            
            [e.target.name]: e.target.value
        }))
    }


    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            username:this.state.username,
            email: this.state.email,
            password: this.state.password

        }
        axios.post('/user/register', formData)
        .then(response => {
            console.log(response.data)
            if(response.data.errors){
                alert(response.data.message)
            }
            else{
                console.log('succer register')
                this.props.history.push('/users/login')
            }
        })
    }

    render(){
        //console.log(this.props)
        return(
            <div className="reg">
                <h2>Register</h2>                
                <form onSubmit = {this.handleSubmit} >
                <div className="form-group">
                    <label>
                        Username
                        <input type="text" className="form-control"
                         value={this.state.username} name="username"
                          onChange={this.handleChange}/>
                       
                    </label>
                    </div>
                    <label>
                        Email
                        <input type="text" className="form-control" 
                        value={this.state.email} name="email" 
                        onChange={this.handleChange}/>
                      
                    </label><br/>
                    <label>
                        Password
                        <input type="password" className="form-control"
                         value={this.state.password} name="password" 
                         onChange={this.handleChange}/>
                    </label><br/>
                    <input type="submit"  className="btn btn-primary"/>
                </form>
                 
              
            </div>

        )
    }
}

export default Register

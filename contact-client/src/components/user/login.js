import React from 'react'
import axios from '../../config/config'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {            
            email:'',
            password:''
        }
    }

    handleChange = (e) => {
        e.persist()
        this.setState(() => ({
            [e.target.name] : e.target.value
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {         
            email : this.state.email,
            password : this.state.password
        }
          axios.post('/user/login',formData)
        .then(response => {
            if(response.data.errors){
                alert(response.data.errors)
            }else{
                console.log('succ in login')
                const token = response.data.token               
                localStorage.setItem('userAuthToken', token)
               // this.props.handleAuth(true)
                this.props.history.push('/users/account')
          }
        })
    }



    render(){
        return(
            <div className="reg">
                <h2>Login</h2>             
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            Email
                            <input type="text" className="form-control" value={this.state.email} name="email" onChange={this.handleChange}/>
                        </label><br/></div>

                        <label>
                            Password
                            <input type="password" className="form-control" value={this.state.password} name="password" onChange={this.handleChange}/>
                        </label><br/><br/>
                        <input type="submit" className="btn btn-primary"/>
                    </form>               
            </div>
        )
    }


}



export default Login
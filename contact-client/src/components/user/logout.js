import React from 'react'
import axios from '../../config/config'
import {resetUser} from '../../action/userAction'
import {connect} from 'react-redux'

class Logout extends React.Component{

    componentDidMount(){
        console.log(localStorage.getItem('userAuthToken'))
        axios.put('/user/logout',{
            headers:{
                'x-auth' : localStorage.getItem('userAuthToken')
            }
        })
        .then(response => {
            console.log(response.data)
            localStorage.removeItem('userAuthToken')
            //this.props.handleAuth(false)
            this.props.history.push('/users/login')
            this.props.dispatch(resetUser())
        })

    }

    render(){
        return(
            <p>logging out...</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)

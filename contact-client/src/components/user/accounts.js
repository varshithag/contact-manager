import React from 'react'
import axios from '../../config/config'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setUser} from '../../action/userAction'
import css from'../../home.css'
// import {setPosts} from '../../actions/posts'

class Account extends React.Component {
    
    componentDidMount() {
       axios.get('/user/account', {
           headers: {
               'x-auth': localStorage.getItem('userAuthToken')
           }
       })
        .then(response => {
            console.log(response.data)
            const user = response.data 
            this.props.dispatch(setUser(user))
        })
        .catch(err => {
            console.log(err)
        })

        // axios.get('http://dct-user-auth.herokuapp.com/posts', {
        //     headers:{
        //         'x-auth': localStorage.getItem('userAuthToken')
        //     }
        // })
        // .then(response => {
        //     const posts = response.data
        //     this.props.dispatch(setPosts(posts))
        // })


    }
    render() {
        //console.log(this.props)
        return (
            <div>
                <h2 className="title">User Account</h2>
                <div className="acc">
                <p> { this.props.user.username } </p> 
                <Link to="/contacts"><h3>Contact List</h3></Link>
                </div>
                {/*because of the below function now we can use state value via props */}
            </div>
        )
    }
}

// here the state value (i.e the user value) is made available to the component via props
// anything from the redux store is made available to the component is made through mapStatetoProps
const mapStateToProps = (state) => {
    return { 
        user: state.user 
    }
}

export default connect(mapStateToProps)(Account)
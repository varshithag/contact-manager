import {createStore,combineReducers} from 'redux'
import userReducer from '../reducer/userReducer'
import contactsReducers from '../reducer/contactsReducer'


const configStore=()=>{
    const store=createStore(combineReducers({
        user:userReducer,
        contacts:contactsReducers
    }))
    return store
}
export default configStore


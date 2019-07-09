const contactReducer=(state=[],action)=>{
    switch(action.type){
        case 'SET_CONTACTS':{
            return [...action.payload]
        }
        case 'ADD_CONTACT':{
            return [state,...action.payload]
        }
        case 'DELETE_CONTACT':{
            return state.filter(contact=>{
                return (contact._id!==action.payload)
            })
        }
        default:{
            return[...state]
        }
    }
}
export default contactReducer
export const setContact=(contact)=>{
    return{type:"SET_CONTACT",payload:contact}
}
export const addContact=(contact)=>{
    return{type:"ADD_CONTACT",payload:contact}
}
export const resetContact=()=>{
    return{type:"RESET_CONTACT"}
}
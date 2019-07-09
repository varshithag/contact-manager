import React from 'react'
class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            phno:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleChange(e){
        e.persist()
        this.setState(()=>({
            [e.target.name]:e.target.value
        }))
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
           name:this.state.name,
            email:this.state.email,
            phno:this.state.phno
        }
        this.props.newhandleSubmit(formData)
    }
    render(){
        return(
            <div className="reg ">
                <form onSubmit={this.handleSubmit}className="form-group" >
                    <label>
                        Name:<input type="text" className="form-control" value={this.state.name} name="name" onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Email:<input type="email" className="form-control" value={this.state.email} name="email" 
                        onChange={this.handleChange}/>
                    </label><br/>
                    <label>
                        Phno:<input type="text" className="form-control" value={this.state.phno} name="phno" 
                        onChange={this.handleChange}/>
                    </label><br/>
                    <input type="submit" className="btn btn-primary"/>
                </form>
            </div>
        )
    }
}
export default ContactForm
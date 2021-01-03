import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import "./style.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            image:''
        }
        this.changeFirstName = this.changeFirstName.bind(this)
        this.changeLastName = this.changeLastName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePhone = this.changePhone.bind(this)
        this.changeImage = this.changeImage.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeFirstName(event){
        this.setState({
            firstname:event.target.value
        })
    }

    changeLastName(event){
        this.setState({
            lastname:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePhone(event){
        this.setState({
            phone:event.target.value
        })
    }

    changeImage(event){
        this.setState({
            image:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            phone: this.state.phone,
            image: this.state.image
        }
        axios.post('http://localhost:4000/app/signup', registered)
        .then(response => console.log(response.data))

        this.setState({
            firstname:'',
            lastname:'',
            email:'',
            phone:'',
            image:''
        })
    }
    render() {
        return( 
             
            <div>
                <div className ='container'>
                    <div className ='form-div'>
                        <form onSubmit = {this.onSubmit}>
                        <h1>NodeJS Form</h1>
                        <br></br>
                            <input type = 'text' required = 'true'
                            placeholder = 'First Name'
                            onChange = {this.changeFirstName}
                            value = {this.state.firstname}
                            className = 'form-control form-group'
                            />

                            <input type = 'text' required = 'true'
                            placeholder = 'Last Name'
                            onChange = {this.changeLastName}
                            value = {this.state.lastname}
                            className = 'form-control form-group'
                            />

                            <input type = 'text' required = 'true'
                            placeholder = 'Email ID'
                            onChange = {this.changeEmail}
                            value = {this.state.email}
                            className = 'form-control form-group'
                            />

                            <input type = 'tel' required = 'true'
                            placeholder = 'Phone Number'
                            onChange = {this.changePhone}
                            value = {this.state.phone}
                            className = 'form-control form-group'
                            />

                            <img src = "logo512.png"/>

                            <input type = 'submit' className = 'btn btn-danger btn-block' value = 'Submit'/>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
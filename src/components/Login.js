import React, { Component } from 'react'
import { fire } from '../config/fire';
import Navbar from './Navbar'
export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            status: true,
            loader: false,
            error_message:''
        }
    }
    login = (e) => {
        e.preventDefault();
        this.setState({
            loader: true
        })
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                console.log(response)
            })
            .catch((err) => {
                console.log(err.message)
                this.setState({
                    error_message: err.message,
                    status: false,
                    loader:false
                })
            })
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    signup = (e) => {
        e.preventDefault();
        this.setState({
            loader: true
        })
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                console.log(response)
                this.setState({
                    loader: false,
                   
                })
            })
            .catch((err) => {
                console.log(err)
                console.log(err.message)
                this.setState({
                    error_message: err.message,
                    status: false,
                    loader: false
                })
            })
    }
    render() {
        return (
            <div>
                <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col-sm-4"></div>
                    <div class="col-sm-4">
                        <h3 style={{ textAlign: "center", marginTop: 30 }}>LOG IN/SIGN UP</h3>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input
                                    class="form-control"
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    onChange={this.handleChange}
                                    value={this.state.pasword}
                                    class="form-control"
                                />
                            </div>
                            <button onClick={this.login} class="btn btn-primary btn-sm" style={{ margin: 8 }}>Log In</button>
                            <button onClick={this.signup} class="btn btn-primary btn-sm">Sign Up</button>
                            </form>
                            
                            {this.state.loader ? <center>
                                <div class="preloader-wrapper active">
                                    <div class="spinner-layer spinner-red-only">
                                        <div class="circle-clipper left">
                                            <div class="circle"></div>
                                        </div><div class="gap-patch">
                                            <div class="circle"></div>
                                        </div><div class="circle-clipper right">
                                            <div class="circle"></div>
                                        </div>
                                    </div>
                                </div>
                            </center> :
                            <div>
                                    {this.state.status ? (<h4></h4>) : (<h5 style={{ color: 'red' }}>{this.state.error_message}</h5>) }
                            </div>
                            }
                    </div>
                </div>
            </div>
</div>
        )
    }
}
export default Login

import React, { Component } from 'react'
import { fire, storage } from '../config/fire'

import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom'
export class EditNews extends Component {
    constructor(props) {
        super()
        this.state = {
            news_title: '',
            news_details: '',
            news_date: '',
            image_url: '',
            status: false,
            disable_status: false,
            upload_value:0
        }
    }

    componentDidMount() {
console.log(this.props.match.params)
        const news_id = this.props.match.params.news_id

        /////////////////////////////////// DATA FETCH FUNCTION
       
            fire.database()
                .ref("projects")
                .child(news_id)
                .once("value").then(snapshot => {
                     console.log(snapshot.val())
                   
                        this.setState({
                            news_title: snapshot.val().news_title,
                            news_details: snapshot.val().news_details,
                            news_date: snapshot.val().news_date,
                            image_url: snapshot.val().image_url,
                            id: news_id
                         })
                  
                })
        
    }


    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    ////////////////////////////////ON FORM SUBMT FUNCTION
    formUpdate = (e) => {
        e.preventDefault()
        console.log(this.state)
        fire.database()
            .ref("projects")
            .child(this.state.id)
            .update({
                news_title: this.state.news_title,
                news_details: this.state.news_details,
                news_date: this.state.news_date,
                image_url: this.state.image_url
            })
    alert('News Updated Successfully')
        this.setState({
            news_title: '',
            news_details: '',
            news_date: '',
            image_url: '',
        })

    }
    
    ///////////////////////////////////////// ON IMAGE UPLOAD TO FIREBASE
    onImageChange = (e) => {
        this.setState({
            disable_status: true
        })
        if (e.target.files[0]) {
            const image = e.target.files[0];
            const uploadTask = storage.ref('images/' + image.name).put(image);
            uploadTask.on('state_changed', (snapshot) => {
                console.log(snapshot)
        
                this.setState({
                    upload_value: Math.floor((parseInt(snapshot.bytesTransferred) / parseInt(snapshot.totalBytes)) * 100)
                })
                console.log(this.state.upload_value)
            },
                (error) => {
                    console.log(error)
                },
                () => {
                    storage.ref('images').child(image.name).getDownloadURL().then(url => {
                        this.setState({
                            image_url: url,
                            disable_status: false
                        })
                    })
                }
            )
        }
    }
    render() {
        return (
            <div>
                {this.state.status ? < Redirect to='/Admin' /> : null}

                <h5>EDIT NEWS</h5>
                <div class="row">
                    <Link to='/Admin' class="waves-effect waves-light btn-small" style={{ float: 'right' }}>VIEW NEWS</Link>
                    <form class="col s12" onSubmit={this.formUpdate}>
                        <div class="row">
                            <div class="input-field col s6">
                                <input value={this.state.news_title} placeholder="" id="news_title" type="text" class="validate" onChange={this.handleChange} />
                                
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input value={this.state.news_details} placeholder="" id="news_details" type="text" class="validate" onChange={this.handleChange} />
                               
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <img src={this.state.image_url} alt="photo" style={{ width: 200 }} />
                                <input placeholder="" id="news_image" type="file" class="validate" onChange={this.onImageChange} />
                               
                                {this.state.disable_status ?
                                    
                                    <div class="progress">
                                        <div class="determinate" style={{width:this.state.upload_value}}></div>
                                    </div>
                                   : null}
                            </div>
                        </div>
                        <div class="row">
                            <div class="input-field col s6">
                                <input value={this.state.news_date} placeholder="" id="news_date" type="date" class="validate" onChange={this.handleChange} />
                                <label for="news_date">News Date</label>
                            </div>
                        </div>
                        <button disabled={this.state.disable_status} class="waves-effect waves-light btn-small">SUBMIT</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default EditNews

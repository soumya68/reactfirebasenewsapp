import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom'
import { fire } from '../config/fire';
export class News extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [],
            disable_status: true
        }
}

    /////////////// COMPONENT DID MOUNT FUNCTION
    componentDidMount() {
        this.dataFetch()
    }

    /////////////////////////////////// DATA FETCH FUNCTION
    dataFetch = () => {
        this.setState({
            data: [],
            disable_status: true
        })
        fire.database()
            .ref("projects")
            .once("value").then(snapshot => {
                // console.log(snapshot.val())
                snapshot.forEach(item => {
                    let data2 = {
                        id: item.key, ...item.val()
                    }
                    this.setState({
                        data: [...this.state.data, data2],
                       
                    })
                })
                this.setState({
                    disable_status: false
                })
            })
       
    }
    ///////////////////////ON DELETE FUNCTION
    onDelete = (id) => {
        fire.database().ref("projects").child(id).remove()
        this.dataFetch()
    }

    render() {
        return (
            <div>
                <div className="container" style={{ marginTop: 100, color: "red" }}>
                {this.state.disable_status ?
                    <center>
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
                        </center>
                    :
                    <div>
                    <Link to='/Add_news' class="waves-effect waves-light btn-small" style={{ float: 'right' }}>ADD NEWS</Link>
                        {this.state.data.length ?
                            <table>
                                <thead>
                                    <tr>
                                        <th>Sl No</th>
                                        <th>News Title</th>
                                        <th>Nes Details</th>
                                        <th>News Image</th>
                                        <th>News Date</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.data.map((item, number) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{(this.state.data.length) - number}</td>
                                                <td>{item.news_title}</td>
                                                <td>{item.news_details}</td>
                                                <td> <img src={item.image_url} alt="photo" style={{ width: 200 }} /></td>
                                                <td>{item.news_date}</td>
                                                <td>
                                                    <Link to={'/Edit_news/' + item.id}>
                                                        <button class="waves-effect waves-light btn-small" size="sm" variant="success">EDIT</button>
                                                        <span className="card-title"> {item.title}</span>
                                                    </Link>


                                           &nbsp;
                <button class="waves-effect waves-light btn-small" size="sm" variant="danger" onClick={() => this.onDelete(item.id)}>DELETE</button></td>
                                            </tr>)
                                    }).reverse()
                                    }
                                </tbody>
                            </table> :
                            <center> <h4>No News Available</h4>
                            </center>}
                        </div>
                        
                }
               
                </div>
                
            </div>
        )
    }
}
export default News

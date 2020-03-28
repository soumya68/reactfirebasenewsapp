import React from 'react'
import Navbar from './Navbar'
import { fire, storage } from '../config/fire'


export class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
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
                        data: [...this.state.data, data2]
                    })
                })
            })
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container" style={{ marginTop: 50, color: "red" }}>
                <center>
                    <h4>NEWS</h4>
                </center>

                {this.state.data.length ?
                    <table>
                        <thead>
                            <tr>
                                <th>Sl No</th>
                                <th>News Title</th>
                                <th>News Details</th>
                                <th>News Image</th>
                                <th>News Date</th>

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

                                    </tr>)
                            }).reverse()
                            }
                        </tbody>
                    </table> :
                    <center><h3>NO NEWS AVAILABLE</h3></center>}
                </div>
            </div>
        )
    }
}

export default Home

import React from 'react'
import Navbar from './Navbar'
const Contact = (props) => {
    console.log(props)
    // setTimeout(()=>{
    //     props.history.push('/')
    // },10000)
    return (
        <div>
            <Navbar />
        <div className="container" style={{marginTop:100,color:"green"}}>
            <div class="card-panel teal lighten-2">
            <h2 className="center">CONTACT PAGE</h2>
            </div>
</div>
        </div>
    )
}
export default Contact

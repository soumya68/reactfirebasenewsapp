// import React, { Component } from 'react'
// import Navbar from './components/Navbar'
// import { BrowserRouter, Route } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Login from './components/Login'

// export class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <div>
//           <Navbar />
//           <Route exact path='/' component={Home} />
//           <Route path='/About' component={About} />
//           <Route path='/Contact' component={Contact} />
//           <Route path='/Login' component={Login} />
//           <center>
//             {/* <h1 style={{ marginTop: 100 }}>ROUTER</h1> */}
//           </center>
//         </div>
//       </BrowserRouter>
//     )
//   }
// }

// export default App

import React, { Component } from 'react'
import { fire } from './config/fire'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Admin from './components/Admin'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {}
    }

  }

  componentDidMount() {
    this.authListener();
  }



  authListener() {

    fire.auth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        this.setState({
          user: user
        })
        //return <Redirect to='/Home' />
        this.props.history.push('/Home')
      }
      else {
        this.setState({
          user: false
        })
      }
      console.log(this.state.user)
    })
  }

  render() {
    return (

      <BrowserRouter>
        <div>
          {this.state.user ? (<Redirect to='/Admin' />) : (<Redirect to='/' />)}
           <Route exact path='/' component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/Admin' component={Admin} />
          <Route path='/Login' component={Login} />

           <center>
             {/* <h1 style={{ marginTop: 100 }}>ROUTER</h1> */}
           </center>
        </div>
 </BrowserRouter>



    )
  }
}

export default App

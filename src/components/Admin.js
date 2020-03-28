import React from 'react'
import Navbar2 from './Navbar2'
import News from './News'
import AddNews from './AddNews'
import EditNews from './EditNews'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
const Admin = () => {
    return (
        <div>
            <Navbar2 />
            <BrowserRouter>
        <div className="container" style={{ marginTop: 100, color: "red" }}>
           
                 
                    <Route path='/Admin' component={News} />
                    <Route path='/Add_news' component={AddNews} />
                    <Route path='/Edit_news/:news_id' component={EditNews} />
                </div>
            </BrowserRouter>
            </div>
    )
}
export default Admin

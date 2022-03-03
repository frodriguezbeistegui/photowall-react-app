import React, { Component } from "react"
import '../styles/stylesheet.css'
import PhotoWall from './PhotoWall.js'
import AddPhoto from "./AddPhoto.js"
import Single from "./Single.js"

import { Route, Link } from 'react-router-dom';


class Main extends Component{  
    
    state = { loading: true }

    componentDidMount(){
        this.props.startLoadingPosts().then(()=>{
            this.setState({loading: false})
        })
        this.props.startLoadingComments()
    }

    render() {
        return (    
        <div>
            <h1>
                <Link to='/'>PhotoWall</Link>
            </h1>
        <Route exact path="/" render={() => (
            <div>
                <PhotoWall {...this.props}/>
            </div>
        )}/>

        <Route exact path="/AddPhoto" render={() => (
            <AddPhoto {...this.props} />
        )} />

        <Route path='/single/:id' render={(params)=>(
            <Single {...this.props} {...params} loading={this.state.loading} />
        )}></Route>

        </div>
            )   
        };

    }


export default Main



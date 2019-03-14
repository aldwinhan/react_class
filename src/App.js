import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/NavBar'
import MediaCard from './Component/Card'
import { Typography } from '@material-ui/core';
import Paper from './Component/Paper'
import PaperAbout from './Component/PaperAbout'
import Member from './Component/Member'
import PastMeetups from './Component/PastMeetups'
import Footer from './Component/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div style={{padding:'15px'}}>
            <MediaCard/>
        </div>
        <div style={{padding:'15px'}}>
          <Typography variant="h6"> Next Meetup</Typography>
          <div style={{padding:'20px'}}>
            <Paper/>
          </div>
        </div>
        
        <div style={{padding:'15px'}}>
          <Typography variant="h6"> About Meetup</Typography>
          <div style={{padding:'20px'}}>
            <PaperAbout/>
          </div>
        </div>
        
        <div style={{padding:'15px'}}>
          <Typography variant="h6" style={{float:'left'}}> Members</Typography>
          <Typography style={{float:'right'}}> See all</Typography>
          <div style={{padding:'20px'}}>
            <Member/>
          </div>
        </div>

        <div style={{padding:'15px'}}>
          <Typography variant="h6" style={{float:'left'}}> Past Meetups</Typography>
          <Typography style={{float:'right'}}> See all</Typography>
          <div style={{padding:'20px'}}>
            <PastMeetups/>
          </div>
        </div>

        <Footer/>
      </div>
      /* 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */
    );
  }
}

export default App;

import React, { Component } from "react"



import './App.css';
import AboutMe from "./components/AboutMe";
import Town from "./components/Town";



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMenu: 'a'
    }
  }

  render() {
    return (

          <div className="App">
            
            <div className="menu">
              <p className="menu-item" onClick={() => this.setState({ selectedMenu: "AboutMe" })}>
              {
                this.state.selectedMenu === "AboutMe" ?
                <div style={{ 
                  fontSize : "22px", 
                  backgroundColor : "azure", 
                  color : "black"}}>
                  About Me</div>
                :
                <div>About Me</div>
              }
              </p>


              <p className="menu-item" onClick={() => this.setState({ selectedMenu: "MyTown" })}>
                
              {
                this.state.selectedMenu === "MyTown" ?
                <div style={{ 
                  fontSize : "22px", 
                  backgroundColor : "azure", 
                  color : "black"}}>
                  My Town
                  </div>
                
                :
                <div>My Town</div>
              }
              </p>

            </div>

            {
              this.state.selectedMenu === "AboutMe" ? 
              <AboutMe/> : <Town />
            }
          
          </div>
    );
  }
}


export default App;

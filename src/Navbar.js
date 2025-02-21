import React, { Component } from 'react'

export class Navbar extends Component {
    constructor(){
        super();
        console.log("this", this);
        this.state = {
            title : "The Avengers !!",
            plot : "Supernatural power shown in movie",
            price : 199,
            rating : 8.9,
            stars : 0
        }
        // this.addStars = this.addStars.bind(this);  other way to bind event handler
    }


    addStars = () => { 
        

     }

  render() {
    return (
      <button onClick={this.addStars}>Navbar</button>
    )
  }
}

export default Navbar
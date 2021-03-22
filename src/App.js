import React from "react"
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      showName: false
    }
  }

  displayInfo = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      showName: true
    })
  }

  render() {
    // console.log(this.state.firstName)
    // console.log(this.state.lastName)
    const firstName = this.state.firstName //DESCTRUCTURE: const {firstName} = this.state
    const lastName = this.state.lastName
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Please enter your name to display a motivational message</h1>
          <input type="text" name="firstName" placeholder="First Name" onChange={this.displayInfo} />
          <input type="text" name="lastName" placeholder="Last Name"  onChange={this.displayInfo}/>
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
          {this.state.showName && <h1 className="message">You are doing awesome, {firstName} {lastName}!</h1>}
        </form>     
      </div>
    )
  }
}

export default App;


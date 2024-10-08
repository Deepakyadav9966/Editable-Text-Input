import {Component} from 'react'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    inputText: '',
    buttonToggle: true,
  }

  onChangeText = event => {
    this.setState({inputText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({
      buttonToggle: !prevState.buttonToggle,
    }))
  }

  render() {
    const {inputText, buttonToggle} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h3 className="heading">Editable Text Input</h3>
          {buttonToggle ? (
            <input
              type="text"
              onChange={this.onChangeText}
              value={inputText}
              className="input"
            />
          ) : (
            <p className="para">{inputText}</p>
          )}
          <button type="button" className="button" onClick={this.onClickButton}>
            {buttonToggle ? 'Save' : 'Edit'}
          </button>
        </div>
      </div>
    )
  }
}

export default App

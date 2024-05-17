import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CounterValues from '../CounterValues'

import './index.css'

class CharacterCounter extends Component {
  state = {
    charactersInput: '',
    listOfCharactes: [],
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {charactersInput} = this.state
    const countOfChar = charactersInput.length

    const newElement = {
      id: uuidv4(),
      charactersInput,
      countOfChar,
    }

    this.setState(prevState => ({
      listOfCharactes: [...prevState.listOfCharactes, newElement],
      charactersInput: '',
    }))
  }

  onChangeInputValue = event => {
    this.setState({
      charactersInput: event.target.value,
    })
  }

  render() {
    const {charactersInput, listOfCharactes} = this.state
    const status = listOfCharactes.length === 0
    return (
      <div className="container">
        <div className="card">
          <div className="yellow-card">
            <h1 className="heading1">Count the characters like a Boss...</h1>

            {status ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                className="no-user-inputs"
                alt="no user inputs"
              />
            ) : (
              <ul className="list-container">
                {listOfCharactes.map(eachItem => (
                  <CounterValues key={eachItem.id} countDetails={eachItem} />
                ))}
              </ul>
            )}
          </div>

          <form className="black-card" onSubmit={this.onSubmitForm}>
            <h1 className="heading2">Character Counter</h1>

            <div className="search-box">
              <input
                type="text"
                className="characters-input"
                placeholder="Enter the Characters here"
                value={charactersInput}
                onChange={this.onChangeInputValue}
              />

              <button type="submit" className="add-btn">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter

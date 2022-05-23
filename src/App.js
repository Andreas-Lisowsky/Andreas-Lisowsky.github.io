import {Component} from 'react'
import {connect} from 'react-redux'

import Table from './Table'
import Form from './Form'
import LastEntry from './LastEntry'
import {changeLastEntry} from "./lastEntrySlice"

class App extends Component {
    state = {
        characters: [],
    }

    removeCharacter = (index) => {
        const {characters} = this.state
      
        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }

    handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})

        this.props.dispatch(changeLastEntry({name: character.name, job: character.job}))
    }

    render() {
        const {characters} = this.state;

        return (
        <div className="container">
            <h1 style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                Job Table Application
            </h1>
            This application can do the following:
            <ul>
                <li>Allow you to enter your name and your job</li>
                <li>Submit your name and your job to the table</li>
                <li>Delete specific entries in the table</li>
                <li>Show the latest addition to the table</li>
            </ul>
            <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit} />
            <LastEntry />
        </div>
        )
    }
}

export default connect()(App)
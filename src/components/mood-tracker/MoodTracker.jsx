import { Component } from 'react'
import MoodPoints from '../mood-points/MoodPoints'
import MoodNote from '../mood-note/MoodNote'
// import placeHolderNotes from './placeHolderNotes.js'

export default class MoodTracker extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         points: 11
    //     }
    // }
    state = {
        points: 10,
        noteInput: '',
        noteData: []
    }

    //event handler
    handleIncreaseMood = () => {
        this.setState((prevState) => {
            return {
                points: prevState.points + 1
            }
        })
    }
    handleDecreaseMood = () => {
        this.setState((prevState) => {
            return {
                points: prevState.points - 1
            }
        })
    }
    handleInputChange = (e) => {
        this.setState({
            noteInput: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState((prevState) => {
            const newNoteData = {
                note: prevState.noteInput,
                date: new Date().toLocaleDateString(),
                points: prevState.points
            }
            return {
                // noteData: prevState.noteData.concat([newNoteData])
                noteData: [...prevState.noteData, newNoteData]
            }
        }, () => this.setState({noteInput: ''}))
    }
    render () {
        const noteComponents = this.state.noteData.map((placeHolderNote, index) => {
            return (
                <MoodNote 
                key={`note ${index}`}
                points={placeHolderNote.points}
                date={placeHolderNote.date}
                note={placeHolderNote.note}
                />
            )
        })
        return (
            <div>
                <MoodPoints points={this.state.points}/>
                <button onClick={this.handleIncreaseMood}>🎸</button>
                <button onClick={this.handleDecreaseMood}>🪨</button>
                <h3>My Notes:</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='note-input'>New Note: </label>
                    <input 
                        id='note-input'
                        type='text'
                        placeholder='how ya doin?'
                        onChange={this.handleInputChange}
                        value={this.state.noteInput}
                    />
                    <input 
                    type='submit'
                    value='Save Note'
                    />
                </form>
                {noteComponents}
            </div>
        )
    }
}
import { Component } from 'react'
import MoodPoints from '../mood-points/MoodPoints'

export default class MoodTracker extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         points: 11
    //     }
    // }
    state = {
        points: 10
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

    render () {
        return (
            <div>
                <MoodPoints points={this.state.points}/>
                <button onClick={this.handleIncreaseMood}>🎸</button>
                <button onClick={this.handleDecreaseMood}>🪨</button>
            </div>
        )
    }
}
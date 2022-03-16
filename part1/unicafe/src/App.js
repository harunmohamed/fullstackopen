import React, { useState } from "react";

// HEADER 
const Header = ({text}) => {
    return (
        <h1>{text}</h1>
    )
}

// BUTTON
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}> {text} </button>
    )
}

// SINGLE STATISTIC
const Statistic = ({text, value}) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

// STATISTICS
const Statistics = ({good, bad, neutral}) => {
    const all = good + bad + neutral;
    const average = (good - bad) / all;
    const positive = good / all * 100

    if (all > 0) {
        return (
            <table>
                <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='bad' value={bad} />
                <Statistic text='all' value={all} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive+'%'} />
                </tbody>
            </table>
        )
    } else {
        return <div>No feedback given</div>
    }
}


// APP
const App = () => {
    const [feedback, setFeedback] = useState({ good: 0, bad: 0, neutral: 0 })

    const handleGood = () => { setFeedback({...feedback, good: feedback.good + 1})}
    const handleBad = () => { setFeedback({...feedback, bad: feedback.bad + 1})}
    const handleNeutral = () => { setFeedback({...feedback, neutral: feedback.neutral + 1})}

    return (
        <>
            <Header text='Give Feedback' />

            <Button onClick={handleGood} text='good' />
            <Button onClick={handleNeutral} text='neutral' />
            <Button onClick={handleBad} text='bad' />

            <Header text='statistics' />
            <Statistics good={feedback.good} bad={feedback.bad} neutral={feedback.neutral} />
        </>
    )
}

export default App
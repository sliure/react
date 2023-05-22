import { useState } from "react";

const Mood = () => {
    const [message, setMood] = useState("How are you feeling today?");

    const ChangeSad = () => {
        setMood("Do not worry! It wil be all ok")
    }

    const ChangeNormal = () => {
        setMood("All good, I can feel that it will get better")
    }

    const ChangeHappy = () => {
        setMood("Wonderful! Keep going!")
    }

    return(
        <div>
            <h1>{message}</h1>
            <button onClick={ChangeSad}>I am feeling sad</button>
            <button onClick={ChangeNormal}>I am feeling ok</button>
            <button onClick={ChangeHappy}>I am happy</button>
        </div>
    )
}

export default Mood
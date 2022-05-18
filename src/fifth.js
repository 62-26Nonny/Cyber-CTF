import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Fifth() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === 'shift is too easy'){
            localStorage.setItem('shift is too easy', '100')
            navigate('/combination')
        }
    }

    return (
        <div>
            <span>Tips: <span className='off'>FGHJK -> MNOQR</span></span>

            <div>4wlmjx</div>
            <div>8qa</div>
            <div>3wrr</div>
            <div>2gcua</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
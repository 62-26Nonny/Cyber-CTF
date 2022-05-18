import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Fourth() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === 'base number'){
            localStorage.setItem('base number', '115')
            navigate('/slide')
        }
    }

    return (
        <div>
            <span>Tips: IO, 15 = F</span>

            <div>x = b: 1100010 | ??: 1100001 | s: 73 | ??: 65</div>
            <div>password = x + "number"</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
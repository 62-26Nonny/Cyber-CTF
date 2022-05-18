import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function First() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value.replace(/ /g, '')
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === '10001101101001111001011100111110100'){
            localStorage.setItem('10001101101001111001011100111110100', '79')
            navigate('/on/off')
        }
    }

    return (
        <div>
            <span>Tips: IO</span>

            <div>First</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
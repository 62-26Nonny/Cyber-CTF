import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Thir() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value.replace(/ /g, '')
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === 'hex'){
            localStorage.setItem('hex', '122')
            navigate('/decimal')
        }
    }

    return (
        <div>
            <span>Tips: 15 = F</span>

            <div>7768617420: "what"</div>
            <div>746865: "the"</div>
            <div>686578: ??</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
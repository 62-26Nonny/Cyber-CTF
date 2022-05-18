import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Seventh() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value.replace(/ /g, '')
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === '‌'){
            localStorage.setItem('‌', '102')
            navigate('/assky')
        }
    }

    return (
        <div>
            <span>Tips: Unicorn?</span>

            <div>This page is empty</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
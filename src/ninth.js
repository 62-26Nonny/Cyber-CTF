import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Ninth() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === 'true end'){
            localStorage.setItem('true end', '120')
            navigate('/END')
        }
    }

    return (
        <div>
            <span>Tips: IO, 15 = F, ABC<span className='off'>, FGHJK -> MNOQR</span></span>

            <div>!6c627961 1101011 1110101 1101100</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
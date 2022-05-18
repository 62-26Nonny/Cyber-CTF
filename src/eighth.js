import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Eighth() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value.replace(/ /g, '')
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === 'ASCII'){
            localStorage.setItem('ASCII', '103')
            navigate('/almost_there')
        }
    }

    return (
        <div>
            <span>Tips: ABC</span>

            <div>112 97 115 115 119 111 114 100</div>
            <div>105 115</div>
            <div>65 83 67 73 73</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Sixth() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value.replace(/ /g, '')
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === 'harder'){
            localStorage.setItem('harder', '109')
            navigate('/-')
        }
    }

    return (
        <div>
            <span>Tips: IO, 15 = F<span className='off'>, FGHJK -> MNOQR</span></span>

            <div>74686973207374616765 01101110 01100111 01111000 01101010 01101011 01111000</div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
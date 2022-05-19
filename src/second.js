import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

export default function Second() {
    const navigate = useNavigate()
    const [answerState, setAnswerState] = useState([])

    const handleChange = (e) => {
        setAnswerState({
            ...answerState,
            ['answer']: e.target.value.replace(/ /g, '')
            
        })
    }

    const handleSubmit = () => {
        if (answerState.answer === 'binary'){
            localStorage.setItem('binary', '97')
            navigate('/WTF')
        }
    }

    return (
        <div>
            <span>Tips: IO</span>
            <div>
                <span className='off'></span>
                <span className='on'>You are police now</span>
                <span className='on'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='on'></span>
                <span className='off'></span>
            </div>
            <div>
                <span className='off'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='off'></span>
                <span className='on'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='on'></span>
            </div>
            <div>
                <span className='off'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='off'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='off'></span>
            </div>
            <div>
                <span className='off'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='on'></span>
            </div>
            <div>
                <span className='off'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='on'></span>
                <span className='off'></span>
            </div>
            <div>
                <span className='off'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='on'></span>
                <span className='off'></span>
                <span className='off'></span>
                <span className='on'></span>
            </div>
            <input name='answer' type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
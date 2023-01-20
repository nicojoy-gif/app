import React, { useEffect, useState } from 'react';
import './quote.css';

function Quote() {
    const [Advice, setAdvice] = useState('')

    useEffect(() => {
fetchData()
    }, [])
    const fetchData = async () => {
        const res = await fetch("https://api.adviceslip.com/advice");
        const data = await res.json();
        const quote = data.slip.advice
        setAdvice(quote)
    } 

    return (
        <div className='container'>
            <div className='quote-box'>
                <div className='quote'>
                    <p>{Advice}</p>
                    <button onClick={fetchData}>Give me Advice</button>
                </div>
            </div>
        </div>
    )
}

export default Quote
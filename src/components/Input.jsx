import React, { useContext, useEffect } from 'react';
import { ChatContext } from '../context/context';
import { useRef } from 'react';
import useApi from '../hooks/useApi';

export const Input = () => {
    const { history, setHistory } = useContext(ChatContext)
    const { message, loading, error, callApi } = useApi()

    const ref = useRef()
    const handleClick = () => {
        // setHistory(prev => [...prev, { isUser: true, message: ref.current.value }])
        setHistory(prev => [...prev, { role: "user", parts: [{ text: ref.current.value }] }])


        callApi(`${ref.current.value}`)
        setTimeout(() => {
            ref.current.value = ''
        }, 1)
    }

    return (
        <>
            <div className='flex'>
                <input ref={ref} className='p-4 outline-0 border border-white resize-none text-white w-full' />
                <button onClick={handleClick} className='bg-white px-4'>SEND</button>
            </div>
        </>
    );
};
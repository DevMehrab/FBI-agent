import React, { useState } from 'react';
export const Message = ({ text, isUser }) => {
    return (
        <>
            <div className=''>
                <p className='text-white'>{isUser ? <b className='text-cyan-500'>You:</b> : <b className='text-red-700'>Agent:</b>} {text}</p>
            </div>

        </>
    )
}
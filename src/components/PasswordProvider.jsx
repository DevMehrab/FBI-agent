import React, { createContext, useReducer, useState } from 'react'
import data from '../data'
export const PasswordContext = createContext()

const initialState = {
    options: {
        uppercase: false,
        lowercase: false,
        numbers: false,
        special: false,
    },
    length: 12,
    password: ''
}
function reducer(state, { type, payload }) {
    switch (type) {
        case 'TOGGLE_OPTION':

            return {
                ...state,
                options: {
                    ...state.options,
                    [payload.option.toLowerCase()]: !state.options[payload.option.toLowerCase()]
                },

            }

            break;
        case 'CHANGE_LENGTH':
            return {
                ...state,
                length: payload
            }

            break;
        case 'GENERATE_PASSWORD':
            let optionsCount = 0
            let array = []

            for (const key in state.options) {
                if (state.options[key] === true) {
                    optionsCount++
                }
            }
            for (const key in state.options) {
                if (state.options[key] === true) {
                    for (let i = 0; i <= Math.floor(state.length / optionsCount); i++) {
                        let random = Math.floor(Math.random() * data[key].length)
                        array.push(data[key][random])

                    }
                }
            }

            function shuffleArray(array) {
                const shuffled = [...array];
                for (let i = shuffled.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
                }
                return shuffled;
            }
            if (optionsCount === 0) {
                return {
                    ...state,
                password: crypto.randomUUID().split('-').join('').slice(0,state.length)
                }
            }

            return {
                ...state,
                password: shuffleArray(array).join('').slice(0, state.length)
            }

            break;

        default:
            return {
                ...state
            }
            break;
    }
}
export const PasswordProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <PasswordContext.Provider value={{ state, dispatch }}>
            {children}
        </PasswordContext.Provider>
    )
}

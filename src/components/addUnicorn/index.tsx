'use client'

import { useReducer, useState } from "react";

const initalData = {
    name: '',
    colour: '',
    age: 0
}

const reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'name':
            return { ...state, name: action.payload }
        case 'colour':
            return { ...state, colour: action.payload }
        case 'age':
            return { ...state, age: action.payload }
        default:
            return
    }
}

const AddUnicorn = () => {
    // const [unicornName, setUnicorn] = useState('')
    const [state, dispatch] = useReducer(reducer, initalData)
    const addUnicorn = async () => {
        if (!state.age || !state.name || !state.colour) {
            alert('Please fill out all fields')
            return
        }
        await fetch('https://crudcrud.com/api/45c0337034d64f5fa97a7f6a28d2491c/unicorns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ names: state.name, colour: state.colour, age: state.age })
        })
    }

    return (
        <div className="flex flex-col">
            <input
                className=" mb-2"
                onChange={(e: any) => {
                    dispatch({ type: 'name', payload: e.target.value })
                }}
                placeholder="Name of animal" />
            <input
                className=" mb-2"
                onChange={(e: any) => {
                    dispatch({ type: 'colour', payload: e.target.value })
                }}
                placeholder="Colour of animal" />
            <input
                className=" mb-2"
                onChange={(e: any) => {
                    dispatch({ type: 'age', payload: e.target.value })
                }} placeholder="Age of animal" />
            <button type='button' className=" border border-red-50 text-white"  onClick={addUnicorn} >Add Unicorn</button>
        </div>
    );
}

export default AddUnicorn;
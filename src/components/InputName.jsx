import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';

const inputName = () => {

    const [inputValue,SetInputValue] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clickButton = () => {
        dispatch(changeUserName(inputValue))
        navigate('/pokedex')
    }

    return (
        <div>
            <h1>Input name</h1>
            <input type="text" 
            value = {inputValue}
            onChange ={e => SetInputValue(e.target.value)}
            />
            <button onClick={clickButton}>Submit</button>
        </div>
    );
};

export default inputName;
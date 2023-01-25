import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeUserName } from '../store/slices/userName.slice';
import Pikachu from '../assets/img/Pikachu.jpg'

const inputName = () => {

    const [inputValue, SetInputValue] = useState("")

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const clickButton = () => {
        dispatch(changeUserName(inputValue))
        navigate('/pokedex')
    }

    return (
        <div>
            <h1>Hello trainer!</h1>
            <div className='input-container'>
                <img className='img-input' src={Pikachu} alt="" />
                <div className='trainer-imput'>
                    <input type="text"
                    placeholder='Give me your name to start'
                        value={inputValue}
                        onChange={e => SetInputValue(e.target.value)}
                    />
                    <button className='input-btn' onClick={clickButton}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default inputName;
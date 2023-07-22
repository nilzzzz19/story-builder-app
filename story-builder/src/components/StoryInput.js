import React, { useState } from 'react';
import './StoryInput.css';

function StoryInput({ onStoryStart }) {
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        onStoryStart(input);
        setInput('');
    };

    return (
        <div>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleSubmit}>Start Story</button>
        </div>
    );
}

export default StoryInput;

//In this component, useState is a hook that lets you add React state to function components.
 //We're using it to keep track of the input field's value.

//The onStoryStart function is passed in as a prop and is called when the user submits their story start.
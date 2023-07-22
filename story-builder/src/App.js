import React, { useState } from 'react';
import './App.css';
import StoryInput from './components/StoryInput';
import StoryDisplay from './components/StoryDisplay';
import Navbar from './components/Navbar';

function App() {
    const [story, setStory] = useState('');

    const handleStoryStart = (storyStart) => {
        setStory(storyStart + ' and they lived happily ever after.');
    };

    return (
        <div>
          <Navbar />
            <StoryInput onStoryStart={handleStoryStart} />
            <StoryDisplay story={story} />
        </div>
    );
}

export default App;

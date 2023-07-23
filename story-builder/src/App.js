import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import StoryInput from './components/StoryInput';
import StoryDisplay from './components/StoryDisplay';
import Navbar from './components/Navbar';

function App() {
  const [story, setStory] = useState('');

  const handleStoryStart = async (storyStart) => {
    try {
      const res = await axios.post('http://localhost:5000/api/generate-text', { prompt: storyStart });
      setStory(res.data);
      //console.log(res?.data);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(story);
  
  return (
    <div>
      <Navbar />
      <StoryInput onStoryStart={handleStoryStart} />
      <StoryDisplay story={story} />
    </div>
  );
}

export default App;

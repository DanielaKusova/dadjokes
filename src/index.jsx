import React from 'react';
import { render } from 'react-dom';
import { ProgressPlugin } from 'webpack';
import './index.html';
import Joke from './Joke';

const App = () => {
  return (
    <>
    {jokes.map((joke)=> (
      <Joke
        userId={joke.id}
        userName={joke.name}
        text={joke.text}
        likes={joke.likes}
        dislikes= {joke.dislikes}
      />
    </>
  );
};

render(<App />, document.getElementById('app'));

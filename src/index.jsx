import React from 'react';
import { render } from 'react-dom';
import './index.html';
import Joke from './Joke';
import { jokes } from './jokes.js';
import './style.css';

const App = () => {
  return (
    <>
      {jokes.map((joke) => (
        <Joke
          userId={joke.id}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
      ;
    </>
  );
};

render(<App />, document.getElementById('app'));

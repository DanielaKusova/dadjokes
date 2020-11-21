import React, { useState } from 'react';
import './style.css';

const Joke = (props) => {
  const [liked, setLiked] = useState('');
  const [disliked, setDisliked] = useState('');

  return (
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={`assets/img/${props.userId}.png`}/>
          <p class="user-name">{props.userName}</p>
        </div>

        <p class="joke__text">{props.text}</p>
      </div>
      <div class="joke__likes">
        <button
          onClick={() => setLiked(liked + 1)}
          id="btn-up"
          class="btn-like btn-like--up"
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {props.likes}
        </span>
        <button
          onClick={() => setDisliked(disliked + 1)}
          id="btn-down"
          class="btn-like btn-like--down"
        ></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {props.dislikes}
        </span>
      </div>
    </div>
  );
};

export default Joke;

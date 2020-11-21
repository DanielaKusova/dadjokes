import React, { useState } from 'react';
import './style.css';

const Joke = (props) => {
  const [liked, setLiked] = useState(props.likes);
  const [disliked, setDisliked] = useState(props.dislikes);

  const lajky = props.likes + liked;
  const dislajky = props.dislikes + disliked;

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={`assets/img/${props.userId}.png`} />
          <p className="user-name">{props.userName}</p>
        </div>

        <p className="joke__text">{props.text}</p>
      </div>
      <div className="joke__likes">
        <button
          onClick={() => setLiked(liked + 1)}
          id="btn-up"
          className="btn-like btn-like--up"
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {lajky}
        </span>
        <button
          onClick={() => setDisliked(disliked + 1)}
          id="btn-down"
          className="btn-like btn-like--down"
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislajky}
        </span>
      </div>
    </div>
  );
};

export default Joke;

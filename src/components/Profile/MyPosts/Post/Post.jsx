import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
    return (
        <div className={s.item}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Dwayne_Johnson_2%2C_2013.jpg/279px-Dwayne_Johnson_2%2C_2013.jpg' alt=''/>
          { props.message }
            <div>
          <span>like</span> { props.likesCount }
        </div>
      </div>
    );
};

export default Post;
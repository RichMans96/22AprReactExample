import React from 'react';

const Post = ({ id, title, body }) => {
  return (
    <div id={id} className='card'>
      <div className='card-header'>
        <div className='card-header-title'>
          <p>{title}</p>
        </div>
      </div>
      <div className='card-content'>
        <div className='content'>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;

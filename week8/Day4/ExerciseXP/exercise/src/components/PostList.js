import React from 'react';
import data from '../data/data.json';

function PostList() {
    return (
      <div>
        {data.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    );
  }
  

export default PostList
import React from 'react';

const Author = ({ author }) => (
  <div className="author">
    <div className="author-name">{author.name}</div>
    <div className="author-bio">{author.bio}</div>
    <br/>
  </div>
);

export default Author;
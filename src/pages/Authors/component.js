import React from 'react';

import Author from '../../components/Author';

const Authors = ({ authors }) => (
  <div className="authors">
    <h3>Authors</h3>

    <div className="authors-list">
      {authors.map((author) => {
        return <Author key={author.id} author={author} />
      })}
    </div>
  </div>
);

export default Authors;
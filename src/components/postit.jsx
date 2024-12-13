import React from 'react';

function PostIt({ task, onDelete }) {
  return (
    <div className="post-it">
      <p>{task}</p>
      <button onClick={onDelete}>Excluir</button>
    </div>
  );
}

export default PostIt;
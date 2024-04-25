import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './App.css';

const SearchResult = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_RESULT', payload: id }); // Dispatch action to remove the search result with given id
  };

  return (
    <div>
      {state.stories.length > 0 && (
    <div className='search-result'>
    <ul>
    {state.stories.map(story => (
      <li key={story.objectID} className='search-item'>
      <div className="search-info">
      <div>{story.title}</div>
        <div><b>Author:</b> {story.author}</div>
        <div><b>Comments:</b> {story.num_comments}</div>
      </div>
        
        <button className="remove-button" onClick={() => handleRemove(story.objectID)}>Remove</button>
      </li>
    ))}
  </ul>
    </div>
  )}
  </div>
);
};

export default SearchResult;


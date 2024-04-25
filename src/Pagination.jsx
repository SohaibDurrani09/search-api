import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './App.css';

const Pagination = () => {
  const { state, dispatch } = useContext(AppContext);

  const handlePreviousPage = () => {
    if (state.page > 0) {
      dispatch({ type: 'SET_PAGE', payload: state.page - 1 });
    }
  };

  const handleNextPage = () => {
    dispatch({ type: 'SET_PAGE', payload: state.page + 1 });
  };

  return (
    <div className='pagination'>
      <button onClick={handlePreviousPage}>Previous</button>
      <span>Page {state.page + 1}</span>
      <button onClick={handleNextPage}>Next</button>
    </div>
  );
};

export default Pagination;

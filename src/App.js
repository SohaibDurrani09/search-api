import React, { useEffect, useContext } from 'react';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import Pagination from './Pagination';
import { AppContext } from './AppContext';
import { fetchStories } from './api';
import './App.css';


const App = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      if (state.query !== '') {
        const data = await fetchStories(state.query, state.page);
        dispatch({ type: 'SET_STORIES', payload: data.hits });
      }
    };

    fetchData();
  }, [state.query, state.page, dispatch]);

  return (
    <div>
      <h1>Hacker News Search</h1>
      <SearchBar />
      <SearchResult />
      <Pagination />
    </div>
  );
};

export default App;

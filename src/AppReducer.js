export const appReducer = (state, action) => {
    switch (action.type) {
      case 'SET_QUERY':
        return { ...state, query: action.payload };
      case 'SET_PAGE':
        return { ...state, page: action.payload };
      case 'SET_STORIES':
        return { ...state, stories: action.payload };
      case 'REMOVE_RESULT':
        return {
          ...state,
          stories: state.stories.filter(story => story.objectID !== action.payload)
        };
      default:
        return state;
    }
  };
 
  
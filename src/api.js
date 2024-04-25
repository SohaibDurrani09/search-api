const BASE_URL = 'https://hn.algolia.com/api/v1';

export const fetchStories = async (query, page) => {
  const url = `${BASE_URL}/search?query=${query}&page=${page}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

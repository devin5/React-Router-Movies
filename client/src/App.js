import React, { useState } from 'react';
import { Route } from 'react-router-dom';  
import SavedList from './Movies/SavedList';
import MovieList from  './Movies/MovieList';
import Movie from './Movies/Movie';
const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div className="flex">
      <Route exact path='/' component={MovieList} />
      </div>
      <Route path = '/Movies/:id' component={Movie} />
    </div>
  );
};

export default App;

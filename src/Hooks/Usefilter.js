import React, { useState } from "react";

const useFilter = (initialState = { title: "" }) => {
  const [filter, setFilter] = useState(initialState);

  const updateFilter = (newFilter) => {
    setFilter({ ...filter, ...newFilter });
  };

  const applyFilter = (Movies) => {
    return Movies.filter((movie) => {
      return (
        movie.title.toLowerCase().includes(filter.title.toLowerCase()) 
        
      );
    });
  };

  return { filter, updateFilter, applyFilter };
};

export default useFilter;

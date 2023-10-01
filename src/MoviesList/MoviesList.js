import { useState } from "react";
import { Movies } from "../Data/Movies";
import Moviecard from "../Component/Moviecard";
import useFilter from "../Hooks/Usefilter";


function MovieList (){
const [Films,setFilms] =useState(Movies);
const {filter,applyFilter,updateFilter}=useFilter()
return (
<>
<input
className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
placeholder="Search by tilte"
name="title"
onChange={event => updateFilter({title:event.target.value})}
/>
 
<div class="grid grid-cols-4 gap-4">
{applyFilter(Films).map((film,index)=>(
<Moviecard
key={index}
title={film.title}
description={film.description}
photo={film.photo}
/>
))}
  </div>
</>
)
}
export default MovieList

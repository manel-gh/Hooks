import MovieCard from './Card'

function MovieList ({movies,search,rating}){


    return (
        <div >
          

          {movies.filter(el=>  el.title.toUpperCase().includes(search.toUpperCase())
            && el.rate>=rating   ).map((el,i)=> <MovieCard movie={el}  />   )}
  
        </div>
    )
}
export default MovieList;
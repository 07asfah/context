import React from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../data/MovieData.jsx';

function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === id);

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-900 via-blue-900 to-purple-900 text-white p-8">
        <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 rounded-xl shadow-lg border border-white/20 p-8">
          <h2 className="text-2xl font-bold mb-4">Movie not found</h2>
          <Link to="/" className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-4xl mx-auto p-6">
      
        <Link to="/" className="inline-flex items-center px-4 py-2 mb-6 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-colors">
          ← Back to Movies
        </Link>
        
        <div className="backdrop-blur-md bg-white/10 rounded-xl shadow-lg border border-white/20 overflow-hidden">
          <div className="relative">
            <div className="h-64 md:h-96 overflow-hidden">
              <img 
                src={movie.poster} 
                alt={`${movie.title} poster`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-0 w-full p-6">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{movie.title}</h1>
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genre.map((genre, index) => (
                  <span key={index} className="px-3 py-1 rounded-full text-sm bg-purple-900/70 text-purple-200 capitalize">
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-purple-200">About this movie</h2>
              <p className="text-white/80">
                Comprising an ensemble cast, the series follows the lives of an African American crime family, led by budding drug dealer Franklin Saint (portrayed by Damson Idris), as they navigate ways to make money selling crack cocaine during the 1980s crack epidemic in South Central Los Angeles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

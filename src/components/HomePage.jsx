import React, { useState } from "react";
import { Link } from "react-router-dom";
import movies from "../data/MovieData.jsx";


function HomePage() {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-blue-900 to-purple-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Movie App</h1>
        <input
          type="text"
          placeholder="Search for a movie..."
          className="border border-white/20 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 mb-6 w-full text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul className="space-y-3">
          {filteredMovies.map((movie) => (
            <li key={movie.id} className="rounded-lg overflow-hidden shadow-lg backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition duration-300">
              <Link to={`/movie/${movie.id}`} className="block p-4 text-white hover:text-purple-200 transition-colors">
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
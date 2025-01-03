import { getMovies } from "../libs/apis/server";

export default async function DashboardPage() {
  // 1. Add shadcn card
  // 2. Create movie Get EndPoint
  // 3. Read the dummy response
  // 4. Reader data set in  the UI

  const { movies } = await getMovies();
  console.log("MOVIES::", movies);

  return (
    <main>
      {/*navigation bar*/}
      <nav className="bg-blue-300 w-full h-16 flex justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl">Mflix Dashboard</h1>
        </div>
      </nav>
      {/*body section */}
      <div className="container m-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {/*<div className="h-96 bg-green-400 ">Div 1</div>
          <div className="h-96 bg-yellow-400 ">Div 2</div>
          <div className="h-96 bg-blue-400 ">Div 3</div>
          <div className="h-96 bg-orange-400 ">Div 4</div>
          <div className="h-96 bg-red-400 ">Div 5</div>
          <div className="h-96 bg-purple-400 ">Div 6</div>
          <div className="h-96 bg-lime-400 ">Div 7</div>
          <div className="h-96 bg-cyan-400 ">Div 8</div>*/}

          {movies?.length &&
            movies.map((movie) => (
              <div key={movie.id} className="h-96 bg-green-400 ">
                {movie?.Title}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

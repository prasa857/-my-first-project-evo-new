import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getMovies } from "../libs/apis/server";

export default async function DashboardPage() {
  // 1. Add shadcn card
  // 2. Create movie Get EndPoint
  // 3. Read the dummy response
  // 4. Reader data set in  the UI

  const moviesQuery = await getMovies();
  console.log("MOVIES from front end ::", moviesQuery);

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
          {moviesQuery?.length &&
            moviesQuery.map((movie) => (
              <div key={movie._id} className="h-96 ">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>{movie?.title}</CardTitle>
                    //<CardDescription className="sr-only">{movie?.title}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="flex justify-center bg-black  w-full h-[276px] mb-4 rounded">
                      <Image
                        src={movie?.poster} // Use movie poster Url
                        alt={movie?.title} // Use movie title for alt text
                        width={200} // Image width
                        height={400}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between"></CardFooter>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}

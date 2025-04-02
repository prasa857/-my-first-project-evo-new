"use client";

import { useState } from "react"; // Make sure to import useState
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/multi-select";
import { GENRES } from "@/lib/constants";

export default function AddMovieForm() {
  // Initialize genres state
  const [genres, setGenres] = useState([]);

  // Map GENRES to the format expected by MultiSelect
  const genresList = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  return (
    <Card className="max-w-2xl max-auto">
      <CardHeader>
        <CardTitle>Add Movie</CardTitle>
        <CardDescription>Add a movie to the Mflix database.</CardDescription>
      </CardHeader>
      <form>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Movie Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter the Movie title"
            />
          </div>

          <div>
            <Label htmlFor="year">Movie Year</Label>
            <Input
              id="year"
              name="year"
              type="number"
              placeholder="Enter the year"
            />
          </div>

          <div>
            <Label htmlFor="plot">Movie plot</Label>
            <Textarea
              id="plot"
              name="plot"
              placeholder="Enter the Movie plot"
            />
          </div>

          <div>
            <Label htmlFor="genres">Movie Genres</Label>
            <MultiSelect
              list={genresList}
              placeholder="Select movie genres"
              selectedItems={genres}
              onValueChange={setGenres}
            />
          </div>
        </CardContent>
      </form>
    </Card>
  );
}

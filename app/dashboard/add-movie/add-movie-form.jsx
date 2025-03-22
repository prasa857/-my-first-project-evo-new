"use client";

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

export default function AddMovieForm() {
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
            <input
              id="title"
              name="title"
              placeholder="Enter the Movie title"
            />
          </div>

          <div>
            <Label htmlFor="year">Movie Year</Label>
            <input
              id="year"
              name="year"
              type="number"
              placeholder="Enter the year"
            />
          </div>

          <div>
            <Label htmlForm="plot">Movie plot</Label>
            <Textarea
              id="plot"
              name="plot"
              placeholder="Enter the Movie plot"
            />
          </div>
        </CardContent>
      </form>
    </Card>
  );
}

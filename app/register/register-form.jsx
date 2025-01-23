"use client";
//keep this as the client component  (funtional component)
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function RegisterForm() {
  const handleSubmitForm = async (event) => {
    event.preventDefault();

    console.log("Submitted");
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90  w-[350px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter Your Information To Get Start</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent>
            {" "}
            <div className="flex flex-col space y-1.5 ">
              <div className="flex flex-col space-1.5 ">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name " placeholder="john Doe" />
              </div>
              <div className="flex flex-col space-1.5 ">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="john@example.com" />
              </div>
              <div className="flex flex-col space-1.5 ">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                />
              </div>
              <div className="flex flex-col space-1.5 ">
                <Label htmlFor="comfirm password">Comfirm Password</Label>
                <Input
                  id="comfirm password"
                  name="comfirm password"
                  placeholder="Enter comfirm password"
                />
              </div>
              <div className="flex justify-center gap-2 text-xm">
                Already as anaccont?
                <Link href="/login" className="text-blue-600 hover:underline">
                  Login
                </Link>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="flex-1" type="submit">
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

import Loginform from "./login-form";

//Server companent for SSR

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-black ">
      <Loginform title="Sign in to EvoTech" />
    </div>
  );
}

import { api } from "../api";

export const loginUser = async (loginData) => {
  //console.log(loginData);
  const response = await fetch("http://localhost:3000/api/v1/login", {
    method: "POST",
    body: json.stringify({
      email: loginData?.email,
      password: loginData?.password,
    }),
  });

  console.log("LOGIN ACTION", response.json());
};

export const getMovies = async () => {
  try {
    const response = await api.get("movies");

    return response;
  } catch (error) {
    if (error) {
      // handle  http errors specifically
      const status = error?.response?.status; //HTTP status code (e.g.,404, 500)
      const responseBody = await error?.response?.json(); //press the respones body if possible

      //console.log("HTTP Error:",status,responseBody);
    } else {
      //Handle non-http error(e.g.Network issue)
      console.log("Unknow error:", error);
    }
    return undefined;
  }
};

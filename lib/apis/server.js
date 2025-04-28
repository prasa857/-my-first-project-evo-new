import { api } from "@/lib/api";

export const getMovies = async () => {
  try {
    const response = await api.get("v1/movies", { cache: "no-store" });

    if (response.ok) {
      return response.json();
    } else {
      console.log("error");
    }
  } catch (error) {
    if (error) {
      console.log(error);
    } else {
      console.log("Unknown error", error);
    }
    return undefined;
  }
};

// import { api } from "@/lib/api";

// export const getMovies = async () => {
//   try {
//     const response = await api.get("v1/movies", { cache: "no-store" });

//     if (response.ok) {
//       return response.json();
//     } else {
//       console.log("error");
//     }
//   } catch (error) {
//     if (error?.response) {
//       const { status } = error.response;
//       const responseBody = await error?.response?.json();
//       if (status === 401) {
//         console.log("Unauthorized, check your credentials");
//       } else if (status === 500) {
//         console.log("Server error, please try again later.");
//       } else if (status === 404) {
//         console.log(status, responseBody.message);
//       }
//     } else {
//       console.log("Unknown error", error);
//     }
//     return undefined;
//   }
// };

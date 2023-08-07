import Config from "../../config.js";

export default async function getPopularMovies(page = 1) {
  try {
    const request = await fetch(
      `${Config.BASE_URL}/movie/popular?language=en-US&page=${page}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyMGFlNDg1NDY3NDVkMmM5YmMzMzFhZWVlOTc1MSIsInN1YiI6IjY0YmUyM2IwMGVkMmFiMDEzOGY5MTc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrsZNttCB7jIOZxzkqXeWwyQPOet1AuqkZ5BzY-Ytfo",
        },
      }
    );
    let response = await  request.json();
    return await response.results;
  } catch (error) {
    console.log(error);
  }
}

import Config from "../../config.js";

export async function getPopularMovies(page = 1) {
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
    let response = await request.json();
    return await response.results;
  } catch (error) {
    console.log(error);
  }
}

export async function sortMovies(sortType) {
  try {
    const request = await fetch(
      `${Config.BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=${sortType}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyMGFlNDg1NDY3NDVkMmM5YmMzMzFhZWVlOTc1MSIsInN1YiI6IjY0YmUyM2IwMGVkMmFiMDEzOGY5MTc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrsZNttCB7jIOZxzkqXeWwyQPOet1AuqkZ5BzY-Ytfo",
        },
      }
    );

    let response = await request.json();
    return await response.results;
  } catch (error) {
    console.log(error);
  }
}

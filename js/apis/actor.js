import Config from "../../config.js";

export async function getPopularMovies(id) {
    try {
      const request = await fetch(
        `${Config.BASE_URL}/person/${id}?language=en-US`,
        {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyMGFlNDg1NDY3NDVkMmM5YmMzMzFhZWVlOTc1MSIsInN1YiI6IjY0YmUyM2IwMGVkMmFiMDEzOGY5MTc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrsZNttCB7jIOZxzkqXeWwyQPOet1AuqkZ5BzY-Ytfo'
        },
        }
      );
      let response = await request.json();
      return await response.results;
    } catch (error) {
      console.log(error);
    }
  }
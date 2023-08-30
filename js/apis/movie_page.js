import Config from "../../config.js";
export async function getMovie(id) {
    try {
      const request = await fetch(
        `${Config.BASE_URL}/movie/${id}?language=en-US`,
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
     
      return await response;
    } catch (error) {
      console.log(error , hello);
    }
}
export async function Credits(id){
  try {
    const request = await fetch(
      `${Config.BASE_URL}/movie/${id}/credits?language=en-US`,
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
   
    return await response;
  } catch (error) {
    console.log(error);
  }
}

export async function Recomendations(id){
  try {
    const request = await fetch(
      `${Config.BASE_URL}/movie/${id}/recommendations?language=en-US&page=1`,
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
   
    return await response;
  } catch (error) {
    console.log(error);
  }
}
export async function Keywords(id){
  try {
    const request = await fetch(
      `${Config.BASE_URL}/movie/${id}/keywords`,
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
   
    return await response;
  } catch (error) {
    console.log(error);
  }
}

export async function category(id,type,why) {
  try {
    const request = await fetch(
      `${Config.BASE_URL}/account/20195959/favorite`,
      {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyMGFlNDg1NDY3NDVkMmM5YmMzMzFhZWVlOTc1MSIsInN1YiI6IjY0YmUyM2IwMGVkMmFiMDEzOGY5MTc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrsZNttCB7jIOZxzkqXeWwyQPOet1AuqkZ5BzY-Ytfo'
        },
        body: JSON.stringify({media_type: type, media_id: id, favorite:why })
      }
    );
    let response = await  request.json();
   
    return await response;
  } catch (error) {
    console.log(error);
  }
}
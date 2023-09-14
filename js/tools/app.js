const body = document.querySelector("body")
const plus_btn = document.querySelector(".navbar_item")
const plus_box_text = document.querySelector(".plus_box_text")

body.addEventListener("click", (e)=> {
    e.stopPropagation();
    plus_box_text.classList.remove("plus_box_text_open")
})

// search btn
const search_btn = document.querySelector(".navbar_search")
const search_text_box = document.querySelector(".search_text_box")
const search_input = document.querySelector(".search_input")

search_btn.addEventListener("click", (e)=> {
    search_text_box.classList.toggle("search_open")
    search_input.value = ""
})


// plus btn
plus_btn.addEventListener("click", (e)=> {
    e.stopPropagation();
    plus_box_text.classList.add("plus_box_text_open")
})

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTEyMGFlNDg1NDY3NDVkMmM5YmMzMzFhZWVlOTc1MSIsInN1YiI6IjY0YmUyM2IwMGVkMmFiMDEzOGY5MTc2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BrsZNttCB7jIOZxzkqXeWwyQPOet1AuqkZ5BzY-Ytfo'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/changes?page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
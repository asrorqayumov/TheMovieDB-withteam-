

   
let tools = document.querySelectorAll(".functions")
let text = document.querySelectorAll(".content__text")
let poster = document.querySelectorAll(".content__poster")
let icon = document.querySelectorAll(".icon")
let arr_icon = Array.from(icon)
let percent = document.querySelectorAll(".circle-progressbar")
for (const i in arr_icon ) {
    arr_icon[i].addEventListener("click",()=>{  
        console.log(true);
        tools[i].classList.toggle("on")
        text[i].classList.toggle("tools_on")
        poster[i].classList.toggle("tools_on")
        percent[i].classList.toggle("tools_on")
    })
}






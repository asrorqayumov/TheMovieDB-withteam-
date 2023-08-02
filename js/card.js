
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

let tool = document.querySelectorAll(".function")
let add_list = document.querySelectorAll(".fa-list")
let heart = document.querySelectorAll(".fa-heart")
let bookmark = document.querySelectorAll(".fa-bookmark")
let rate =  document.querySelectorAll(".fa-star")
let arr_tool = Array.from(tool)

function unic (a){
    let arr_a = Array.from(a)
    for ( let i of arr_a){
      return i   
    }
}
unic(heart)

for (const i in arr_tool) {
    arr_tool[i].addEventListener("click",()=>{
        let child1 = arr_tool[i].children[0]
        let child2 = child1.children[0]
        let zb_arr  = Array.from(heart)
        for (const i in zb_arr) {
            switch (child2) {
                case add_list[i]:
                console.log("list");
                break;
                case heart[i]:
                    child2.classList.toggle("red")
                break;
                case bookmark[i]:
                    child2.classList.toggle("red")
                break;
                case rate[i]:
                    console.log("star");
                break;
                default:
                break;
            }
        }
        
    })
}




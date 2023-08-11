

document.addEventListener("DOMContentLoaded",()=>{
    let p1 = document.querySelector(".click")
    let p2 = document.querySelector(".no__click")
    let tab__btn = document.querySelector(".switch")
    let list1 = document.querySelector(".selected")
    let list2 = document.querySelector(".not__selected")

   
})


if (p1 == null || p2 == null) {
        
}
else{
    p1.addEventListener("click" , ()=>{
        tab__btn.classList.remove("active")
        p1.classList.add("click")
        p1.classList.remove("no__click")
        p2.classList.add("np__click")
        p2.classList.remove("click")
        list1.classList.add("selected")
        list1.classList.remove("not__selected")
        list2.classList.add("not__selected")
        list2.classList.remove("selected")
        base.p1 = true
        base.tab = false
        base.list1 = true
        base.list2 = false
        base.p2 = false
        localStorage.setItem("base", JSON.stringify(base))
        
    })
    p2.addEventListener("click" , ()=>{
        tab__btn.classList.add("active")
        p1.classList.remove("click")
        p1.classList.add("no__click")
        p2.classList.remove("np__click")
        p2.classList.add("click")
        list1.classList.remove("selected")
        list1.classList.add("not__selected")
        list2.classList.remove("not__selected")
        list2.classList.add("selected")
        base.p1 = false
        base.tab = true
        base.list1 = false
        base.list2 = true
        base.p2 = true
        localStorage.setItem("base", JSON.stringify(base))
    })
}
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

let p1 = document.querySelectorAll(".click")
let p2 = document.querySelectorAll(".no__click")
let tab__btn = document.querySelectorAll(".switch")
let list1 = document.querySelectorAll(".selected")
let list2 = document.querySelectorAll(".not__selected")
let index = 0;
let index1=1;

// let base = {
//     p1 :true,
//     p2:false,
//     list1:true,
//     list2:false,
//     tab:false
// }
// document.addEventListener("DOMContentLoaded",()=>{
//     let key =JSON.parse( localStorage.getItem("base"))
//     if(key.p1 == true){
//         p1.classList.add("click")
//         p1.classList.remove("no__click")
//     }
//     else{
//         p1.classList.remove("click")
//         p1.classList.add("no__click")
//     }
//     if(key.p2 == true){
//         p2.classList.remove("np__click")
//         p2.classList.add("click")
//     }
//     else{
//         p2.classList.add("np__click")
//         p2.classList.remove("click")
//     }
//     if (key.list1 == true){
//         list1.classList.add("selected")
//         list1.classList.remove("not__selected")
//         list2.classList.add("not__selected")
//         list2.classList.remove("selected")
//     }
//     else{
//         list1.classList.remove("selected")
//         list1.classList.add("not__selected")
//         list2.classList.remove("not__selected")
//     }
//     if(key.tab == true){
//         tab__btn.classList.add("active")
//         console.log(base.tab);
//     }
//     else{
//         tab__btn.classList.remove("active")

//     }
// })
p1[index].addEventListener("click" , ()=>{
    tab__btn[index].classList.remove("active")
    p1[index].classList.add("click")
    p1[index].classList.remove("no__click")
    p2[index].classList.add("np__click")
    p2[index].classList.remove("click")
    list1[index].classList.add("selected")
    list1[index].classList.remove("not__selected")
    list2[index].classList.add("not__selected")
    list2[index].classList.remove("selected")
    

})
p2[index].addEventListener("click" , ()=>{
    tab__btn[index].classList.add("active")
    p1[index].classList.remove("click")
    p1[index].classList.add("no__click")
    p2[index].classList.remove("np__click")
    p2[index].classList.add("click")
    list1[index].classList.remove("selected")
    list1[index].classList.add("not__selected")
    list2[index].classList.remove("not__selected")
    list2[index].classList.add("selected")
   
})
p1[index1].addEventListener("click" , ()=>{
    tab__btn[index1].classList.remove("active")
    p1[index1].classList.add("click")
    p1[index1].classList.remove("no__click")
    p2[index1].classList.add("np__click")
    p2[index1].classList.remove("click")
    list1[index1].classList.add("selected")
    list1[index1].classList.remove("not__selected")
    list2[index1].classList.add("not__selected")
    list2[index1].classList.remove("selected")
    

})
p2[index1].addEventListener("click" , ()=>{
    tab__btn[index1].classList.add("active")
    p1[index1].classList.remove("click")
    p1[index1].classList.add("no__click")
    p2[index1].classList.remove("np__click")
    p2[index1].classList.add("click")
    list1[index1].classList.remove("selected")
    list1[index1].classList.add("not__selected")
    list2[index1].classList.remove("not__selected")
    list2[index1].classList.add("selected")
   
})
setTimeout(()=>{
    let tools = document.querySelectorAll(".functions")
    let text = document.querySelectorAll(".content__text")
    let poster = document.querySelectorAll(".content__poster")
    let icon = document.querySelectorAll(".icon")
    let arr_icon = Array.from(icon)
    console.log(arr_icon);
    let percent = document.querySelectorAll(".circle-progressbar")
    for (const i in arr_icon ) {
        console.log(arr_icon[i]);
        arr_icon[i].addEventListener("click",()=>{
            console.log(arr_icon[i]);
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
unic(heart)

for (const i in arr_tool) {
    arr_tool[i].addEventListener("click",()=>{
        let child1 = arr_tool[i].children[0]
        let child2 = child1.children[0]
        console.log(true);
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


// let base = {
//     p1 :true,
//     p2:false,
//     list1:true,
//     list2:false,
//     tab:false
// }
// document.addEventListener("DOMContentLoaded",()=>{
//     let key =JSON.parse( localStorage.getItem("base"))
//     if(key.p1 == true){
//         p1.classList.add("click")
//         p1.classList.remove("no__click")
//     }
//     else{
//         p1.classList.remove("click")
//         p1.classList.add("no__click")
//     }
//     if(key.p2 == true){
//         p2.classList.remove("np__click")
//         p2.classList.add("click")
//     }
//     else{
//         p2.classList.add("np__click")
//         p2.classList.remove("click")
//     }
//     if (key.list1 == true){
//         list1.classList.add("selected")
//         list1.classList.remove("not__selected")
//         list2.classList.add("not__selected")
//         list2.classList.remove("selected")
//     }
//     else{
//         list1.classList.remove("selected")
//         list1.classList.add("not__selected")
//         list2.classList.remove("not__selected")
//     }
//     if(key.tab == true){
//         tab__btn.classList.add("active")
//         console.log(base.tab);
//     }
//     else{
//         tab__btn.classList.remove("active")

//     }
// })



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
    
    
},1000)



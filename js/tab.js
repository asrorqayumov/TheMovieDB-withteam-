let p1 = document.querySelectorAll(".click")
let p2 = document.querySelectorAll(".no__click")
let tab__btn = document.querySelectorAll(".switch")
let list1 = document.querySelectorAll(".selected")
let list2 = document.querySelectorAll(".not__selected")
let index =0;
let index1 = 1;

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

let p1_click = document.querySelectorAll(".click2")
let p2_click = document.querySelectorAll(".no__click2")
let tab__btn_click = document.querySelectorAll(".switch2")
let list1_click = document.querySelectorAll(".selected2")
let list2_click = document.querySelectorAll(".not__selected2")
let index_click =0;
let index1_click = 1;

p1_click[index].addEventListener("click" , ()=>{
    tab__btn[index].classList.remove("active2")
    p1_click[index].classList.add("click2")
    p1_click[index].classList.remove("no__click2")
    p2_click[index].classList.add("np__click2")
    p2_click[index].classList.remove("click2")
    list1_click[index].classList.add("selected2")
    list1_click[index].classList.remove("not__selected2")
    list2_click[index].classList.add("not__selected2")
    list2_click[index].classList.remove("selected2")
    

})
p2_click[index].addEventListener("click" , ()=>{
    tab__btn[index].classList.add("active2")
    p1_click[index].classList.remove("click2")
    p1_click[index].classList.add("no__click2")
    p2_click[index].classList.remove("np__click2")
    p2_click[index].classList.add("click2")
    list1_click[index].classList.remove("selected2")
    list1_click[index].classList.add("not__selected2")
    list2_click[index].classList.remove("not__selected2")
    list2_click[index].classList.add("selected2")
   
})
p1_click[index1].addEventListener("click" , ()=>{
    tab__btn[index1].classList.remove("active2")
    p1_click[index1].classList.add("click2")
    p1_click[index1].classList.remove("no__click2")
    p2_click[index1].classList.add("np__click2")
    p2_click[index1].classList.remove("click2")
    list1_click[index1].classList.add("selected2")
    list1_click[index1].classList.remove("not__selected2")
    list2_click[index1].classList.add("not__selected2")
    list2_click[index1].classList.remove("selected2")
    

})
p2_click[index1].addEventListener("click" , ()=>{
    tab__btn[index1].classList.add("active2")
    p1_click[index1].classList.remove("click2")
    p1_click[index1].classList.add("no__click")
    p2_click[index1].classList.remove("np__click")
    p2_click[index1].classList.add("click2")
    list1_click[index1].classList.remove("selected2")
    list1_click[index1].classList.add("not__selected2")
    list2_click[index1].classList.remove("not__selected2")
    list2_click[index1].classList.add("selected2")
   
})

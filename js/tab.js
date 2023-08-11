let p1 = document.querySelector(".click")
let p2 = document.querySelector(".no__click")
let tab__btn = document.querySelector(".switch")
let list1 = document.querySelector(".selected")
let list2 = document.querySelector(".not__selected")

let base = {
    p1 :true,
    p2:false,
    list1:true,
    list2:false,
    tab:false
}
document.addEventListener("DOMContentLoaded",()=>{
    let key =JSON.parse( localStorage.getItem("base"))
    if(key.p1 == true){
        p1.classList.add("click")
        p1.classList.remove("no__click")
    }
    else{
        p1.classList.remove("click")
        p1.classList.add("no__click")
    }
    if(key.p2 == true){
        p2.classList.remove("np__click")
        p2.classList.add("click")
    }
    else{
        p2.classList.add("np__click")
        p2.classList.remove("click")
    }
    if (key.list1 == true){
        list1.classList.add("selected")
        list1.classList.remove("not__selected")
        list2.classList.add("not__selected")
        list2.classList.remove("selected")
    }
    else{
        list1.classList.remove("selected")
        list1.classList.add("not__selected")
        list2.classList.remove("not__selected")
    }
    if(key.tab == true){
        tab__btn.classList.add("active")
        console.log(base.tab);
    }
    else{
        tab__btn.classList.remove("active")
        
    }
})
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
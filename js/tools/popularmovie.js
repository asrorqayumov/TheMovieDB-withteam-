const iconDown = document.querySelector('.fa-chevron-down')
const iconrigt = document.querySelector('.fa-chevron-right')
const noneBox = document.querySelector('.sort__box2')

iconDown.addEventListener('click', ()=>{
    noneBox.classList.remove('none')
    iconDown.classList.add('none')
    iconrigt.classList.remove('none')
})
iconrigt.addEventListener('click',()=>{
    noneBox.classList.add('none')
    iconDown.classList.remove('none')
    iconrigt.classList.add('none')
})

const iconDown2 = document.querySelector('.down')
const iconrigt2 = document.querySelector('.right')
const noneBox2 = document.querySelector('.hide__box')

iconDown2.addEventListener('click', ()=>{
    noneBox2.classList.remove('none')
    iconDown2.classList.add('none')
    iconrigt2.classList.remove('none')
})
iconrigt2.addEventListener('click',()=>{
    noneBox2.classList.add('none')
    iconDown2.classList.remove('none')
    iconrigt2.classList.add('none')
})


const genresBtn = document.querySelectorAll('.button-genres')
const arrBtns = Array.from(genresBtn);

for (const iterator of arrBtns) {
    iterator.addEventListener("click",()=>{
        iterator.classList.toggle("aqua")
        console.log(iterator);
    })
}
let wth = document.querySelectorAll(".certification__type")
const certificat = Array.from(wth);
for (const iterator of certificat) {
    iterator.addEventListener("click",()=>{
        iterator.classList.toggle("aqua")
        console.log(iterator);
    })
}

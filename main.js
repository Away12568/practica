const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const body = document.querySelector("body")
const img1 = document.querySelector(".img")
const img = document.querySelector(".img")
const btn3 = document.querySelector("#btn3")
const niga = document.querySelector(".niga")
const noniga = document.querySelector(".noniga")

btn2.onclick = () => {
    niga.classList.add("none")
    noniga.classList.remove("block")
    
}

btn3.onclick = () => {
    niga.classList.toggle("none")
    noniga.classList.toggle("none")
}


// btn3.onclick = () => {
//     const maxWidth = window.innerWidth - btn3.offsetWidth
//     const maxHeight = window.innerHeight - btn3.offsetHeight

//     const randomx = Math.floor(Math.random() * maxWidth / 2.2 )
//     const randomy = Math.floor(Math.random() * maxHeight / 2.2 )
//     // console.log( randomx,  randomy );
    
//     btn3.style.transform = `translate(${randomx}px, ${ randomy}px)`
// }





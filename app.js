const a = document.getElementsByTagName('body')[0]
const b = document.getElementById("button")
const c = document.getElementById("button-clear")
const d = document.getElementById("textarea")
const e = document.getElementById('result')
const f = document.getElementById('logo')

function buttonClickHandler(){
    a.classList.toggle('body-success')
    e.innerHTML = "TRUE"
}

function clearHandler(){
    d.value = " "
    a.classList.toggle('body-success')
    e.innerHTML = " "
}

b.addEventListener('click', buttonClickHandler)
c.addEventListener('click', clearHandler)
window.addEventListener('scroll', ()=>{
    f.classList.add('logo-reduced')
})
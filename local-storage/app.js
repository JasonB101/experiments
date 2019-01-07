var fromStorage = localStorage.getItem('clicked') || localStorage.setItem ('clicked', 0)
var pTag = document.querySelector('p')
pRender()
window.addEventListener("click", updateClicker)

function updateClicker(){
    fromStorage++
    localStorage.setItem('clicked', fromStorage) 
    pRender()
}

function pRender(){
    pTag.textContent = "You have clicked the screen " + fromStorage + " times!"
}



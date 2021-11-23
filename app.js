const button = document.getElementById("button")
const bubble = document.getElementById("bubble")

button.addEventListener('click', () =>{
    if(bubble.style.display !== "none"){
        bubble.style.display = "none"
    }
    else {bubble.style.display = "flex"
    }
})

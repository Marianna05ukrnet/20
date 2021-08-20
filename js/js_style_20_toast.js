window.onload = function() {
document.getElementById("btn1").onclick = function() {
    M.toast({html: 'I am a toast!',
    displayLength: 4000,
    classes: "btn"
}) 
}

}
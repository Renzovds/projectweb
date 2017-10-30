function switchButton(img){
    if (img.classList.contains("on")){
            img.src = img.src.split(".gif").join(".png");
            img.classList.remove("on");
        } else {
            img.src = img.src.split(".png").join(".gif");
            img.classList.add("on");
        }
}
var allButtons = document.querySelectorAll("article button");
allButtons.forEach(function(button){
    button.addEventListener("click", function(){
        switchButton(button.childNodes[0]);
    });
});

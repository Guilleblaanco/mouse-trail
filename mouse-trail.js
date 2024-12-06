
var objects = [];
for(var i = 0; i <= 50; i++){
    var object = document.createElement("div");
    object.className = "trail";
    document.body.appendChild(object);
    objects.push(object);
}

var currentObject = 0;
window.addEventListener("mousemove", event => {
    object = objects[currentObject];
    object.style.left = (event.pageX - 5) + "px";
    object.style.top = (event.pageY - 5) + "px";
    currentObject = (currentObject + 1) % objects.length;
});
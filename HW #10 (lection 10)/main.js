let container = document.querySelector("#container");

container.addEventListener("click", function(event) {
    if (event.target.classList != "button") return;

    let sound = document.getElementById(`s${event.target.id}`);
    sound.play();

});

document.body.addEventListener("keydown", function(event) {
    let key = event.key;
    if (isNaN(key)) return;

    if (key > 0 && key < 7) {
        let sound = document.getElementById(`s${key}`);
        let active = document.getElementById(`${key}`);
        active.classList.toggle("key-hover");
        sound.play();
    }
});

document.body.addEventListener("keyup", function(event) {
    let key = event.key;
    if (isNaN(key)) return;

    if (key > 0 && key < 7) {
        let active = document.getElementById(`${key}`);
        active.classList.toggle("key-hover");
    }
});




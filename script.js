
function increaseCounter() {
    var count = Number(window.localStorage.getItem("count"));
    if (count === null) {
        count = 1;
    } else {
        count += 1;
    }
    window.localStorage.setItem("count", count);
    document.getElementById("score").innerHTML = count;
}

function decreaseCounter() {
    var count = Number(window.localStorage.getItem("count"));
    if (count === null) {
        count = -1;
    } else {
        count -= 1;
    }
    window.localStorage.setItem("count", count);
    document.getElementById("score").innerHTML = count;
}

function clearCounter() {
    window.localStorage.clear();
    document.getElementById("score").innerHTML = "";
}
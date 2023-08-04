let numstickrock = document.querySelector("#rocknum");
let numstickhiphop = document.querySelector("#hiphopnum");
let numstickpunk = document.querySelector("#punknum");


function calculo() {
    let stickrock = Number(numstickrock.value);
    let stickhiphop = Number(numstickhiphop.value);
    let stickpunk = Number(numstickpunk.value);
    return stickrock + stickhiphop + stickpunk;
}

function verify() {
    let sum = calculo();

    if (sum === 0) {
        document.getElementById("result").textContent = "Llevas 0 sticker";
    } else if (sum === 1) {
        document.getElementById("result").textContent = "Llevas 1 sticker";
    } else if (sum === 2) {
        document.getElementById("result").textContent = "Llevas 2 stickers";
    } else if (sum === 3) {
        document.getElementById("result").textContent = "Llevas 3 stickers";
    } else if (sum === 4) {
        document.getElementById("result").textContent = "Llevas 4 stickers";   
    } else if (sum === 5) {
        document.getElementById("result").textContent = "Llevas 5 stickers";   
    } else if (sum === 6) {
        document.getElementById("result").textContent = "Llevas 6 stickers";   
    } else if (sum === 7) {
        document.getElementById("result").textContent = "Llevas 7 stickers";   
    } else if (sum === 8) {
        document.getElementById("result").textContent = "Llevas 8 stickers";   
    } else if (sum === 9) {
        document.getElementById("result").textContent = "Llevas 9 stickers";   
    } else if (sum === 10) {
        document.getElementById("result").textContent = "Llevas 10 stickers";   
    } else {
        document.getElementById("result").textContent = "Llevas muchos stickers";
    }
}


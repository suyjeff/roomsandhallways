function coinFlip() {
    return Math.floor(Math.random() * 2) + 1;
}

// Drive left
document.getElementsByClassName("left-action")[0].onclick = function() {
    if (coinFlip() === 1) {
        // SUCCESS
        document.getElementById("game-gifs").style.display = "block";
        document.getElementById("good-item").style.display = "block";

        // CHANGE DESCR TEXT
        document.getElementById("game-descr").innerHTML = 
        "You take it in for the MONSTER JAM!!";

        // CHOOSE DUNK GIF
        var gifNumber = Math.floor(Math.random() * 9) + 1;
        document.getElementById("good-item").src = "assets/good/dunk_" + gifNumber + ".gif";
        setTimeout(
            function() {
                window.location.href = "drive-1.html";
        }, 6000);
    } else if (coinFlip() === 2) {
        // FAILURE
        document.getElementById("game-gifs").style.display = "block";
        document.getElementById("bad-item").style.display = "block";

         // CHANGE DESCR TEXT
         document.getElementById("game-descr").innerHTML = 
         "You miss it!";

        // CHOOSE DUNK GIF
        var gifNumber = Math.floor(Math.random() * 5) + 1;
        document.getElementById("bad-item").src = "assets/bad/block_" + gifNumber + ".gif";
        setTimeout(
            function() {
                window.location.href = "fastbreak-1.html";
        }, 6000);
    }
};

document.getElementsByClassName("right-action")[0].onclick = function() {
    if (coinFlip() === 1) {
        // SUCCESS
        document.getElementById("game-gifs").style.display = "block";
        document.getElementById("good-item").style.display = "block";

        // CHANGE DESCR TEXT
        document.getElementById("game-descr").innerHTML = 
        "What a thunderous finish!";

        // CHOOSE DUNK GIF
        var gifNumber = Math.floor(Math.random() * 9) + 1;
        document.getElementById("good-item").src = "assets/good/dunk_" + gifNumber + ".gif";
        setTimeout(
            function() {
                window.location.href = "postup-1.html";
        }, 6000);
    } else if (coinFlip() === 2) {
        // FAILURE
        document.getElementById("game-gifs").style.display = "block";
        document.getElementById("bad-item").style.display = "block";

        // CHANGE DESCR TEXT
        document.getElementById("game-descr").innerHTML = 
        "Oh no! You can't believe it!";

        // CHOOSE DUNK GIF
        var gifNumber = Math.floor(Math.random() * 5) + 1;
        document.getElementById("bad-item").src = "assets/bad/block_" + gifNumber + ".gif";
        setTimeout(
            function() {
                window.location.href = "three-1.html";
        }, 6000);
    }
};






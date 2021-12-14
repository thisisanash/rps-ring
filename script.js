let start = () => {
    document.getElementsByClassName("hero")[0].classList.add("start");
}

let refresh = () => {
    winner = false;
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
    document.getElementsByClassName("refreshScreen")[0].classList.remove("visiable");
}

let showRefreshBtn = () => {
    document.getElementsByClassName("refreshScreen")[0].classList.add("visiable");
}



// create Random number till max count
let randomNum = () => {
    return Math.floor(Math.random() * 3);
}

let moveOption = ['rock', 'paper', 'scissor'];

let computerSelect, playerSelect;
// computer Move
let computerMove = () => {
    computerSelect = moveOption[randomNum()];
    document.getElementById("computerHand").src = "Image/" + computerSelect + ".png";
}

// player Move
let playerMove = (opt) => {
    playerSelect = moveOption[opt];
    document.getElementById("playerHand").src = "Image/" + playerSelect + ".png";
}

// animations
let addShakeAnimation = () => {
    document.getElementById("computerHand").style.animationName = "shake";
    document.getElementById("playerHand").style.animationName = "shake";
    document.getElementById("computerHand").src = "Image/rock.png";
    document.getElementById("playerHand").src = "Image/rock.png";
}
let removeShakeAnimation = () => {
    document.getElementById("computerHand").style.animationName = "removed";
    document.getElementById("playerHand").style.animationName = "removed";
}

// Compare Function
let result;
let compare = (platerAct, computerAct) => {
    if (platerAct === computerAct) {
        result = "tie";
    }
    if (platerAct == "rock" && computerAct == "paper") {
        result = "lost";
    }
    if (platerAct == "rock" && computerAct == "scissor") {
        result = "win";
    }
    if (platerAct == "paper" && computerAct == "rock") {
        result = "win";
    }
    if (platerAct == "paper" && computerAct == "scissor") {
        result = "lost";
    }
    if (platerAct == "scissor" && computerAct == "rock") {
        result = "lost";
    }
    if (platerAct == "scissor" && computerAct == "paper") {
        result = "win";
    }

    console.log(result);
    action(result);

}


let action = (act) => {
    let ring = document.getElementsByClassName("ring")[0];
    let vs = document.getElementById("vs");
    let dashBoardSide = document.getElementsByClassName("side");
    if (act === "win") {
        ring.style.borderColor = "#4DF84A";
        vs.style.color = "#4DF84A";
        dashBoardSide[0].style.borderColor = "#4DF84A";
        document.getElementsByClassName("resultState")[0].innerHTML="You Win";
        scorePlus(document.getElementById("playerScore"));
    }
    if (act === "lost") {
        ring.style.borderColor = "#F84A4A";
        vs.style.color = "#F84A4A";
        dashBoardSide[1].style.borderColor = "#F84A4A";
        document.getElementsByClassName("resultState")[0].innerHTML="You Lose";
        scorePlus(document.getElementById("computerScore"));
    }
    if (act === "tie") {
        ring.style.border = " 5px solid #808080";
        vs.style.color = "#808080";
    }

    setTimeout(() => {
        ring.style.border = " 5px solid #FFF";
        vs.style.color = "#000b24";
        dashBoardSide[0].style.borderColor = "#FFF";
        dashBoardSide[1].style.borderColor = "#FFF";
    }, 1000);

}

let winner = false;
let scorePlus = (whose) => {
    whose.innerHTML = parseInt(whose.innerHTML) + 1;

    // winner stats
    if (whose.innerHTML == '5' && winner == false) {
        console.log("here");
        if (whose == document.getElementById("playerScore")) {
            document.getElementsByClassName("resultScreen")[0].classList.add("win");
            winner = true;
            document.getElementsByClassName("resultScreen")[0].innerHTML = "YOU <br> WIN";

            setTimeout(() => {
                document.getElementsByClassName("resultScreen")[0].classList.remove("win");
                showRefreshBtn();
            }, 2000);
        }
        if (whose == document.getElementById("computerScore")) {
            document.getElementsByClassName("resultScreen")[0].classList.add("lost");
            winner = true;
            document.getElementsByClassName("resultScreen")[0].innerHTML = "YOU <br> LOSE";

            setTimeout(() => {
                document.getElementsByClassName("resultScreen")[0].classList.remove("lost");
                showRefreshBtn();
            }, 2000);
        }
    }
}


// onclick fucntion on button

let playerAction = (act) => {
    addShakeAnimation();
    setTimeout(() => {
        playerMove(act);
        computerMove();
        removeShakeAnimation();
        compare(playerSelect, computerSelect);
    }, 1500);


}

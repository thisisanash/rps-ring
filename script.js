
let start = () => {
    document.getElementsByClassName("hero")[0].classList.add("start");
}

let refresh = () => {
    winner = false;
    document.getElementById("playerScore").innerHTML = 0;
    document.getElementById("computerScore").innerHTML = 0;
    document.getElementsByClassName("refreshScreen")[0].classList.remove("visible");
}

let showRefreshBtn = () => {
    document.getElementsByClassName("refreshScreen")[0].classList.add("visible");
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
    document.getElementById("computerHand").src = "Images/" + computerSelect + ".png";
}

// player Move
let playerMove = (opt) => {
    playerSelect = moveOption[opt];
    document.getElementById("playerHand").src = "Images/" + playerSelect + ".png";
}

// animations
let addShakeAnimation = () => {
    document.getElementById("computerHand").style.animationName = "shake";
    document.getElementById("playerHand").style.animationName = "shake";
    document.getElementById("computerHand").src = "Images/rock.png";
    document.getElementById("playerHand").src = "Images/rock.png";
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

// do an action according to act reffered from result in campare function
let action = (act) => {

    let ring = document.getElementsByClassName("ring")[0];
    let vs = document.getElementById("vs");
    let dashBoardSide = document.getElementsByClassName("side");
    let resultState = document.getElementsByClassName("resultState")[0].innerHTML;

    if (act === "win") {
        ring.style.borderColor = "#4DF84A";
        vs.style.color = "#4DF84A";
        dashBoardSide[0].style.borderColor = "#4DF84A";
        resultState = "You Win";
        scorePlus(document.getElementById("playerScore"));
    }
    if (act === "lost") {
        ring.style.borderColor = "#F84A4A";
        vs.style.color = "#F84A4A";
        dashBoardSide[1].style.borderColor = "#F84A4A";
        resultState = "You Lose";
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
        let resultScreen = document.getElementsByClassName("resultScreen")[0];
        if (whose == document.getElementById("playerScore")) {

            winner = true;
            resultScreen.classList.add("win");
            resultScreen.innerHTML = "YOU <br> WIN";

            setTimeout(() => {
                resultScreen.classList.remove("win");
                showRefreshBtn();
            }, 2000);
        }

        if (whose == document.getElementById("computerScore")) {

            winner = true;
            resultScreen.classList.add("lost");
            resultScreen.innerHTML = "YOU <br> LOSE";

            setTimeout(() => {
            
                resultScreen.classList.remove("lost");
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


document.getElementById("rock").addEventListener("click", function(){ playerAction(0) });
document.getElementById("paper").addEventListener("click", function(){ playerAction(1) });
document.getElementById("scissor").addEventListener("click", function(){ playerAction(2) });
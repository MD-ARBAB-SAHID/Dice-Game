var player1 = prompt("Enter Player 1 Name : ");
var player2 = prompt("Enter Player 2 Name : ");



var randomNum1 = Math.floor((Math.random()*6)+1) ;
var randomNum2 = Math.floor((Math.random()*6)+1);

document.querySelector(".img1").setAttribute("src","./images/dice" + randomNum1 + ".png");
document.querySelector(".img2").setAttribute("src","./images/dice" + randomNum2 + ".png");


function declareWinner()
{if(randomNum1!=randomNum2)
{
    if(randomNum1 > randomNum2)
    {
        document.querySelector("h1").innerHTML = player1+" Wins !";
    }
    else
    {
        document.querySelector("h1").innerHTML = player2+" Wins !";
    }
}

else
{
    document.querySelector("h1").innerHTML = "Draw !";
}
}

declareWinner();
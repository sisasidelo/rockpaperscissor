let uScore = 0;
let cScore = 0;
let attempts = 0;

let spanAttempt = document.getElementById("atp");
let spanUscore =  document.getElementById("user-score");
let spanCscore = document.getElementById("comp-score");

let divScoreBoard = document.querySelector(".scoreboard");
let divResult = document.querySelector(".result");
let rsltMsg = document.getElementById("rslt");

let divRock = document.getElementById("rock");
let divPaper = document.getElementById("paper");
let divScissor = document.getElementById("scissor");
	function result (){
		if(uScore > cScore){
				alert("Game over: You win");
				setTimeout(function(){reset();},0);
			}else if (uScore < cScore){
				alert("Game Over: You lose!");
				setTimeout(function(){reset();},0);
				}
			else{
				alert("Game Over: Draw!");
				setTimeout(function(){reset();},0);
				}
		}
	function attempt(){
		attempts++;
		if (attempts <3){
			spanAttempt.innerHTML = attempts;}
		else if(attempts == 3){
				spanAttempt.innerHTML = attempts;
				setTimeout(function(){result();},200);
			}
		}
	function reset(){
		uScore = 0;
		cScore = 0;
		attempts = 0;
		spanUscore.innerHTML = uScore;
		spanCscore.innerHTML = cScore;
		spanAttempt.innerHTML = attempts;
		}
	function win(){
		uScore++;
		spanUscore.innerHTML = uScore;
		spanCscore.innerHTML = cScore;
		}
	function lose(){
		cScore++;
		spanCscore.innerHTML = cScore;
		spanUscore.innerHTML = uScore; 
		}
	function draw(){
		//
		}

	function getCompChoice(){
		const choices = ['r','p','s'];
		const randNum = Math.floor( Math.random()*3);
		return choices[randNum];
		}

	function game(usrChoice){
		const compChoice = getCompChoice();
		let rs = "Rock crushes Scissor.";
		let sp = "Scissor cuts Paper.";
		let pr = "Paper covers Rock.";
		switch(usrChoice+compChoice){
			case 'rs':
				win();
				rsltMsg.innerHTML = rs + " You win!";
				break;
			case 'sp':
				win();
				rsltMsg.innerHTML = sp + " You win!";
				break;
			case 'pr':
				win();
				rsltMsg.innerHTML = pr + " You win!";
				break;
			case 'sr':
				lose();
				rsltMsg.innerHTML = rs + "You lose!";
				break;
			case 'ps':
				lose();
				rsltMsg.innerHTML = sp + "You lose!";
				break;
			case 'rp':
				lose();
				break;
			case 'rr':
			case 'pp':
			case 'ss':
				rsltMsg.innerHTML = "Draw!";
				break;
			}
		}

function main(){
divRock.addEventListener('click',function() 
	{
		game('r');
		attempt();

	});

divPaper.addEventListener('click',function()
	{
		game('p');
		attempt();

	});
divScissor.addEventListener('click',function()
	{
		game('s');
		attempt();
	});
}

main();

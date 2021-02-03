let uScore = 0;
let cScore = 0;
let attempts = 0;

let spanAttempt = document.getElementById("atp");
let spanUscore =  document.getElementById("user-score");
let spanCscore = document.getElementById("comp-score");

let divScoreBoard = document.querySelector(".scoreboard");
let divResult = document.querySelector(".result");

let divRock = document.getElementById("rock");
let divPaper = document.getElementById("paper");
let divScissor = document.getElementById("scissor");

	function attempt(){
		attempts++;
		if (attempts =>3){spanAttempt.innerHTML = attempts;}
		else {
			if(uScore > cScore){
			alert("Game over: You win");
			setTimeout(function(){reset();},2000);
			}else if (uScore < cScore){
				alert("Game Over: You lose!");
				}
			else{alert("Draw");
				setTimeout(function(){reset();},2000);
				}
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
		switch(usrChoice+compChoice){
			case 'rs':
				win();
				break;
			case 'sp':
				win();
				break;
			case 'pr':
				win();
				break;
			case 'sr':
				lose();
				break;
			case 'ps':
				lose();
				break;
			case 'rp':
				lose();
				break;
			case 'rr':
			case 'pp':
			case 'ss':
				draw();
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

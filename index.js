let uScore = 0;
let cScore = 0;

let spanUscore =  document.getElementById("user-score");
let spanCscore = document.getElementById("comp-score");

let divScoreBoard = document.querySelector(".scoreboard");
let divResult = document.querySelector(".result");

let divRock = document.getElementById("rock");
let divPaper = document.getElementById("paper");
let divScissor = document.getElementById("scissor");

let attempts = 0;


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

	});

divPaper.addEventListener('click',function()
	{
		game('p');

	});
divScissor.addEventListener('click',function()
	{
		game('s');

	});
}

main();

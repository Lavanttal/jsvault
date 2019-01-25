var codeContainer = document.getElementById("code-container");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;
//get all elements (div) with the classname "buttonNumber"
var numberButtons = document.getElementsByClassName('buttonNumber');
var greenBlock = document.getElementById("greenBlock");

//counter start at zero
var intervalTimer = 0;

function disableButtons() {

	//used to loop through all buttons and disable them with attribute disable
	//so that it isn't possible to click more then three times
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].setAttribute('disabled', 'disabled');
	}
	
}

function enableButtons() {

	//used to loop through all buttons and enable them again, remove attribute disabled
	for(i=0; i < numberButtons.length; i++) {
		numberButtons[i].removeAttribute('disabled');
	}

}


function getNumber(clickedButton) {
	clickCounter++;
	
    codeContainer.innerHTML += clickedButton.value;


	if (clickCounter == 1) {
		numberOne = clickedButton.value;
	} else if (clickCounter == 2) {
		numberTwo = clickedButton.value;
	} else {
		numberThree = clickedButton.value;
	}

	if(clickCounter == 3) {

		disableButtons();

		if(numberOne == 3 && numberTwo == 1 && numberThree == 1) {
			var blink = setInterval(function() {
				//add +1 every time the setinterval function runs		
				intervalTimer++;
			
				//method to show div on and off
				//change the css of the green and red box to create a blinking effect
				if (greenBlock.style.visibility == 'hidden') {
					greenBlock.style.visibility = 'visible';
				}else {
					greenBlock.style.visibility = 'hidden';
				}
			
				//check if the interval has runned ten times
				if(intervalTimer == 10) {
					
					enableButtons();
					//ClearInterval function stops the interval after 10 times
					clearInterval(blink);
				}

			}, 500);
				var elem = document.getElementById("animate");   
				var pos = 0;
				var id = setInterval(frame, 5);
				function frame() {
				  if (pos == 350) {
					clearInterval(id);
				  } else {
					pos++; 
					elem.style.top = pos + "px"; 
					elem.style.left = pos + "px"; 
				  }
				}
			var intervalTimer = 0;
			alert("Correct");
			
		}else {
			var blink = setInterval(function() {
				//add +1 every time the setinterval function runs		
				intervalTimer++;
			
				//method to show div on and off
				if (redBlock.style.visibility == 'hidden') {
					redBlock.style.visibility = 'visible';
					
				}else {
					redBlock.style.visibility = 'hidden';
				}
			
				//check if the interval has runned ten times
				if(intervalTimer == 10) {
					enableButtons();
					//ClearInterval function stops the interval after 10 times
					clearInterval(blink);
				}

			}, 500);
			var intervalTimer = 0;
			alert("Incorrect!");
			var elem = document.getElementById("animate2");   
			var pos = 0;
			var id = setInterval(frame, 5);
			function frame() {
			  if (pos == 350) {
				clearInterval(id);
			  } else {
				pos++; 
				elem.style.top = pos + "px"; 
				elem.style.left = pos + "px"; 
			  }
			}
		}

	}
}
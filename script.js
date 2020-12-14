let compNum
let hint = document.querySelector(".hint")
let tries
document.querySelector(".new_game").onclick=function () {
	compNum=Math.ceil(Math.random()*10)
	console.log(compNum)
	hint.innerHTML=""
	tries=3
	disableButtons(false)
	document.querySelector(".attempt").innerHTML='Attempt: '+tries
}
document.querySelector(".buttons").onclick=function(){
	if (event.target.className=="number") {
		let myNum = event.target.innerHTML
		if (myNum==compNum) {
			hint.innerHTML="You Win!"
		}
		if (myNum>compNum) {
			hint.innerHTML="NO.Number is lower."
			tries--
		}
		if (myNum<compNum) {
			hint.innerHTML="NO.Number is bigger."
			tries--

		}
		if (tries<1) {
		disableButtons(true)

	}
	document.querySelector(".attempt").innerHTML='Attempt: '+tries
}
}




function disableButtons(disabled){
	let allButtons=document.querySelectorAll('.number')
	for (var i = 0; i < allButtons.length; i++) {
		allButtons[i].disabled=disabled
	}
	
}

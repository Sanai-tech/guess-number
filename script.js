let compNum
let hint = document.querySelector(".hint")
document.querySelector(".new_game").onclick=function () {
	compNum=Math.ceil(Math.random()*10)
	console.log(compNum)
	hint.innerHTML=""
}
document.querySelector(".buttons").onclick=function(){
	if (event.target.className=="number") {
		let myNum = event.target.innerHTML
		if (myNum==compNum) {
			hint.innerHTML="You Win!"
		}
		if (myNum>compNum) {
			hint.innerHTML="NO.Number is lower."
		}
		if (myNum<compNum) {
			hint.innerHTML="NO.Number is bigger."
		}
	}
}
















// когда мы нажмем нью гейм,то компьютер загадывает число
// когда мы нажмем на цифру,то надо сравнить цифру компьютера с нашей
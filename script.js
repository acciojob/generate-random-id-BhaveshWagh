function makeid(l) {
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  let radnomStr = ""
    for(let i = 1; i <= l; i++){
      let randomIndex = parseInt(Math.random()*str.length)
      radnomStr += str[randomIndex]
    }
    return radnomStr
	
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));

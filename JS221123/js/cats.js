let rnd = Math.floor((Math.random()*5)+1)

// console.log(rnd);

document.getElementById("pic").src = "img/"+rnd+".jpg";
document.getElementById("pic").alt = +rnd+".jpg";
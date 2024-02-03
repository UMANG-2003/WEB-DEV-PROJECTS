let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();
console.log(currentTime)

hrs.innerHTML = ((currentTime.getHours()<10?"0":"")+currentTime.getHours());
min.innerHTML = ((currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes());
sec.innerHTML = ((currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds());
},1000)//1000milisec = 1sec
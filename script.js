function updatetime(){
let gettime = new Date() 
let hour = gettime.getHours()
let minute = gettime.getMinutes()
let second = gettime.getSeconds()

hour = (hour < 10) ? "0" + hour : hour;
minute = (minute < 10) ? "0" + minute:minute;
second = (second<10) ? "0" + second : second;

let  time = `${hour}:${minute}:${second}`
return time;
}

let time 
setInterval(() => {
    time = updatetime()
    let tm = document.getElementById("time")
    tm.innerText = time

}, 1000);



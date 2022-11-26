var dateb = new Date();
var deadline= new Date("2022-12-20")
var current = new Date()
var time = deadline.getTime() - current.getTime()
const days=Math.floor(time/(24*60*60*1000));
const hours=Math.floor(time% (1000 * 60 * 60))/(1000*60*60)
const minutes=Math.floor (time % (1000 * 60*60))/(1000*60)
const seconds=Math.floor((time%(1000*60))/1000)
console.log(days,"Days",hours,"Hours",minutes,"Minutes",seconds,"Seconds")
const offerEnd="15 nov 2024";
function countdown(){
    let end= new Date(offerEnd);
    let now=new Date();
    let totalsecound=(end-now)/1000;
    let days= Math.floor(totalsecound/24/60/60);
    let hour =Math.floor(totalsecound%(24*3600)/3600);
    let minutes=Math.floor(totalsecound%3600/60);
    let secound= Math.floor(totalsecound%60);
    // console.log(secound)
    // console.log(`Days:${days},hour:${hour},minutes:${minutes},secound:${secound }`)
    
    document.querySelector("#day").innerHTML=formate(days);
    document.querySelector("#hour").innerHTML=formate(hour);
    document.querySelector("#minute").innerHTML=formate(minutes);
    document.querySelector(".secound").innerHTML=formate(secound)
    
}

function formate(time){
    return time < 10 ? (`0${time}`):time;
}

countdown()     
setInterval(countdown,1000);



function handle(product,isIncrage){
    const pro=document.getElementById(product +"-count")
    var plus=Number(pro.value);
    if(isIncrage==false && plus>0){
     pro.value=plus-1;
    }
    
    if(isIncrage==true){
        pro.value=plus+1;
    }


}
function countDown(num){
    let counter = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(counter);
            console.log("DONE!");
        }
        else {console.log (num);}
    },1000);
};
function randomGame(){
    let decimal;
    let tries = 0;
    let timer = setInterval(function(){
        decimal=Math.random();
        tries++;
        if (decimal>.75){
            clearInterval(timer);
            console.log("It took " + tries + " try/tries to get a decimal greater than .75");
        }
    },1000);
 }

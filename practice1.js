console.log("For loop Example");
var dailyWork = ["Unlock the module at night 8:00","Let's do practice after seeing video","Take notes when you see videos","Practice all the module after finishing","When you don't understand any topic, join in the support session"];
for(let i=0; i<10; i++){
    console.log(i+1);
    for(let l=0; l<dailyWork.length; l++){
        console.log(dailyWork[l]);
    }
}
console.log();
console.log();
console.log("While loop Example");
var i=10;
while(i>0){
    console.log(i);
    let j=dailyWork.length;
    while(j>0){
        console.log(dailyWork[j-1]);
        j--;
    }
    i--;
}
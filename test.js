let num1 = 10;
let num2= 5;
let num3 = 5;




function calcul2(a,b){
    let result = a + b;
    return result;
}


function calcul3(a,b,c){
    let total = calcul2(calcul2(a,b), c);
    return total
}
let total = calcul3(num1,num2,num3);



console.log(total);
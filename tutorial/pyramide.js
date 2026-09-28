let high = 5;

if(high > 0 ){

    for(let i = 1 ; i<= high; i++){
        let TextLine = "";

        for(let j = 1 ; j<= high - i ; j++){
            TextLine = TextLine + " ";
        }
        for(let e = 1 ; e<= (2 * i) - 1 ;e++){
            TextLine = TextLine + "*"
        }
        console.log(TextLine);
    }


}else{
    console.log("high invalid");
}

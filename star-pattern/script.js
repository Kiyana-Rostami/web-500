let num = Number(prompt("enter a number:"));
let result = "";
for ( const i=num ;i>= 1 ; --i ){
    for(const j=1 ; j<=i ; ++j){
        console.log("*")
    }
    console.log();
}

alert(result);

const rectangle = require('./node-module/rectangle');
const square = require('./node-module/callbackNode')
function solveRect(l,b){
    console.log("lenght= "+l+" width =" +b+" area = "+rectangle.area(l,b));
    console.log("lenght= "+l+" width =" +b+" perimeter = "+rectangle.perimeter(l,b));
}

solveRect(2,4);
solveRect(12,4);


function solveSquare(l,b){
    square(l,b, (err,ans)=>{
        if(err)
            console.log("err ",err);
        else{
            console.log("Square lenght= "+l+" width =" +b+" area = "+ans.area());
            console.log("Square lenght= "+l+" width =" +b+" area = "+ans.perimeter());    
        }
    })
    
}

solveSquare(4,6);
solveSquare(4,4);
const rectangle = require('./node-module/rectangle');

function solveRect(l,b){
    console.log("lenght= "+l+" width =" +b+" area = "+rectangle.area(l,b));
    console.log("lenght= "+l+" width =" +b+" perimeter = "+rectangle.perimeter(l,b));
}

solveRect(2,4);
solveRect(12,4);
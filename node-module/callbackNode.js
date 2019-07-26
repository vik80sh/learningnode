module.exports=(x,y,callback)=>{
    if(x!==y){
        callback(new Error("This is not square"),null)
    }else{
        callback(null, 
        {
            area:()=>x*y,
            perimeter:()=>x*y
        })  
    }
}
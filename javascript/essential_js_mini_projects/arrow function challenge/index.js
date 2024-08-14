// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }

// console.log(speedWarning(40))

const speedWarning=(speedlimit,speed) => {
    if(speed>speedlimit){
        return `You are going at ${speed} mph!.`
    }
    
    else
    {
        return `HAPPY JOURNEY`
    }

}
console.log(speedWarning(60,40))



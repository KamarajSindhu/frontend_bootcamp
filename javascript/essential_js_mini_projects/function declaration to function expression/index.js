

// function getTheftAlert(numberOfTransactionsHour) {
//     if (numberOfTransactionsHour > 5) {
//         return `You have made ${numberOfTransactionsHour} transactions 
//                 in the past hour. We think your card might have been 
//                 compromised`
//     }
// }

const getTheftAlert = function(numberOfTransactionsHour){
    if (numberOfTransactionsHour > 5) {
        return `You have made ${numberOfTransactionsHour} transactions 
                in the past hour. We think your card might have been 
                compromised`
    }
}
console.log(getTheftAlert(10))
 


